import SearchDoctors from "@/components/doctor/SearchDoctors";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllDoctors } from "@/lib/server-actions";

export const metadata = {
    title: "All Appointments | Find perfect one for you - Doc Appoints",
};

const AllAppointmentsPage = async () => {
    const data = await getAllDoctors();
    const doctors = data || [];

    return (
        <div className="max-w-7xl mx-auto px-2 xl:px-0 py-10">
            <SectionTitle title={"All Appointments"} />

            <SearchDoctors doctors={doctors}/>
        </div>
    );
};

export default AllAppointmentsPage;