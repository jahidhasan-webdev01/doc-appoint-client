"use client";

import { useState } from "react";
import { SearchField } from "@heroui/react";
import DoctorCard from "@/components/ui/DoctorCard";

const SearchDoctors = ({ doctors }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("");

    const filteredDoctors = doctors.filter((doctor) =>
        doctor?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedAndFilteredDoctors = [...filteredDoctors].sort((a, b) => {
        if (sortBy === "fee-asc") {
            const feeA = parseFloat(a.fee) || 0;
            const feeB = parseFloat(b.fee) || 0;
            return feeA - feeB;
        }

        if (sortBy === "fee-dsc") {
            const feeA = parseFloat(a.fee) || 0;
            const feeB = parseFloat(b.fee) || 0;
            return feeB - feeA;
        }

        return 0;
    });

    return (
        <div className="mt-5">
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center">
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

                <div className="w-full sm:w-auto flex items-center gap-2 justify-end">
                    <label htmlFor="sort" className="text-sm font-medium shrink-0">
                        Sort By:
                    </label>
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full sm:w-48 px-3 py-2 border rounded-md text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
                    >
                        <option value="" className="text-black">Default</option>
                        <option value="fee-asc" className="text-black">Fee: Low to High</option>
                        <option value="fee-dsc" className="text-black">Fee: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {sortedAndFilteredDoctors.length > 0 ? (
                    sortedAndFilteredDoctors.map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} />
                    ))
                ) : (
                    <div className="col-span-full w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
                        <h1 className="text-xl font-bold">No Doctors Found</h1>
                        <p className="text-sm mt-2">
                            No doctors found matching your filters.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchDoctors;