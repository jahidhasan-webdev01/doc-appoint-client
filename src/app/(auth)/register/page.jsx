"use client"

import Logo from "@/components/ui/Logo";
import { Button, FieldError, Form, Input, Label, Separator, TextField, } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);


    const onSubmit = async (data) => {
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="w-lg border px-5 py-10 rounded-md">
                <Logo />
                <h1 className="text-center font-bold text-xl mt-5">Register</h1>
                <Form className="mt-5 flex flex-col gap-4" onSubmit={onSubmit}>
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
                        <Input placeholder="Jahid Hasan" variant="secondary" />
                        <FieldError />
                    </TextField>

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
                        <Input placeholder="https://example.com/photo.jpg" variant="secondary" />
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
                        <Button type="submit" className="rounded-none w-full">
                            Register
                        </Button>
                    </div>

                    <div className="flex justify-center text-sm gap-1">
                        <p>Already have an account? </p>
                        <Link href={"/login"} className="font-bold cursor-pointer">Login</Link>
                    </div>

                    <div>
                        <Separator />
                        <h1 className="text-sm font-bold text-center mt-2">OR</h1>
                    </div>

                    <div>
                        <Button className="w-full" variant="outline">
                            <FaGoogle />
                            Log in with Google
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;