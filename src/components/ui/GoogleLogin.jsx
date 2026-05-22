"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google", 
        });

        if (data) {
            toast.success("Welcome back!");
            redirect('/');
        }

    };
    return (
        <div>
            <Button
                onClick={handleGoogleSignIn}
                className="w-full"
                variant="outline"
            >
                <FaGoogle />
                Log in with Google
            </Button>
        </div>
    );
};

export default GoogleLogin;