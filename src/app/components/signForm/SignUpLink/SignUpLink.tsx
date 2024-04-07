import React from 'react';
import Link from 'next/link';
import styles from './signin.module.css';

interface SignUpLinkProps {
    href: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ href }) => {
    return (
            <Link href={href} className={styles.signUp} passHref>
               Not a Member? Sign up
            </Link>
    );
};

export default SignUpLink;