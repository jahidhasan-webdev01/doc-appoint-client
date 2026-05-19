import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Button, Separator } from "@heroui/react";
import { MdOutlineAddLocation, MdOutlineLocalHospital } from "react-icons/md";
import Link from "next/link";

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
                    data.map((doctor, index) => {
                        const { _id, name, description, image, hospital, specialty, fee, experience, location } = doctor;
                        return <div
                            key={index}
                            className="border rounded-md overflow-hidden flex flex-col"
                        >
                            <div className="relative h-64 w-full bg-gray-100">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                <p className="absolute top-2 right-0 bg-gray-200 text-sm px-3 py-0.5 rounded-l-full z-10">{experience} of experience</p>
                            </div>

                            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <div>
                                        <h1 className="text-lg font-bold">{name}</h1>
                                        <p className="font-semibold text-sm">{specialty}</p>
                                    </div>
                                    <p className="line-clamp-2">{description}</p>
                                    <div className="flex flex-col">
                                        <p className="inline-flex items-center gap-1 text-sm"><MdOutlineLocalHospital /> {hospital}</p>
                                        <p className="inline-flex items-center gap-1 text-sm"><MdOutlineAddLocation /> {location}</p>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex justify-between items-center">
                                    <p>Free: bdt {fee}</p>
                                    <Link href={`/doctors/${_id}`}>
                                        <Button className="rounded-none" size="xs" variant="outline">View Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default TopRatedDoctors;