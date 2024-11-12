import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({
  title,
  subtitle,
  media,
  mobileVideo,
  mp4Fallback,
  video,
  poster,
}) => {
  const [src, setSrc] = React.useState(null);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    videoRef?.current?.setAttribute("muted", "");
    videoRef?.current?.play();

    function handleClick() {
      if (!video) return;
      // Determines the network speed of the user.
      const effectiveType = window.navigator?.connection?.effectiveType;
      const isDataSaverEnabled = window.navigator?.connection?.saveData;

      const slowConnections = ["2g", "slow-2g", "3g"];

      if (
        !effectiveType ||
        (effectiveType && slowConnections.includes(effectiveType)) ||
        !isDataSaverEnabled
      ) {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const supportsWebm = videoRef.current.canPlayType(
          'video/webm; codecs="vp8, vorbis"'
        );

        const mobileSource =
          !supportsWebm && mp4Fallback ? mp4Fallback : mobileVideo;
        const desktopSource =
          !supportsWebm && mp4Fallback ? mp4Fallback : media;

        setSrc(isMobile && mobileVideo ? mobileSource : desktopSource);
        videoRef.current.setAttribute("muted", "");
        videoRef.current.play();
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <section className="relative h-[420px] md:h-screen-minus-100 sm-full-bleed">
      <div className="absolute z-10 text-white bottom-8 left-8 lg:bottom-16 lg:left-16">
        <p style={{ fontSize: "60px" }}>{title}</p>
        <p style={{ fontSize: "24px" }}>{subtitle}</p>
      </div>
      {video && (
        <>
          <video
            ref={videoRef}
            src={mp4Fallback}
            muted
            defaultmuted="true"
            loop
            playsInline
            className={`relative z-0 object-cover w-full h-full bg-white`}
          />
        </>
      )}
      {!video && (
        <GatsbyImage
          className="relative z-0 object-cover w-full h-full"
          image={media.src.childImageSharp.gatsbyImageData}
          objectFit="cover"
          alt={media.alt}
        />
      )}
    </section>
  );
};

export default Hero;
