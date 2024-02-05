import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const id = event.pathParameters.id;
  return id
    ? {
        statusCode: 200,
        body: JSON.stringify({id: id}),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
};