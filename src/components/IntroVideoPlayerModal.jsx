import React from "react";
import { styled } from "goober";
import ModalPortal from "@/components/ModalPortal";

export const Container = styled("div")`
  background-color: rgba(38, 38, 38, 0.75);
  z-index: 100;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  opacity: 20;
  backdrop-filter: 5px;
  height: 100vh;
  width: 100vw;
  .cancel-icon-div {
    display: flex;
    justify-content: end;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    .cancel-icon {
      padding: 5px;
      background: white;
      border-radius: 100%;
      cursor: pointer;
    }
  }
`;

const IntroVideoPlayerModal = ({ closeModal, isVisible = false, videoUrl }) => {
  return isVisible ? (
    <ModalPortal>
      <Container>
        <div className="cancel-icon-div">
          <div
            onClick={() => {
              closeModal();
            }}
            className="cancel-icon"
          >
            <img src="/images/close-icon.svg" />
          </div>
        </div>
        <video width="90%" height="90%" controls className="video">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </Container>
    </ModalPortal>
  ) : null;
};

export default IntroVideoPlayerModal;
