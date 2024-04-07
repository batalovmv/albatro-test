import { authorize } from "@/auth/authorize";
import { jwtCallback } from "@/auth/callbacks/jwtCallback";
import { sessionCallback } from "@/auth/callbacks/sessionCallback";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
                keepSignedIn: { label: "Keep me signed in", type: "checkbox" }
            },
            authorize,
        }),
    ],
    callbacks: {
        jwt: jwtCallback,
        session: sessionCallback,
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
});
