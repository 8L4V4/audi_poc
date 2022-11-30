import { VideoPlayer } from "components/VideoPlayer/VideoPlayer";
import { iGalleryItem } from "pages/audi-sport-dna";
import { FC, MutableRefObject, useRef } from "react";

interface iSportDNAGallery {
  data: iGalleryItem;
};

export const SportDNAGallery: FC<iSportDNAGallery> = ({data}) => {
  const showTextSection = data?.text && data?.title;
  const showPlayer = data.img.url.includes("mp4");

  if(!data) return null;

  return (
    <div className="SportDNAGallery">
      {!showPlayer && (
        <img 
          className="SportDNAGallery-background"
          src={data.img.url} 
          alt="background"
        />
      )}

      {showPlayer && (
        <VideoPlayer
          className="SportDNAGallery-player"
          video={{
            src: data.img.url,
          }}
          source={{
            src:data.img.url
          }} 
        />
      )}

      {showTextSection && (
        <div className="SportDNAGallery-container">
          <div className="SportDNAGallery-container-wrap">
            <h3 className="SportDNAGallery-title">{data.title}</h3>

            <p className="SportDNAGallery-text">{data.text}</p>

            {data?.subtitle && <span className="SportDNAGallery-subtitle">{data.subtitle}</span>}
          </div>
        </div>
      )}
    </div>
  );
};