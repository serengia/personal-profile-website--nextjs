import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/redux/modalSlice";
import { CloseIcon } from "@/svg";
import { projectsData } from "./WorksSection";

function Modal() {
  const { activeModalDataId } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const activeData = activeModalDataId
    ? projectsData.find((p) => p.id === activeModalDataId)
    : {};

  const sourceCodeLinkStyles = activeData.private
    ? {
        color: "currentColor",
        cursor: "not-allowed",
        opacity: 0.9,
        pointerEvents: "none",
      }
    : {};

  return (
    <div
      className="backdrop"
      // onClick={(e) => dispatch(modalActions.closeModal())}
    >
      {activeData?.id && (
        <div className="modal">
          <CloseIcon
            className="modal-close-icon"
            onClick={() => dispatch(modalActions.closeModal())}
          />
          <img
            className="modal-img"
            src={activeData.image}
            alt="Modal desktop"
          />

          <h2>{activeData.name}</h2>
          <div className="button-container">
            <a href={activeData.link} target="__blank" className="link-one">
              Live Version{" "}
              <img src="./img/modal-live-icon.svg" alt="Modal icon" />
            </a>
            <a
              href={activeData.linkSource}
              target="__blank"
              style={sourceCodeLinkStyles}
            >
              {`${activeData.private ? "Source Code(Private)" : "Source Code"}`}
              <img src="./img/modal-gihub-icon.svg" alt="Modal icon" />{" "}
            </a>
          </div>

          <ul className="modal-skills">
            {activeData.technologies.map((item) => (
              <li key={item} className="skill-tag skill-tag--grey">
                {item}
              </li>
            ))}
          </ul>
          <p className="modal-description">{activeData.description}</p>
        </div>
      )}
    </div>
  );
}

export default Modal;
