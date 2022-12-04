import { FC } from "react";
import { VideoPlayer } from "components/VideoPlayer/VideoPlayer";

export interface iSportHistoryArticle {
  title: string;
  text: string;
  subtitle?: string;
  img?: {url: string};
  video?: {url: string};
  type?: string;
};

export const SportHistoryArticle: FC<iSportHistoryArticle> = ({title, text, subtitle, img, video, type}) => {
  return (
    <div className="SportHistoryArticle">
      <div className={`SportHistoryArticle-container ${type || ""}`}>
        {!!img?.url && <img className="SportHistoryArticle-img" src={img.url} alt="article_img" />}

        {!!video?.url && <VideoPlayer video={{src: video?.url}} source={{src: video?.url}} className="SportHistoryArticle-video" />}

        <div className="SportHistoryArticle-content">
          <h3 className="SportHistoryArticle-content-title">{title}</h3>

          <p className="SportHistoryArticle-content-text">{text}</p>

          {subtitle && <span className="SportHistoryArticle-content-subtitle">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
};