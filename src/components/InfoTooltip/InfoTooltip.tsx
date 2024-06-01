import React from "react";
import "./InfoTooltip.css";
import { usePopupClose } from "../../hooks/usePopupClose";
import okImg from "../../assets/img/infoTooltip/OK.png";
import errorImg from "../../assets/img/infoTooltip/Error.png";
import { useSelector, useDispatch } from "react-redux";
import { setInfoTooltip } from "../../redux/slices/infoTooltipSlice";
import type { RootState } from "../../redux/srore";
import { IinfotooltipSlice } from "../../types/types";

export const InfoTooltip: React.FC = () => {
  const isInfoTooltip = useSelector((state: RootState) => state.infoTooltip);

  const dispatch = useDispatch();

  function closeInfoToolTip(isInfoTooltip: IinfotooltipSlice) {
    dispatch(
      setInfoTooltip({
        isOpen: false,
        title: isInfoTooltip.title,
        name: isInfoTooltip.name,
      })
    );
  }

  usePopupClose(isInfoTooltip, closeInfoToolTip);
  return (
    <div
      className={`popup popup_type_isInfoTooltip.name  popup-overlay ${
        isInfoTooltip.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close popup-close-button"
          type="button"
          onClick={() => closeInfoToolTip(isInfoTooltip)}
        >
          <span className="sr-only">Закрыть</span>
        </button>
        <div className="popup__form">
          <img
            className="popup__image"
            src={isInfoTooltip.name === "OK" ? okImg : errorImg}
            alt={isInfoTooltip.name}
          />

          <h2 className="popup__title_error">{isInfoTooltip.title}</h2>
        </div>
      </div>
    </div>
  );
};

