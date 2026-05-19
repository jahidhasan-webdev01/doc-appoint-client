"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteAppoinment = ({ appoints }) => {
    const { _id, doctorName } = appoints;

    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        console.log("Deleted:", _id);

        const res = await fetch(`http://localhost:8080/appoinment/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })

        const data = await res.json();

        if (data.deletedCount > 0) {
            toast.success("Appointment deleted successfully")

            setOpen(false);
            window.location.reload();
        }

        setOpen(false);
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