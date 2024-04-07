// types/next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth";
import { Session } from "next-auth";

declare module "next-auth" {

    interface User {
        id: string;
        keepSignedIn: boolean;
        email: string;
    }
    interface Session {
        user: {
            id?: string;
            keepSignedIn?: boolean;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}