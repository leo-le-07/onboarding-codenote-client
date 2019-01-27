export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-hihihi"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://89r5vlxsub.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Vexvjx1Tt",
    APP_CLIENT_ID: "6k0drc9ev3hihfdo5a5g13mj9m",
    IDENTITY_POOL_ID: "us-east-1:c6779970-80ff-4937-87f5-63c0292f82c4"
  }
};
