import React, { useState } from "react";
import { styled } from "goober";
import Spacer from "@/components/Spacer";
import IntroVideoPlayerModal from "@/components/IntroVideoPlayerModal";

const Container = styled("div")`
  position: relative;
  width: 168px;
  border: none;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  gap: 4;
  @media only screen and (min-width: 375px) and (max-width: 969px) {
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 121px;
  }
  .foot-div {
    background: none;
    line-height: 8;
    padding-top: 10px;
  }
  .play-btn {
    cursor: pointer;
    position: absolute;
    top: 12.5%;
    left: 50%;
    height: 42px;
    width: 42px;
    z-index: 2;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
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
        <div className="img-div">
          <img src={previewImageUrl} />
          <div
            onClick={() => {
              setShowVideoPlayer(true);
            }}
            className="play-btn"
          >
            <img src="/images/play-circle.svg" />
          </div>
        </div>
        <div className="foot-div">
          <p className="type-title4">{title}</p>
          <Spacer height={5} />
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
