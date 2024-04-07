import { JWT } from "next-auth/jwt";
import { MAX_AGE, ONE_DAY } from "../constants";
import { User } from "next-auth";

export async function jwtCallback({ token, user }: { token: JWT; user: User }): Promise<JWT> {
    const now = new Date();

    // Если пользователь авторизован, обновляем токен
    if (user) {
        token.id = user.id;
        token.keepSignedIn = user.keepSignedIn;

       
    } else if (token.expires) {
        const tokenExpiration = new Date(token.expires as string);
        // Проверяем, не истек ли срок действия токена
        if (now > tokenExpiration) {
            throw new Error('Token has expired');
        }
    }
    // Устанавливаем срок действия токена
    const expirationTime = token.keepSignedIn ? MAX_AGE : ONE_DAY;
    token.expires = new Date(now.getTime() + expirationTime).toISOString();
    console.log(`Token expiration time set to ${token.expires}`);

    return token;
}