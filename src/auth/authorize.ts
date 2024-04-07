import { User } from "next-auth";


export async function authorize(credentials: any) {
    const res = await fetch("https://reqres.in/api/login", {
        method: 'POST',
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
        }),
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (res.ok && data.token) {
        const keepSignedIn = credentials.keepSignedIn === "true";
        const authorizedUser: User = {
            id: data.token,
            keepSignedIn: keepSignedIn,
            email: credentials.email || ''
        };
        return authorizedUser;
    } else {
        throw new Error(data.error || 'Authentication failed');
    }
}