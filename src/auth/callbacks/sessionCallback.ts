import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export async function sessionCallback({ session, token }: { session: Session; token: JWT }): Promise<Session> {
    const defaultExpirationTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    if (token) {
        session.user = {
            ...session.user,
            id: token.id as string,
            keepSignedIn: token.keepSignedIn as boolean,
        };
        session.expires = token.expires as string ?? defaultExpirationTime;
    }
    return session;
}