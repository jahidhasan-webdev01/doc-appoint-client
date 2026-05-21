"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = ({ isLoading, setIsLoading, callbackUrl }) => {
    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });

        if (data) {
            toast.error("Login failed. Please try again.");
        } else {
            toast.success("Welcome back!");
            redirect(callbackUrl);
        }
        
        setIsLoading(false)
    };
    return (
        <div>
            <Button
                onClick={handleGoogleSignIn}
                className="w-full"
                variant="outline"
                isDisabled={isLoading}
            >
                <FaGoogle />
                Log in with Google
            </Button>
        </div>
    );
};

export default GoogleLogin;