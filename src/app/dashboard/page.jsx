import { auth } from "@/lib/auth";
import { getAppointmentsByEmail } from "@/lib/server-actions";
import { headers } from "next/headers";

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const data = await getAppointmentsByEmail(session?.user?.email);

    console.log(data);
    return (
        <div className="min-h-screen py-10">
            <h1>All Appoints</h1>
            <div className="mt-5 space-y-2">
                {
                    data.map((appoints, index) => <div key={index} className="border rounded-md p-5">
                        <h1 className="font-bold text-xl">{appoints?.doctorName}</h1>
                        <div>
                            <p>{appoints?.patientName}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DashboardPage;