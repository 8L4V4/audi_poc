import { FC, useEffect, useState } from "react";
import { MotorSportHistoryPageAPI } from "api";
import { useHttp } from "hooks/useHttp";
import { iSportHistoryLegendsItem, SportHistoryLegendsItem } from "../SportHistoryLegendsItem/SportHistoryLegendsItem";
import { SportHistoryLegendsModal } from "../SportHistoryLegendsModal/SportHistoryLegendsModal";

interface iLegendsData {
  title: string;
  list: iSportHistoryLegendsItem[];
};

export const SportHistoryLegends: FC = () => {
  const {call, data} = useHttp();
  const legendsData = data?.data?.entry as iLegendsData;

  const [modalData, setModalData] = useState("");

  useEffect(() => {
    call(MotorSportHistoryPageAPI.getLegendsData())
    .catch(err => {
      console.log(
        "%c Error getting { Sport History Legends } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    })
  }, []);

  if(!data) return null;
  
  return (
    <div className="SportHistoryLegends">
      <h3 className="SportHistoryLegends-title">{legendsData?.title}</h3>

      <div className="SportHistoryLegends-list">
        {legendsData?.list?.map(({text, img}) => 
          <SportHistoryLegendsItem
            img={img}
            text={text}
            key={text}
            showModal={(item: string) => setModalData(item)}
          />
        )}
      </div>

      <SportHistoryLegendsModal show={modalData} data={legendsData.list}/>
    </div>
  );
};