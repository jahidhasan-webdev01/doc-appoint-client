import Link from "next/link";
import { GiMedicalPack } from "react-icons/gi";

const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="flex gap-1 items-center text-xl cursor-pointer font-semibold">
                <GiMedicalPack />
                <p>DocAppoint</p>
            </div>
        </Link>
    );
};

export default Logo;