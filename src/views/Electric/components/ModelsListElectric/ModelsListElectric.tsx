import { Dispatch, FC, SetStateAction } from "react";
import { iCar, iCarInfo } from "views/Electric/interfaces";
import Image from "next/image";
import Link from "next/link";

interface iModelsListElectric {
  data: iCar[];
  setCarInfo: Dispatch<SetStateAction<iCarInfo | undefined>>;
};

export const ModelsListElectric: FC<iModelsListElectric> = ({ data, setCarInfo }) => {
  const openMsprDetails = (car: iCar) => {
    setCarInfo({
      description: car?.mspr,
      description_title: "MSRP Disclaimer",
    });
  };

  return (
    <ul className="ModelsListElectric">
      {data?.map((car) => (
        <li className="ModelsListElectric-model" id={car?.slug} key={car?.name}>
          <div className="ModelsListElectric-img-wrap">
            <Image
              src={car?.image?.url}
              alt={`${car?.name}-logo`}
              fill
              objectFit="cover"
              className="ModelsListElectric-img"
              loading="lazy"
            />
          </div>

          <div className="ModelsListElectric-text-container">
            <h2 className="ModelsListElectric-title">
              {car?.year} {car?.name}
            </h2>
            <p className="ModelsListElectric-price">Starting at ${car?.price}.*</p>
            {car?.type === "GT" && (
              <button
                className="ModelsListElectric-gt-mspr"
                onClick={() => openMsprDetails(car)}
              >
                View MSRP info
              </button>
            )}

            {car?.type === "GT" && (
              <>
                <Link href="/" className="ModelsListElectric-gt btn_filled">
                  Explore the e-tron GT
                </Link>
                <Link href="/" className="ModelsListElectric-gt-etron btn_hollow">
                  Explore the e-tron GT
                </Link>
              </>
            )}

            {car?.type !== "GT" && (
              <>
                <Link href="/" className="btn_filled ModelsListElectric-explore">
                  Explore the {car?.name}
                </Link>
                <button
                  className="btn_hollow ModelsListElectric-MSPR"
                  onClick={() => openMsprDetails(car)}
                >
                  *View MSRP info
                </button>
              </>
            )}
          </div>

          {car?.image_description && (
            <p className="ModelsListElectric-description">{car.image_description}</p>
          )}
          
          <div className="ModelsListElectric-info-container">
            <p className="ModelsListElectric-info-description">{car?.description}</p>
            <ul className="ModelsListElectric-info-list">
              {car?.info_list?.map(item => (
                <li
                  className="ModelsListElectric-info-item"
                  key={item?.title}
                >
                  <h3 className="ModelsListElectric-info-title">{item?.title}</h3>
                  
                  <p className="ModelsListElectric-info-count-container">
                    <span className="ModelsListElectric-info-count">{item?.count}</span>
                    &nbsp;<span className="ModelsListElectric-info-count-text">{item?.unit}</span>
                  </p>

                  {item?.text && <p className="ModelsListElectric-info-text">{item.text}</p>}

                  <button
                    className="ModelsListElectric-info-view"
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
              <Link href="/" className="btn_hollow ModelsListElectric-info-explore">
                Explore the {car?.name}
              </Link>
            )}
            {car?.type === "GT" && (
              <div className="ModelsListElectric-info-btns">
                <Link href="/" className="ModelsListElectric-info-filled">
                  Explore the Audi e‑tron® GT
                </Link>
                <Link href="/" className="ModelsListElectric-info-hollow">
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
