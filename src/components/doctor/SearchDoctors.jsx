"use client";

import { useState } from "react";
import { SearchField } from "@heroui/react";
import DoctorCard from "@/components/ui/DoctorCard";

const SearchDoctors = ({ doctors }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDoctors = doctors.filter((doctor) =>
        doctor?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="mt-5">
            <div className="w-full sm:w-1/3">
                <SearchField
                    name="search"
                    value={searchQuery}
                    onChange={(value) => setSearchQuery(value)}
                >
                    <SearchField.Group>
                        <SearchField.Input placeholder="Search doctor by name..." />
                    </SearchField.Group>
                </SearchField>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} />
                    ))
                ) : (
                    <div className="col-span-full w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
                        <h1 className="text-xl font-bold">No Found</h1>
                        <p className="text-sm mt-2">
                            No doctors found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchDoctors;