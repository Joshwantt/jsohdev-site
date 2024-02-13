import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "sst/node/table";
import { DynamoDB } from "aws-sdk";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const user = event.headers.uuid.trim();
  const db = new DynamoDB.DocumentClient();

  const params = {
    TableName: Table.DeviceTable.tableName,
    KeyConditionExpression: "#usr = :user", // using ExpressionAttributeNames
    ExpressionAttributeNames: {
      "#usr": "user" // define a placeholder for the reserved keyword
    },
    ExpressionAttributeValues: {
      ":user": user
    }
  };

  try {
    const result = await db.query(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};