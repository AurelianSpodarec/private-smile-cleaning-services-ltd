// ============================================================
// API Auth
// ============================================================

import FetchSmileCleaning from "../fetch/FetchSmileCleaning"
import { IAuth } from "@/interfaces/IAuth"

// Login
// ===========================================

export async function authLogin(data: IAuth) {
  return await FetchSmileCleaning('login', 'POST', data)
}
