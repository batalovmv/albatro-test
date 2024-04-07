import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export async function sessionCallback({ session, token }: { session: Session; token: JWT }): Promise<Session> {
    const now = new Date();
    const tokenExpiration = new Date(token.expires as string);  
    
    
    // Преобразовываем expires из token в объект Date

    // Проверяем, истек ли срок действия токена
    if (now > tokenExpiration) {
        console.log(`Token has expired`);
        throw new Error('Token has expired');
      
    }

    // Если токен все еще действителен, обновляем сессию
    if (token) {
        console.log(`Token has not expired`);
        session.user = {
            ...session.user,
            id: token.id as string,
            keepSignedIn: token.keepSignedIn as boolean,
        };
        session.expires = token.expires as string;
    }

    return session;
}