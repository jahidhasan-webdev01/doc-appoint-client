import SectionTitle from "../ui/SectionTitle";
import DoctorCard from "../ui/DoctorCard";

const TopRatedDoctors = () => {
    const data = [
        {
            "_id": "d1",
            "name": "Dr. Ayesha Rahman",
            "specialty": "Cardiologist",
            "image": "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
            "experience": "10 years",
            "availability": ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
            "description": "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
            "hospital": "Labaid Cardiac Hospital",
            "location": "Dhanmondi, Dhaka",
            "fee": 800
        },
        {
            "_id": "d2",
            "name": "Dr. Ayesha Rahman",
            "specialty": "Cardiologist",
            "image": "https://cdn.pixabay.com/photo/2016/09/29/19/55/doctor-1703644_640.jpg",
            "experience": "10 years",
            "availability": ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
            "description": "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
            "hospital": "Labaid Cardiac Hospital",
            "location": "Dhanmondi, Dhaka",
            "fee": 800
        },
        {
            "_id": "d3",
            "name": "Dr. Ayesha Rahman",
            "specialty": "Cardiologist",
            "image": "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL2hpcHBvdW5pY29ybl9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9tYWxlX2luZGlhbl9kb2N0b3JfaXNvbGF0ZV9jZTVhYzE3YS1iNjk4LTQyYmMtODI3ZS03MTJjZDNlYWU2OWYucG5n.png",
            "experience": "10 years",
            "availability": ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
            "description": "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
            "hospital": "Labaid Cardiac Hospital",
            "location": "Dhanmondi, Dhaka",
            "fee": 800
        }
    ]
    
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