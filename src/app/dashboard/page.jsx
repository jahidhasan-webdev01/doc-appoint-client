import DeleteAppoinment from "@/components/dashboard/DeleteAppoinment";
import ReviewDoctor from "@/components/dashboard/ReviewDoctor";
import UpdateAppoinment from "@/components/dashboard/UpdateAppoinment";
import { auth } from "@/lib/auth";
import { getAppointmentsByEmail } from "@/lib/server-actions";
import { headers } from "next/headers";
import { BsGenderMale } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

export const metadata = {
  title: "Dashboard | My Appointments - Doc Appoints",
};

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const data = await getAppointmentsByEmail(session?.user?.email);

    return (
        <div className="min-h-screen py-10">
            {
                data?.length === 0 ? (
                    <div className="w-full flex items-center justify-center h-[60vh] border rounded-md">
                        <div className="text-center">
                            <h1 className="text-xl font-bold">No Appointments Found</h1>
                            <p className="text-sm mt-2">
                                You have not booked any appointment yet.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {
                            data.map((appoints, index) =>
                                <div key={index} className="border rounded-md p-5">
                                    <h1 className="font-bold text-xl">{appoints?.doctorName}</h1>

                                    <div className="mt-2 space-y-2">
                                        <div className="flex gap-5">
                                            <FaPersonCirclePlus className="text-xl" />
                                            <p className="text-sm">
                                                Patient Name: {appoints?.patientName}
                                            </p>
                                        </div>

                                        <div className="flex gap-5">
                                            <BsGenderMale className="text-xl" />
                                            <p className="text-sm">
                                                Gender: {appoints?.gender}
                                            </p>
                                        </div>

                                        <div className="flex gap-5">
                                            <FaPhoneAlt className="text-xl" />
                                            <p>Phone: {appoints?.phone}</p>
                                        </div>

                                        <div className="flex gap-5">
                                            <MdOutlineDateRange className="text-xl" />
                                            <p className="text-sm">
                                                Date:{" "}
                                                {new Date(
                                                    appoints?.appointmentDate
                                                ).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        </div>

                                        <div className="flex gap-5">
                                            <IoMdTimer className="text-xl" />
                                            <p className="text-sm">
                                                Time: {appoints?.appointmentTime}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 flex flex-row gap-2">
                                        <UpdateAppoinment appoints={appoints} />
                                        <ReviewDoctor
                                            doctorName={appoints?.doctorName}
                                        />
                                        <DeleteAppoinment appoints={appoints} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default DashboardPage;