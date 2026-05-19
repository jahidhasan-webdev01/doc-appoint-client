import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold'>404</h1>
            <p>This page is not found!</p>

            <Link href={"/"}>
                <Button variant='outline' className="mt-5 rounded-none">
                    <FaHome />
                    Go to home
                </Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;