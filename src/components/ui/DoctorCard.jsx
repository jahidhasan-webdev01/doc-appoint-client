import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineAddLocation, MdOutlineLocalHospital } from "react-icons/md";

const DoctorCard = ({ doctor }) => {
    const { _id, name, image, fee, experience, specialty, description, hospital, location, rating } = doctor;
    return (
        <div
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
                        <p className="inline-flex items-center gap-1 text-sm"><FaRegStar /> {rating.toFixed(2)}</p>
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
    );
};

export default DoctorCard;