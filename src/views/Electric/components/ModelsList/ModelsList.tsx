import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import { iCar, iCarInfo } from "views/Electric/interfaces";
import Link from "next/link";

interface iModelsList {
  data: iCar[];
  setCarInfo: Dispatch<SetStateAction<iCarInfo | undefined>>;
}

export const ModelsList: FC<iModelsList> = ({ data, setCarInfo }) => {
  const openMsprDetails = (car: iCar) => {
    setCarInfo({
      description: car?.mspr,
      description_title: "MSRP Disclaimer",
    });
  };

  return (
    <ul className="ModelsList">
      {data?.map((car) => (
        <li className="ModelsList-model" id={car?.slug} key={car?.name}>
          <div className="ModelsList-img-wrap">
            <Image
              src={car?.image?.url}
              alt={`${car?.name}-logo`}
              fill
              objectFit="cover"
              className="ModelsList-img"
            />
          </div>
          <div className="ModelsList-text-container">
            <h2 className="ModelsList-title">
              {car?.year} {car?.name}
            </h2>
            <p className="ModelsList-price">Starting at ${car?.price}.*</p>
            {car?.type === "GT" && (
              <button
                className="ModelsList-gt-mspr"
                onClick={() => openMsprDetails(car)}
              >
                View MSRP info
              </button>
            )}

            {car?.type === "GT" && (
              <>
                <Link href="/" className="ModelsList-gt btn_filled">
                  Explore the e-tron GT
                </Link>
                <Link href="/" className="ModelsList-gt-etron btn_hollow">
                  Explore the e-tron GT
                </Link>
              </>
            )}

            {car?.type !== "GT" && (
              <>
                <Link href="/" className="btn_filled ModelsList-explore">
                  Explore the {car?.name}
                </Link>
                <button
                  className="btn_hollow ModelsList-MSPR"
                  onClick={() => openMsprDetails(car)}
                >
                  *View MSRP info
                </button>
              </>
            )}
          </div>
          {car?.image_description && (
            <p className="ModelsList-description">{car.image_description}</p>
          )}
          <div className="ModelsList-info-container">
            <p className="ModelsList-info-description">{car?.description}</p>
            <ul className="ModelsList-info-list">
              {car?.info_list?.map((item, i) => (
                <li
                  className={`ModelsList-info-item ${
                    i === 1 ? "withBorder" : ""
                  }`}
                  key={item?.title}
                >
                  <h3 className="ModelsList-info-title">{item?.title}</h3>
                  <p>
                    <span className="ModelsList-info-count">{item?.count}</span>{" "}
                    <span>{item?.unit}</span>
                  </p>
                  {item?.text && (
                    <p className="ModelsList-info-text">{item.text}</p>
                  )}
                  <button
                    className="ModelsList-info-view"
                    onClick={() =>
                      setCarInfo({
                        description: item?.description,
                        description_title: item?.description_title,
                      })
                    }
                  >
                    {item?.link_title}
                  </button>
                </li>
              ))}
            </ul>
            {car?.type !== "GT" && (
              <Link href="/" className="btn_hollow ModelsList-info-explore">
                Explore the {car?.name}
              </Link>
            )}
            {car?.type === "GT" && (
              <div className="ModelsList-info-btns">
                <Link href="/" className="ModelsList-info-filled">
                  Explore the Audi e‑tron® GT
                </Link>
                <Link href="/" className="ModelsList-info-hollow">
                  Explore the Audi RS e‑tron® GT
                </Link>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
