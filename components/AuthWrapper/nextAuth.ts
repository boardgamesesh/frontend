import AWS from "aws-sdk";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter"

AWS.config.update({
  accessKeyId: process.env.TESTING_AWS_ACCESS_KEY,
  secretAccessKey: process.env.TESTING_AWS_SECRET_KEY,
  region: "ap-southeast-2",
});

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_DOMAIN,
        port: 587,
        auth: {
          user: process.env.TESTING_SMTP_USERNAME,
          pass: process.env.TESTING_SMTP_PASSWORD
        }
      },
      from: "no-reply@boardgamesesh.com"
    }),
  ],
  adapter: DynamoDBAdapter(
    new AWS.DynamoDB.DocumentClient()
  ),
});
