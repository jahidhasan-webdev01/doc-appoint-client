"use client";

import React, { useState } from "react";
import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Surface,
    TextField,
    Select,
    Spinner,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export function BookAppointment({ doctorName }) {
    const [isLoading, setIsLoading] = useState(false);
    const { data } = authClient.useSession();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const appointmentData = {
            userEmail: data?.user?.email,
            doctorName: doctorName,
            patientName: formEntries.patientName,
            gender: formEntries.gender,
            phone: formEntries.phone,
            appointmentDate: formEntries.appointmentDate,
            appointmentTime: new Date(`2000-01-01T${formEntries.appointmentTime}`).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
        };

        try {
            const res = await fetch("http://localhost:8080/appointments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(appointmentData),
            });

            if (res.ok) {
                toast.success("Appointment booked successfully!");
                e.target.reset();
            } else {
                toast.error("Failed to book appointment. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred during booking.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Modal>
                <Button className="mt-5 font-medium">
                    Book Appointment
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="p-10">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Appointment Verification</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="mt-5 space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                            <div className="md:col-span-2">
                                                <TextField
                                                    defaultValue={doctorName || "Dr. Ayesha Rahman"}
                                                    name="doctorName"
                                                    isDisabled
                                                >
                                                    <Label>Doctor Name</Label>
                                                    <Input className="rounded-2xl" />
                                                </TextField>
                                            </div>

                                            <div className="md:col-span-2">
                                                <TextField name="patientName" isRequired>
                                                    <Label>Patient Name</Label>
                                                    <Input
                                                        placeholder="Rahim Uddin"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <div>
                                                <Select
                                                    name="gender"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select gender"
                                                >
                                                    <Label>Gender</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Male" textValue="Male">
                                                                Male
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Female" textValue="Female">
                                                                Female
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Other" textValue="Other">
                                                                Other
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            <TextField name="phone" type="tel" isRequired>
                                                <Label>Phone Number</Label>
                                                <Input
                                                    placeholder="01712345678"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            <TextField name="appointmentDate" type="date" isRequired>
                                                <Label>Appointment Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            <TextField name="appointmentTime" type="time" isRequired>
                                                <Label>Appointment Time</Label>
                                                <Input type="time" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                        </div>

                                        <Modal.Footer>

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
                                                        Request for an appointment
                                                    </>
                                                ) : (
                                                    "Confirm Appointment Booking"
                                                )}
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
}

export default BookAppointment;