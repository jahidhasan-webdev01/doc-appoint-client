"use client"

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Modal, Spinner, TextField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateProfile = ({ user }) => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData);

        const hasChanges =
            userData.image !== user?.image ||
            userData.name !== user?.name

        if (!hasChanges) {
            toast.error("No changes detected. Please modify a field to update.");
            return;
        }

        setIsLoading(true);

        const { data, error } = await authClient.updateUser({
            image: userData?.image,
            name: userData?.name,
        });

        setIsLoading(false);

        if (error) {
            toast.error(error?.message || "An error occurred during updating profile.");
        } else {
            toast.success("Profile updated successfully!");
            window.location.reload();
        }
    }
    return (
        <Modal>
            <div className="pt-2">
                <Button variant="outline" size="sm">
                    Update Profile
                </Button>
            </div>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Update your profile</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="flex justify-center gap-2 py-4">
                                <Form
                                    className="w-full space-y-5"
                                    onSubmit={onSubmit}
                                >
                                    <TextField
                                        isRequired
                                        name="name"
                                        type="text"
                                        defaultValue={user?.name}
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
                                        name="image"
                                        type="url"
                                        defaultValue={user?.image}
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

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        size="sm"
                                        isDisabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center gap-2">
                                                <Spinner color="current" size="sm" />
                                                <span>Updating...</span>
                                            </div>
                                        ) : (
                                            "Confirm Update"
                                        )}
                                    </Button>
                                </Form>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateProfile;