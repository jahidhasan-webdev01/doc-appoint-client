"use client"

import GoogleLogin from "@/components/ui/GoogleLogin";
import Logo from "@/components/ui/Logo";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Separator, Spinner, TextField, } from "@heroui/react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

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
            redirect(callbackUrl);
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-2 xl:px-0 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg border rounded-md px-4 sm:px-6 md:px-8 py-8 sm:py-10">
                <Logo />

                <h1 className="text-center font-bold text-xl mt-5">
                    Login
                </h1>

                <Form
                    className="mt-5 flex flex-col gap-4"
                    onSubmit={onSubmit}
                >

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>

                        <Input
                            placeholder="jahidhasan.webdev01@gmail.com"
                            variant="secondary"
                        />

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
                                className="w-full"
                            />

                            <span
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-3 cursor-pointer z-10"
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
                            className="w-full"
                            isDisabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Spinner
                                        color="current"
                                        size="sm"
                                    />
                                    Login User
                                </>
                            ) : (
                                "Login"
                            )}
                        </Button>
                    </div>

                    <div className="flex justify-center text-sm gap-1 text-center flex-wrap">
                        <p>Don&apos;t have an account?</p>

                        <Link
                            href={"/register"}
                            className="font-bold"
                        >
                            Register
                        </Link>
                    </div>

                    <div>
                        <Separator />

                        <h1 className="text-sm font-bold text-center mt-2">
                            OR
                        </h1>
                    </div>

                    <GoogleLogin isLoading={isLoading} setIsLoading={setIsLoading} callbackUrl={callbackUrl} />
                </Form>
            </div>
        </div>
    );
};

export default Login;