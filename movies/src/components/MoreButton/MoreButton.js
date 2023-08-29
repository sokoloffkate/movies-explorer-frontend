import React from "react";

function MoreButton({onClick}) {

  return (
    <section className="moreButton">
      <button type="button" className="moreButton__btn" onClick={onClick}>
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;
