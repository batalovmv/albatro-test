import { JWT } from "next-auth/jwt";
import { MAX_AGE, ONE_DAY } from "../constants";
import { User } from "next-auth";

export async function jwtCallback({ token, user }: { token: JWT; user: User }): Promise<JWT> {
    if (user) {
        token.id = user.id;
        token.keepSignedIn = user.keepSignedIn;
    }
    token.expires = new Date(Date.now() + (token.keepSignedIn ? MAX_AGE * 1000 : ONE_DAY * 1000)).toISOString();
    return token;
}