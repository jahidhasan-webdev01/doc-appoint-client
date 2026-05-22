"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, Spinner } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 

const DeleteAppoinment = ({ appoints }) => {
    const { _id, doctorName } = appoints;

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); 

    const handleDelete = async () => {
        setIsLoading(true);
        const { data: tokenData } = await authClient.token();
        
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointment/${_id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${tokenData?.token}`
                }
            });

            if (!res.ok) {
                toast.error("Appointment could not be deleted");
                setIsLoading(false);
                return;
            }

            const data = await res.json();

            if (data?.deletedCount > 0) {
                toast.success("Appointment deleted successfully!");
                router.refresh(); 
                setOpen(false);
            } else {
                toast.error("Appointment could not be deleted");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Button
                size="sm"
                variant="danger"
                onPress={() => setOpen(true)}
            >
                Delete
            </Button>

            <AlertDialog isOpen={open} onOpenChange={setOpen}>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog>
                            <AlertDialog.Header>
                                <AlertDialog.Heading>
                                    Delete appointment?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>

                            <AlertDialog.Body>
                                Delete appointment with{" "}
                                <strong>{doctorName}</strong>?
                            </AlertDialog.Body>

                            <AlertDialog.Footer>
                                <Button
                                    variant="light"
                                    onPress={() => setOpen(false)}
                                    isDisabled={isLoading}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="danger"
                                    onPress={handleDelete}
                                    isDisabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <Spinner color="current" size="sm" />
                                            <span>Deleting...</span>
                                        </div>
                                    ) : (
                                        "Confirm"
                                    )}
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteAppoinment;