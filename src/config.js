const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-jkno",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tn80l8ahu6.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_t4ebaf8XN",
    APP_CLIENT_ID: "bkv9d47qdisceia6v1oeuu9e9",
    IDENTITY_POOL_ID: "us-east-1:cda2bfbb-dc3a-49f3-8940-ac8da56be24a",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HLWguKAG5eloRI7yQRPOyQlKmdXXE2bab2nKHZlP3A6uaEH4G8atVvRlelD2q5DPRHEQxSaZNG755wjnbACut1c00jNldGLHD",
};

export default config;