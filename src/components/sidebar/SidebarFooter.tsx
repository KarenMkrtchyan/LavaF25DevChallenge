// components/SidebarFooter.tsx
import Image from "next/image";
import { LogOutIcon, Menu } from "@/components/icons/Icons";
import { useRouter } from "next/navigation";

export default function SidebarFooter() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-[8px] p-[6px]">
      {/* Logout button */}
      <button
        onClick={() => router.push("/")}
        className="flex flex-row items-center cursor-pointer gap-[8px] p-[6px] hover:bg-gray-100 rounded-md"
      >
        <LogOutIcon />
        <span className="nav_text text-sm font-medium text-[rgb(169,34,34)]">
          Logout
        </span>
      </button>

      {/* Profile section */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-[8px]">
          <Image
            src="/karen_profile.jpg" // put an image in /public/static/profile.jpg
            alt="Profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex justify-between flex-row gap-[10px] ">
            <div className="flex flex-col justify-between">
              <span className="nav_text font-semibold text-[12px]">
                I won&apos;t!
              </span>
              <span className="nav_text font-light text-[10px] text-[rgba(132,132,132,1)]">
                Novice Unmaker
              </span>
            </div>
            <button className="flex justify-center items-center p-1 hover:bg-gray-100 rounded-full">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
