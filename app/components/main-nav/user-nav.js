'use client'
import { useState } from 'react';

import styles from './user-nav.module.scss';
import SignInModal from '../modals/signIn';

export default function UserNav() {
    
    return (
        <div>
            <SignInModal />
        </div>
    );
}

