"use client"

import GoogleLogin from "@/components/ui/GoogleLogin";
import Logo from "@/components/ui/Logo";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Separator, Spinner, TextField, } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password
        });

        setIsLoading(false);

        if (error) {
            toast.error(error?.message || "Login failed. Please try again.");
        } else {
            toast.success("Welcome back!");
            e.target.reset();
            redirect("/");
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="w-lg border px-5 py-10 rounded-md">
                <Logo />
                <h1 className="text-center font-bold text-xl mt-5">Login</h1>
                <Form className="mt-5 flex flex-col gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="jahidhasan.webdev01@gmail.com" variant="secondary" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>

                        <div className="relative flex items-center">
                            <Input
                                placeholder="Enter your password"
                                variant="secondary"
                                type={showPassword ? "text" : "password"}
                                className="w-full pr-10"
                            />

                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 cursor-pointer"
                            >
                                {showPassword ? (
                                    <FaEye className="text-sm" />
                                ) : (
                                    <FaEyeSlash className="text-sm" />
                                )}
                            </span>
                        </div>

                        <FieldError />
                    </TextField>

                    <div>
                        <Button
                            type="submit"
                            className="rounded-none w-full"
                            isDisabled={isLoading}
                        >
                            {
                                isLoading ?
                                    <>
                                        <Spinner color="current" size="sm" />
                                        Login User
                                    </>
                                    :
                                    "Login"
                            }
                        </Button>
                    </div>

                    <div className="flex justify-center text-sm gap-1">
                        <p>Don&lsquo;t have an account? </p>
                        <Link href={"/register"} className="font-bold cursor-pointer">Register</Link>
                    </div>

                    <div>
                        <Separator />
                        <h1 className="text-sm font-bold text-center mt-2">OR</h1>
                    </div>

                    <GoogleLogin isLoading={isLoading} setIsLoading={setIsLoading} />
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;