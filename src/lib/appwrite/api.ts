import { INewUser } from "@/types/type";
import {ID} from 'appwrite'
import { account } from "./config";
export async function createUserAccount(user:INewUser){
    try {
        const newAccount = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.username,
        )
        return newAccount;
    } catch (error) {
        console.log(error)
        return error
    }
}