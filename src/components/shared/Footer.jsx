import Link from "next/link";
import Logo from "../ui/Logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-background/70 backdrop-blur-lg px-2 xl:px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-5 lg:gap-10 xl:gap-20 py-10">
                <div className="col-span-6 lg:col-span-2">
                    <Logo />
                    <p className="mt-1">Make healthcare access faster, simpler, and more convenient for everyone.</p>
                </div>
                <div className="col-span-3 lg:col-span-2">
                    <h1 className="font-bold">Quick Links</h1>
                    <ul className="mt-1 gap-4 text-sm">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/appointments">All Appointments</Link>
                        </li>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-3 lg:col-span-2">
                    <h1 className="font-bold">Social</h1>
                    <ul className="mt-2
                     gap-4 flex flex-row text-base">
                        <li>
                            <FaFacebookF className="cursor-pointer"/>
                        </li>
                        <li>
                            <FaInstagram className="cursor-pointer"/>
                        </li>
                        <li>
                            <FaTwitter className="cursor-pointer"/>
                        </li>
                        <li>
                            <FaLinkedinIn className="cursor-pointer"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;