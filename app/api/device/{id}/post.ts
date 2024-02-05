import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Table } from "sst/node/table";
import { DynamoDB } from "aws-sdk";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters.id.trim();
  const message = JSON.parse(event.body).message;
  const user = event.headers.uuid.trim()

  const params = {
    device_id: id,
    messages: message,
    user: user
  }

  const db = new DynamoDB.DocumentClient();

  const putParams = {
    TableName: Table.DeviceTable.tableName,
    Item: params,
  };

  try {
    await db.put(putParams).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ response: "Item updated/created successfully", update: params }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};