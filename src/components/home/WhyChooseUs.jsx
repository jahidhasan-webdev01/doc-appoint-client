import { MdVerifiedUser,  } from "react-icons/md";
import SectionTitle from "../ui/SectionTitle";
import { SiEasyeda } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { HiStatusOnline } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

const WhyChooseUs = () => {
    const featuresData = [
        {
            _id: 1,
            title: "Easy Appointment Booking",
            description:
                "Book doctor appointments quickly and easily from anywhere without long waiting times.",
            icon: SiEasyeda,
        },
        {
            _id: 2,
            title: "Verified Doctors",
            description:
                "Consult experienced and verified doctors from different medical specialties.",
            icon: MdVerifiedUser,
        },
        {
            _id: 3,
            title: "Secure Patient Data",
            description:
                "Your personal and medical information is protected with secure data handling.",
            icon: RiSecurePaymentFill,
        },
        {
            _id: 4,
            title: "Online Schedule Management",
            description:
                "Manage appointments, schedules, and booking history in one convenient place.",
            icon: HiStatusOnline,
        },
        {
            _id: 5,
            title: "Fast & Responsive Support",
            description:
                "Get quick assistance from our support team whenever you need help.",
            icon: MdVerifiedUser,
        },
        {
            _id: 6,
            title: "Modern Healthcare Experience",
            description:
                "Enjoy a smooth, user-friendly, and modern healthcare appointment system.",
            icon: BiSupport,
        },
    ];

    return (
        <div className="py-10">
            <SectionTitle title="Why Choose Us" />
            <div className="mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    featuresData.map((data, index) => {
                        const { title, description, icon } = data;
                        const Icon = icon;
                        return <div key={index} className="border p-5 rounded-md flex flex-col justify-center items-center text-center">
                            <Icon className="text-2xl"/>
                            <h3 className="font-semibold mt-3">
                                {title}
                            </h3>

                            <p className="text-sm">
                                {description}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;