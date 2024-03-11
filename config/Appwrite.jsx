import { Client, Account, ID, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65edb27d524c45eae0e1'); // Replace with your project ID

export const account = new Account(client);
export const database = new Databases(client, "65edda0311776488b733");
export {ID} from 'appwrite'
