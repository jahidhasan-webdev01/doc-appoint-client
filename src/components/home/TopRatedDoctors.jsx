import SectionTitle from "../ui/SectionTitle";
import DoctorCard from "../ui/DoctorCard";
import { getTopRatedDoctors } from "@/lib/server-actions";

const TopRatedDoctors = async () => {
    const data = await getTopRatedDoctors();

    return (
        <div className="py-10">
            <SectionTitle title="Top Rated Doctors" />
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    data.map((doctor, index) => <DoctorCard key={index} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default TopRatedDoctors;