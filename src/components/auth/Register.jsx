"use client"

import GoogleLogin from "@/components/ui/GoogleLogin";
import Logo from "@/components/ui/Logo";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Separator, Spinner, TextField, } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        const { data, error } = await authClient.signUp.email(userData);

        setIsLoading(false);

        if (error) {
            toast.error(error?.message || "Registration failed. Please try again.");
        } else {
            toast.success("Account created successfully!");
            e.target.reset();
            redirect("/login");
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-2 xl:px-0 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg border rounded-md px-4 sm:px-6 md:px-8 py-8 sm:py-10">
                <Logo />

                <h1 className="text-center font-bold text-xl mt-5">
                    Register
                </h1>

                <Form
                    className="mt-5 flex flex-col gap-4"
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.trim().length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            if (!/^[a-zA-Z\s]+$/.test(value)) {
                                return "Name can only contain letters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>

                        <Input
                            placeholder="Jahid Hasan"
                            variant="secondary"
                        />

                        <FieldError />
                    </TextField>

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
                        name="image"
                        type="url"
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Please enter a valid URL";
                            }
                        }}
                    >
                        <Label>Photo URL</Label>

                        <Input
                            placeholder="https://example.com/photo.jpg"
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
                                    Creating User
                                </>
                            ) : (
                                "Register"
                            )}
                        </Button>
                    </div>

                    <div className="flex justify-center text-sm gap-1 text-center flex-wrap">
                        <p>Already have an account?</p>

                        <Link
                            href={"/login"}
                            className="font-bold"
                        >
                            Login
                        </Link>
                    </div>

                    <div>
                        <Separator />

                        <h1 className="text-sm font-bold text-center mt-2">
                            OR
                        </h1>
                    </div>

                    <GoogleLogin isLoading={isLoading} setIsLoading={setIsLoading} callbackUrl={"/"} />
                </Form>
            </div>
        </div>
    );
};

export default Register;