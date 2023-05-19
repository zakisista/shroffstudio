import NextAuth from "next-auth";
import { authOptions } from "zaki/server/auth";

export default NextAuth(authOptions);
