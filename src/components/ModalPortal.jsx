import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "@/utils/helpers";

const ModalPortal = ({ children, wrapperId = "modal-portal-root" }) => {
  let element = document.getElementById(wrapperId);
  // if element is not found with wrapperId,
  // create and append to body

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, element);
};

export default ModalPortal;
