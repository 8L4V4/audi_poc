import { FC } from "react";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { AudiSportLogoIcon } from "./AudiSportLogoIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { LogoIcon } from "./LogoIcon";
import { ProfileIcon } from "./ProfileIcon";
import { TwitterIcon } from "./TwitterIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import { FacebookIcon } from "./FacebookIcon";
import { NextPage } from "next";

type tIconName =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "audi-sport-logo"
  | "facebook"
  | "instagram"
  | "linkedIn"
  | "logo"
  | "profile"
  | "twitter"
  | "youtube";

const map: { [k: string]: NextPage } = {
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "audi-sport-logo": AudiSportLogoIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedIn: LinkedInIcon,
  logo: LogoIcon,
  profile: ProfileIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
};

interface iIconProps {
  name: tIconName;
  className?: string;
}

export const Icon: FC<iIconProps> = ({ name, className = "" }) => {
  const Component = map?.[name];

  return map.hasOwnProperty(name) ? (
    <span className={`Icon ${className}`}>
      <Component />
    </span>
  ) : null;
};
