import React from 'react';
import styles from './ForgotPasswordLink.module.css';
import Link from 'next/link';


interface ForgotPasswordLinkProps {
    href: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ href }) => {
    return (
        <Link href={href} className={styles.forgotPassword} passHref>
            Forgot Password?
        </Link>
    );
};

export default ForgotPasswordLink;