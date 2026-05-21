import UpdateProfile from "@/components/ui/UpdateProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { CiViewTimeline } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export const metadata = {
  title: "Dashboard | My Profile - Doc Appoints",
};

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;
    return (
        <div className="min-h-screen py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="border rounded-md p-5 flex flex-col justify-center items-center space-y-2">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border">
                        <Image
                            src={user?.image}
                            alt={user?.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h1 className="text-xl font-bold">{user?.name.toUpperCase()}</h1>

                    <div className="flex items-center gap-2">
                        <MdOutlineEmail className="text-xl" />
                        <p className="text-sm">
                            {user?.email}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiViewTimeline className="text-xl" />
                        <p className="text-sm">
                            User since {new Date(user?.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </p>
                    </div>
                    <UpdateProfile user={user}/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;