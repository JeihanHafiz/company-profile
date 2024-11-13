import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoVk,
  IoLogoLinkedin,
} from "react-icons/io5";
import Link from "next/link";

interface iShare {
  Icon: IconType;
  link: string;
  style: string;
}

const share: iShare[] = [
  { Icon: IoLogoFacebook, link: "", style: "duration-300 hover:text-blue-500 text-3xl mr-[1rem]" },
  { Icon: IoLogoTwitter, link: "", style: "duration-300 hover:text-blue-300 text-3xl mr-[1rem]" },
  { Icon: IoLogoVk, link: "", style: "duration-300 hover:text-red-800 text-3xl mr-[1rem]" },
  { Icon: IoLogoLinkedin, link: "", style: "duration-300 hover:text-blue-800 text-3xl mr-[1rem]" },
];
export default function ShareBtn({slug}: {slug:string}) {
  const domain = "link here";
  return (
    <div>
      <p>Share</p>
      <div className="flex mt-3">
        {share.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={`${item.link}${domain}${slug}`}
              className={item.style}
            >
              <item.Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
