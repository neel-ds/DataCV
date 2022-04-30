import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('626c227c06763bc2525f') // Your project ID
;


 export const account = sdk.account;