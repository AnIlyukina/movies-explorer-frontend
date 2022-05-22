/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './infoTooltip.css';

function InfoTooltip({
  isOpen, isErrorStatus, messageInfoTooltip,
}) {
  return (
    <section
      className={`infoTooltip ${isOpen ? 'infoTooltip_opened' : ''} `}
    >
      <div className={`${isErrorStatus ? 'infoTooltip__container error' : 'infoTooltip__container success'} `}>
        <h2
          className="infoTooltip__message"
        >
          {messageInfoTooltip}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
