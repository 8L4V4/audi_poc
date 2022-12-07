import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { MainPageAPI } from "api";
import { Loader } from "components/Loader/Loader";
import { ModalPopUp } from "components/ModalPopup/ModalPopup";
import { useHttp } from "hooks/useHttp";
import Image from "next/image";
import Link from "next/link";
import { ModelsList } from "./components/ModelsList/ModelsList";
import { iCarInfo, iElectricEntry } from "./interfaces";
import { ArrowRightIcon } from "components/Icon/ArrowRightIcon";

export const Electric: FC = () => {
  const { call, data, isError, isLoading } = useHttp();
  const entry = data?.data?.entry as iElectricEntry;
  const gtContainer: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const cars = entry?.car_list?.filter((car) => car.type !== "HYBRID");
  const hybridCars = entry?.car_list?.filter((car) => car.type === "HYBRID");
  const [info, setInfo] = useState<iCarInfo>();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (!gtContainer?.current) return e;
      const containerPosition = gtContainer.current.getBoundingClientRect().top;

      changeImageOpacity(containerPosition <= 0 ? "bottom" : "top");
    });

    return () => window?.removeEventListener("scroll", () => null);
  }, []);

  const scrollToELement = (id: string) => {
    const el = document?.getElementById(id);
    el && el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function manageOpacityLevel(newOpacity: number) {
    const min = 0;
    const max = 1;
    if (newOpacity <= min) return min;
    if (newOpacity >= max) return max;

    return newOpacity;
  }

  function changeImageOpacity(direction: "top" | "bottom") {
    direction === "top"
      ? setOpacity((pv) => manageOpacityLevel(pv + 0.1))
      : setOpacity((pv) => manageOpacityLevel(pv - 0.1));
  }

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
      {!!info && (
        <ModalPopUp
          show={!!info}
          onClose={() => setInfo(undefined)}
          showCloseBtn
          contentClassName="Electric-popup"
        >
          <div className="Electric-popup-content">
            {info?.description_title && (
              <h3 className="Electric-popup-title">{info.description_title}</h3>
            )}
            <p className="Electric-popup-description">{info?.description}</p>
          </div>
        </ModalPopUp>
      )}
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
            <button
              className="Electric-cars-item"
              key={slug}
              onClick={() => scrollToELement(slug)}
            >
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
      <ModelsList data={cars} setCarInfo={setInfo} />
      <div>
        <div className="Electric-gt-container" ref={gtContainer}>
          {entry?.gt_background && (
            <Image
              src={entry.gt_background?.url}
              alt="audi gt in box image"
              fill
              objectFit="cover"
              className="Electric-gt"
              style={{ opacity }}
            />
          )}
          {entry?.gt_additional_background && (
            <Image
              src={entry?.gt_additional_background?.url}
              alt="audi gt on street image"
              fill
              objectFit="cover"
              className="Electric-gt-additional"
            />
          )}
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
      <section className="Electric-hybrid">
        <h3 className="Electric-hybrid-title">
          Plug-In Hybrid: Audi TFSI e models.
        </h3>
        <p className="Electric-hybrid-text">
          Take your first step towards electric driving in an Audi TFSI e model.
          By combining an electric motor with a traditional engine and legendary
          quattro, this lineup is poised to deliver a driving experience unlike
          any other.
        </p>
        <ModelsList data={hybridCars} setCarInfo={setInfo} />
      </section>
      <section className="Electric-footer">
        {entry?.footer_background?.url && (
          <Image
            src={entry.footer_background.url}
            alt="audi gt image"
            fill
            objectFit="cover"
            className="Electric-footer-image"
            loading="lazy"
          />
        )}
        <div className="Electric-footer-content">
          <h3 className="Electric-footer-title">Explore electric driving.</h3>
          <p className="Electric-footer-text">
            You’ve only scratched the surface of electric driving. Dive deeper
            and learn how exciting driving an electrified Audi e-tron® can be.
          </p>
          <Link href="/" className="Electric-footer-link">
            <span>e-tron® Technology</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
};
