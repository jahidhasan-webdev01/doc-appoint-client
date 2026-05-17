import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
    return (
        <div className="w-7xl mx-auto flex justify-between pt-10">
            <div>
                <h1>DocAppoint</h1>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;