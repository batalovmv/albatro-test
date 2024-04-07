import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import SignInForm from "@/app/components/signForm/SignInForm/signForm";
import SignInHeader from "@/app/components/signForm/SignInHeader/SignInHeader";
import SignUpLink from "@/app/components/signForm/SignUpLink/SignUpLink";
import ForgotPasswordLink from "@/app/components/signForm/ForgotPasswordLink/ForgotPasswordLink";
import useRedirectAuthenticated from "@/app/hooks/useAuth";
import SignInCard from "@/app/components/signForm/SignInCard";
const AUTHENTICATED_STATUS = 'authenticated';
const LOADING_STATUS = 'loading';
const SignInPage = () => {
    const { data: session, status } = useSession();
    const [error, setError] = useState<string | null>(null);
    useRedirectAuthenticated('/profile/profilePage');
    const handleSignIn = async (email: string, password: string, keepSignedIn: boolean)  => {
        const result = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password,
            keepSignedIn: keepSignedIn,
        });

        if (result?.error) {
            setError(result.error);
        }
    };
    if (status === LOADING_STATUS) {
        return <div>Loading...</div>;
    }

    if (status === AUTHENTICATED_STATUS) {
        return null;
    }
    return <>
        <Head>
            <title>Sign In</title>
        </Head>
        <SignInCard
            formChildren={
                <>
                    <SignInHeader title="Sign In" />
                    <SignInForm onSignIn={handleSignIn} error={error} />
                    <ForgotPasswordLink href="#" />
                </>
            }
            footerChildren={
                <SignUpLink href="#" />
            }
        />
      
    </>
};

export default SignInPage;