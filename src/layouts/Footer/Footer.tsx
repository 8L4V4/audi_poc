import { MainPageAPI } from "api";
import { ArrowDownIcon } from "components/Icon/ArrowDownIcon";
import { Loader } from "components/Loader/Loader";
import { useHttp } from "hooks/useHttp";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface iFooterCategory {
  title: string;
  url: string;
  links: { link: { path: string; name: string } }[];
}

interface iFooterEntry {
  socials: { path: string; icon: { url: string } }[];
  categories: iFooterCategory[];
}

const copyrightLinks = [
  "Terms of service",
  "Privacy statement",
  "Do not sell my personal information",
  "Cookie settings",
  "Interest based ads",
  "Recalls",
  "Takata Airbag Recall",
  "TDI Settlement",
];

export function Footer() {
  const { data, call, isLoading, isError } = useHttp();
  const entry = data?.data?.entry as iFooterEntry;
  useEffect(() => {
    call(MainPageAPI.getFooterData());
  }, []);

  if (isLoading)
    return (
      <footer className="Footer">
        <Loader />
      </footer>
    );

  if (isError)
    return (
      <div className="Footer-error">
        Something went wrong, please try again later
      </div>
    );

  return (
    <footer className="Footer">
      <div className="Footer-content">
        <button
          className="Footer-top-btn"
          onClick={() => window?.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Back to top</span>
          <ArrowDownIcon />
        </button>
        <ul className="Footer-categories">
          {entry?.categories?.map((category) => (
            <li className="Footer-category" key={category?.title}>
              <h3 className="Footer-category-title">
                <Link href={category?.url || ""}>{category?.title}</Link>
              </h3>
              {category?.links?.map(({ link }) => (
                <Link
                  href={link?.path || ""}
                  className="Footer-category-link"
                  key={link?.name}
                >
                  {link?.name}
                </Link>
              ))}
            </li>
          ))}
        </ul>
        <ul className="Footer-socials">
          {entry?.socials?.map((social) => (
            <li className="Footer-social" key={social.icon.url}>
              <Link href={social?.path}>
                <Image
                  src={social?.icon?.url}
                  alt="logo"
                  width={36}
                  height={36}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="Footer-copyright">
          <span className="Footer-copyright-text">
            © 2022 Audi of America. All rights reserved.
          </span>
          {copyrightLinks.map((link) => (
            <Link href="/" key={link} className="Footer-copyright-link">
              {link}
            </Link>
          ))}
        </div>
        <p className="Footer-info">
          Audi of America takes efforts to ensure the accuracy of information on
          the general vehicle information pages. Models are shown for
          illustration purposes only and may include features that are not
          available on the US model. As errors may occur or availability may
          change, please see dealer for complete details and current model
          specifications.
        </p>
      </div>
    </footer>
  );
}
