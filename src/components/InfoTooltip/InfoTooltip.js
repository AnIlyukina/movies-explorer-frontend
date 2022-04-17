/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './infoTooltip.css';

function InfoTooltip(props) {
  return (
    <section
      className={`infoTooltip ${props.isOpen ? 'infoTooltip_opened' : ''} `}
    >
      <div className="infoTooltip__container">
        <button
          type="button"
          className="infoTooltip__close"
          onClick={props.onClose}
        />
        <h2
          className="infoTooltip__message"
        >
          {props.messageInfoTooltip}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
