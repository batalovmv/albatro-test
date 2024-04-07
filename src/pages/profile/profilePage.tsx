import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProfilePage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/auth/signin');
        }
    }, [session, status, router]);

    if (status === 'loading') {
        return <div>Загрузка...</div>;
    }

    const handleSignOut = async () => {
        await signOut({ redirect: false });
        router.push('/auth/signin');
    };
console.log(`session`, session);
    return (
        <div>
            <h1>Профиль</h1>
            <p>Добро пожаловать, {session?.user?.email}!</p>
            <button onClick={handleSignOut}>Выйти</button>
        </div>
    );
};

export default ProfilePage;
