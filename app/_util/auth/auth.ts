import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Email from "next-auth/providers/email"
import { DynamoDBAdapter } from "@auth/dynamodb-adapter"
import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import { Table } from "sst/node/table";

const client = DynamoDBDocument.from(new DynamoDB(), { //maybeneed to be a new documentclient
    marshallOptions: {
        convertEmptyValues: true,
        removeUndefinedValues: true,
        convertClassInstanceToMap: true,
    },
})

export const {
    handlers: { GET, POST },
    auth,
  } = NextAuth({
    theme: {
      colorScheme: "light", // "auto" | "dark" | "light"
      logo: "/icon.svg", // Absolute URL to image
    },
    callbacks: {
        async session({ session, token, user }) {
          session.user.id = user.id,
          session.user.email = user.email
          
          return session
        }
      },
    providers: [
        GitHub,
        Email({ //nodemailer has a bad name in the default login screen. will swap when i make custom pages for next-auth.
          server: {
            host: process.env.AUTH_EMAIL_SERVER_HOST,
            port: process.env.AUTH_EMAIL_SERVER_PORT,
            auth: {
              user: process.env.AUTH_EMAIL_SERVER_USER,
              pass: process.env.AUTH_EMAIL_SERVER_PASSWORD
            }
          },
          from: process.env.AUTH_EMAIL_FROM
        }),
    ],
    adapter: DynamoDBAdapter(client, {
        tableName: Table.UserTable.tableName,
        partitionKey: "pk",
        sortKey: "sk",
        indexName: "GSI1",
        indexPartitionKey: "GSI1PK",
        indexSortKey: "GSI1SK"
  })
})