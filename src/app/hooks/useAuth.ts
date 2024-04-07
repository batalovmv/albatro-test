import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";

const useRedirectAuthenticated = (redirectPath: string): void => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push(redirectPath);
        }
    }, [status, redirectPath, router]);
};

export default useRedirectAuthenticated;