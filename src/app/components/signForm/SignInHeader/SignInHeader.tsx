import React from 'react';
import styles from './SignInHeader.module.css'; 

type SignInHeaderProps = {
    title: string;
};

const SignInHeader: React.FC<SignInHeaderProps> = ({ title }) => {
    return (
        <>
            <div className={styles.logo}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L1 21h22L12 2z" fill="none" stroke="#4397C4" stroke-width="2" />
                    <path d="M8,8 a4,4 0 0,0 8,0" fill="none" stroke="#4397C4" stroke-width="2" />
                </svg>
            </div>
            <h1 className={styles.title}>{title}</h1>
        </>
    );
};

export default SignInHeader;