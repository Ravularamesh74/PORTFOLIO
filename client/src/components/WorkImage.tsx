import { useState, useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🎥 CONTROL VIDEO PLAY/PAUSE
  useEffect(() => {
    if (!videoRef.current) return;

    if (isHover) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHover]);

  // 🧲 3D TILT EFFECT
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    containerRef.current.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  };

  const resetTilt = () => {
    if (containerRef.current) {
      containerRef.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div
      className="work-image"
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setIsHover(false);
        resetTilt();
      }}
      onMouseEnter={() => setIsHover(true)}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="work-image-in"
        data-cursor="link"
      >

        {/* 🔥 VIEW OVERLAY */}
        <div className={`view-overlay ${isHover ? "show" : ""}`}>
          VIEW <MdArrowOutward />
        </div>

        {/* IMAGE */}
        <img
          src={image}
          alt={alt}
          className={`work-img ${isHover ? "fade-out" : ""}`}
        />

        {/* VIDEO */}
        {video && (
          <video
            ref={videoRef}
            className={`work-video ${isHover ? "show" : ""}`}
            src={video}
            muted
            loop
            playsInline
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;
