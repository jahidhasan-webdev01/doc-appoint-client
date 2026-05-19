import { getDoctorByID } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";

const DoctorDetails = async ({ params }) => {
    const { id } = await params;
    const data = await getDoctorByID(id);

    return (
        <div className="min-h-screen py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="relative h-72 md:h-125 lg:h-full min-h-125">
                    <Image
                        src={data?.image}
                        alt={data?.name}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="lg:col-span-2 flex flex-col justify-center">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold"> {data?.name} </h1>
                        <p className="font-semibold">{data?.specialty}</p>
                    </div>
                    <p className="mt-2">
                        {data?.description}
                    </p>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="border p-2 text-center rounded-md">
                            <p className="text-sm">
                                Experience
                            </p>
                            <h3 className="text-lg font-semibold">
                                {data?.experience}
                            </h3>
                        </div>
                        <div className="border p-2 text-center rounded-md">
                            <p className="text-sm">
                                Hospital
                            </p>
                            <h3 className="text-lg font-semibold">
                                {data?.hospital}
                            </h3>
                        </div>
                        <div className="border p-2 text-center rounded-md">
                            <p className="text-sm">
                                Location
                            </p>
                            <h3 className="text-lg font-semibold">
                                {data?.location}
                            </h3>
                        </div>
                        <div className="border p-2 text-center rounded-md">
                            <p className="text-sm">
                                Fee
                            </p>
                            <h3 className="text-lg font-semibold">
                                {data?.fee} bdt
                            </h3>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="font-semibold">
                            Availability
                        </h2>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {data?.availability?.map((slot, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 border rounded-full text-sm"
                                >
                                    {slot}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Button className="mt-5">Book an appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;