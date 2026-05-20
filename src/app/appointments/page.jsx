import DoctorCard from "@/components/ui/DoctorCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllDoctors } from "@/lib/server-actions";

export const metadata = {
  title: "All Appointments | Find perfect one for you - Doc Appoints",
};

const AllAppointmentsPage = async () => {
    const data = await getAllDoctors();
    return (
        <div className="py-10">
            <SectionTitle title={"All Appointments"} />
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    data.map((doctor, index) => <DoctorCard key={index} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default AllAppointmentsPage;