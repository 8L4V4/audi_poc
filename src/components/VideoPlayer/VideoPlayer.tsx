import { FC, MutableRefObject, SourceHTMLAttributes, useRef, VideoHTMLAttributes } from "react";
import { Icon, tIconName } from "components/Icon/Icon";

interface iVideoPlayer {
  video: VideoHTMLAttributes<HTMLVideoElement>;
  source: SourceHTMLAttributes<HTMLSourceElement>;
  title?: string;
  playIcon?: tIconName;
  className?: string;
  btnTimeout?: number;
};

export const VideoPlayer: FC<iVideoPlayer> = ({title, video, source, playIcon, className, btnTimeout}) => {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const btnRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  
  const onPlayHandler = () => {
    if(!videoRef.current || !btnRef.current || !containerRef.current) return;

    videoRef.current.play();
    btnRef.current.classList.add("hide");
    containerRef.current.classList.add("hide");

    setTimeout(() => {
      btnRef.current && btnRef.current.classList.remove("hide");
      containerRef.current && containerRef.current.classList.remove("hide");
    }, btnTimeout || 5000);
  };

  return (
    <div className={`VideoPlayer ${className || ""}`} ref={containerRef}>

    {title && <h2 className="VideoPlayer-title">{title}</h2>}

    <button className="VideoPlayer-play" onClick={onPlayHandler} ref={btnRef}>
      <Icon name={playIcon || "play"} />
    </button>

    <video {...video} className="VideoPlayer-player" ref={videoRef}>
      <source {...source}/>
    </video>
  </div>
  );
};