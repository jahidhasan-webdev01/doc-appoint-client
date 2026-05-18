import { GiMedicalPack } from "react-icons/gi";

const Logo = () => {
    return (
        <div className="flex gap-1 items-center text-xl cursor-pointer font-semibold">
            <GiMedicalPack />
            <p>DocAppoint</p>
        </div>
    );
};

export default Logo;