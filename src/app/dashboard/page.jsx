import DeleteAppoinment from "@/components/ui/DeleteAppoinment";
import { auth } from "@/lib/auth";
import { getAppointmentsByEmail } from "@/lib/server-actions";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import { BsGenderMale } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const data = await getAppointmentsByEmail(session?.user?.email);

    return (
        <div className="min-h-screen py-10">
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    data.map((appoints, index) =>
                        <div key={index} className="border rounded-md p-5">
                            <h1 className="font-bold text-2xl">{appoints?.doctorName}</h1>
                            <div className="mt-2 space-y-2">
                                <div className="flex gap-5">
                                    <FaPersonCirclePlus className="text-xl" />
                                    <p>Patient Name: {appoints?.patientName}</p>
                                </div>
                                <div className="flex gap-5">
                                    <BsGenderMale className="text-xl" />
                                    <p>Gender: {appoints?.gender}</p>
                                </div>
                                <div className="flex gap-5">
                                    <FaPhoneAlt className="text-xl" />
                                    <p>Phone: {appoints?.phone}</p>
                                </div>
                                <div className="flex gap-5">
                                    <MdOutlineDateRange className="text-xl" />
                                    <p>
                                        Date: {new Date(appoints?.appointmentDate).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div className="flex gap-5">
                                    <IoMdTimer className="text-xl" />
                                    <p>Time: {appoints?.appointmentTime}</p>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-row gap-2">
                                <Button size="sm" variant="danger-soft">Update</Button>
                                <Button size="sm" variant="outline">Review</Button>
                                <DeleteAppoinment appoints={appoints}/>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default DashboardPage;