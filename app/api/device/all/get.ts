import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "sst/node/table";
import { DynamoDB } from "aws-sdk";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const user = event.headers.uuid.trim()
  const db = new DynamoDB.DocumentClient();

  const params = {
    user: user
  }

  // Update or create the item
  const getParams = {
    TableName: Table.DeviceTable.tableName,
    Key: params
  }

  try {
    const result = await db.get(getParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};