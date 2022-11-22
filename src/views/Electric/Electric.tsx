import { MainPageAPI } from "api";
import { Loader } from "components/Loader/Loader";
import { useHttp } from "hooks/useHttp";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import { ModelsList } from "./components/ModelsList/ModelsList";

export interface iCar {
  battery: { [k: string]: any };
  charging: { [k: string]: any };
  epa: { [k: string]: any };
  hybrid: boolean;
  image_description: string;
  links: { title: string; href: string }[];
  name: string;
  price: string;
  year: string;
  price_link: { title: string; href: string }[];
  slug: string;
  image: { url: string };
  alt_image: { url: string };
  description: string;
  info_list: iInfoItem[];
  mspr: string;
}

interface iInfoItem {
  title: string;
  count: number;
  unit: string;
  text: string;
  link_title: string;
  description: string;
  description_title: string;
}

interface iElectricEntry {
  footer_background: { url: string };
  hero_background: { url: string };
  car_slugs: { slug: string }[];
  car_list: iCar[];
}

export const Electric: FC = () => {
  const { call, data, isError, isLoading } = useHttp();
  const entry = data?.data?.entry as iElectricEntry;
  console.log(entry);

  useEffect(() => {
    call(MainPageAPI.getElectricCarsData());
  }, []);

  if (isError)
    return (
      <div className="Electric">
        <p className="Electric-error">
          Sorry something went wrong please try again later
        </p>
      </div>
    );

  return (
    <div className="Electric">
      {isLoading && <Loader />}
      <div className="Electric-hero-banner">
        <div className="Electric-image-wrap">
          {entry?.hero_background?.url && (
            <Image
              src={entry?.hero_background?.url}
              fill
              objectFit="cover"
              alt="hero banner logo"
              className="Electric-image"
            />
          )}
        </div>
        <h1 className="Electric-title">Electric Models</h1>
        <p className="Electric-description">A new generation of Audi.</p>
      </div>
      <nav className="Electric-cars-nav">
        <div className="Electric-cars">
          <Link href="/" className="Electric-cars-overview">
            Overview
          </Link>
          {entry?.car_slugs?.map(({ slug }) => (
            <button id={slug} className="Electric-cars-item" key={slug}>
              {slug}
            </button>
          ))}
        </div>
      </nav>
      <div className="Electric-banner">
        <h2 className="Electric-banner-title">
          All-Electric: Audi e-tron models.
        </h2>
        <p className="Electric-banner-description">
          There is no purer form of luxury and style than the Audi e-tron
          lineup. Harnessing the latest technology for day-to-day functionality
          without sacrificing performance, this lineup not only elevates your
          drive — it electrifies it.
        </p>
      </div>
      <ModelsList data={entry?.car_list} />
    </div>
  );
};
