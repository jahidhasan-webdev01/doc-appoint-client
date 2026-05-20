"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteAppoinment = ({ appoints }) => {
    const { _id, doctorName } = appoints;

    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoinment/${_id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${tokenData?.token}`
                }
            });

            if (!res.ok) {
                toast.error("Appointment could not be deleted");
            }

            const data = await res.json();

            if (data?.deletedCount > 0) {
                toast.success("Appointment deleted successfully");

                setOpen(false);
                window.location.reload();
                return;
            } else {
                toast.error("Appointment could not be deleted");
            }

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setOpen(false);
        }
    };

    return (
        <div>
            <Button
                size="sm"
                variant="danger"
                onClick={() => setOpen(true)}
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
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="danger"
                                    onClick={handleDelete}
                                >
                                    Confirm
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