import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('626c520f915b562beb72') // Your project ID
;


 export const account = sdk.account;