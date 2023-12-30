import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.APPWRITE_PROJECT_ID,
  url: import.meta.env.APPWRITE_URL,
};
console.log(appwriteConfig.projectId)
export const client = new Client();
client.setProject('6553805ec6a13cec86dd');
client.setEndpoint("https://cloud.appwrite.io/v1");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
