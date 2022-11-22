import { FC, useState } from "react";
import Image from "next/image";
import { iCar } from "views/Electric/Electric";
import Link from "next/link";
import { ModalPopUp } from "components/ModalPopup/ModalPopup";

export const ModelsList: FC<{ data: iCar[] }> = ({ data }) => {
  const [info, setInfo] = useState<{
    description_title?: string;
    description: string;
  }>();
  return (
    <ul className="ModelsList">
      {!!info && (
        <ModalPopUp
          show={!!info}
          onClose={() => setInfo(undefined)}
          showCloseBtn
          contentClassName="ModelsList-popup"
        >
          <div className="ModelsList-popup-content">
            {info?.description_title && (
              <h3 className="ModelsList-popup-title">
                {info.description_title}
              </h3>
            )}
            <p className="ModelsList-popup-description">{info.description}</p>
          </div>
        </ModalPopUp>
      )}
      {data?.map((car) => (
        <li className="ModelsList-model" key={car?.name}>
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
            <Link href="/" className="btn_filled ModelsList-explore">
              Explore the {car?.name}
            </Link>
            <button
              className="btn_hollow ModelsList-MSPR"
              onClick={() =>
                setInfo({
                  description: car?.mspr,
                })
              }
            >
              *View MSRP info
            </button>
          </div>
          <p className="ModelsList-description">{car?.image_description}</p>
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
                      setInfo({
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
            <Link href="/" className="btn_hollow ModelsList-info-explore">
              Explore the {car?.name}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
