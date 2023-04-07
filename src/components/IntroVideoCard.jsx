import React, { useState } from "react";
import { styled } from "goober";
import IntroVideoPlayerModal from "@/components/IntroVideoPlayerModal";
import { ReactComponent as PlayCircle } from "@/assets/images/play-circle.svg";

const Container = styled("div")`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 168px;
  .image-wrapper {
    position: relative;
  }
  .video-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .type-subtitle1 {
    color: var(--grey-400);
  }
  .play-btn {
    cursor: pointer;
    position: absolute;
    top: 33%;
    left: 37.5%;
    height: 42px;
    width: 42px;
    z-index: 2;
    color: white;
    .play-btn:hover {
      background: #eee;
    }
  }
`;

const IntroVideoCard = ({ title, date, previewImageUrl, videoUrl }) => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  return (
    <>
      <Container>
        <div className="image-wrapper">
          {previewImageUrl}
          <div
            onClick={() => {
              setShowVideoPlayer(true);
            }}
            className="play-btn"
          >
            <PlayCircle />
          </div>
        </div>
        <div className="video-info-wrapper">
          <p className="type-title4">{title}</p>
          <p className="type-subtitle1">Posted: {date}</p>
        </div>
      </Container>
      <IntroVideoPlayerModal
        closeModal={() => setShowVideoPlayer(false)}
        isVisible={showVideoPlayer}
        clickAction={() => {
          setShowVideoPlayer(false);
        }}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default IntroVideoCard;
