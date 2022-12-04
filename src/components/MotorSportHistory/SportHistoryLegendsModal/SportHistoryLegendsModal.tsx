import { FC } from "react";
import { iSportHistoryLegendsItem } from "../SportHistoryLegendsItem/SportHistoryLegendsItem";

interface iSportHistoryLegendsModal {
  show: string;
  data: iSportHistoryLegendsItem[];
};

export const SportHistoryLegendsModal: FC<iSportHistoryLegendsModal> = ({show, data}) => {
  return (
    <div></div>
  );
};