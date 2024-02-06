import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
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
    callbacks: {
        async session({ session, token, user }) {
          session.user.id = user.id
          
          return session
        }
      },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
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