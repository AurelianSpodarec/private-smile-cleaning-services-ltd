// ============================================================
// API Auth
// ============================================================
import FetchSmileCleaning from "../fetch/FetchSmileCleaning"
import { IAuth } from "@/interfaces/IAuth"
import { IUser } from "@/interfaces/IUser"

// Login
// ===========================================

export async function authLogin(data: IAuth): Promise<IUser> {
  return await FetchSmileCleaning('login', 'POST', data)
}
