import React from "react";

function MoreButton({ getMoreMovies }) {
  return (
    <section className="moreButton">
      <button type="button" onClick={getMoreMovies} className="moreButton__btn">
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;
