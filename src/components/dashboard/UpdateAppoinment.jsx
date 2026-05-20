"use client"

import { Button, FieldError, Input, Label, Select, ListBox, Modal, Spinner, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateAppoinment = ({ appoints }) => {
    const { _id, doctorName, patientName, phone, gender, appointmentDate, appointmentTime } = appoints;
    const [isLoading, setIsLoading] = useState(false);

    const convertTimeTo24h = (timeStr) => {
        if (!timeStr) return "";
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${String(hours).padStart(2, '0')}:${minutes}`;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        const appointmentData = {
            patientName: formEntries.patientName,
            gender: formEntries.gender,
            phone: formEntries.phone,
            appointmentDate: formEntries.appointmentDate,
            appointmentTime: formEntries.appointmentTime
        };

        const hasChanges =
            appointmentData.patientName !== patientName ||
            appointmentData.gender !== gender ||
            appointmentData.phone !== phone ||
            appointmentData.appointmentDate !== appointmentDate ||
            appointmentData.appointmentTime !== convertTimeTo24h(appointmentTime);

        if (!hasChanges) {
            toast.error("No changes detected. Please modify a field to update.");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointment/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(appointmentData),
            });

            if (res.ok) {
                toast.success("Appointment updated successfully!");
                e.target.reset();
                window.location.reload();
            } else {
                toast.error("Failed to update your booking appointment. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred during updating.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <Modal>
                <Button size="sm" variant="danger-soft">Update</Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="p-10">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Update Appointment</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="mt-5 space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                            <div className="md:col-span-2">
                                                <TextField
                                                    defaultValue={doctorName}
                                                    name="doctorName"
                                                    isDisabled
                                                >
                                                    <Label>Doctor Name</Label>
                                                    <Input className="rounded-2xl" />
                                                </TextField>
                                            </div>

                                            <div className="md:col-span-2">
                                                <TextField
                                                    name="patientName"
                                                    defaultValue={patientName}
                                                    isRequired
                                                >
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
                                                    defaultSelectedKey={gender}
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

                                            <TextField
                                                name="phone"
                                                type="tel"
                                                defaultValue={phone}
                                                isRequired
                                            >
                                                <Label>Phone Number</Label>
                                                <Input
                                                    placeholder="01712345678"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                name="appointmentDate"
                                                type="date"
                                                defaultValue={appointmentDate}
                                                isRequired
                                            >
                                                <Label>Appointment Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                name="appointmentTime"
                                                type="time"
                                                defaultValue={convertTimeTo24h(appointmentTime)}
                                                isRequired
                                            >
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
                                                        <Spinner color="current" size="sm" />
                                                        Updating...
                                                    </>
                                                ) : (
                                                    "Confirm"
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
};

export default UpdateAppoinment;