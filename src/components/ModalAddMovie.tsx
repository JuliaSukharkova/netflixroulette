import React, { useState, useRef } from "react";
import "../styles/modalmovie.scss";
import { IAddMovie } from "../types/addmovie";
import { form } from "../costants/costants";
import { MyValues } from "../costants/costants";

interface AddFormProps {
  onSubmit: (data: IAddMovie) => void;
}

export const ModalAddMovie = ({ onSubmit }: AddFormProps ) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const onClear = (ref: any) => {
    ref.current.value = "";
  };
  const ToggleClass = () => {
    setActive(!active);
  };

  const handleSumbit: React.FormEventHandler<HTMLFormElement & MyValues> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const {
      title,
      date,
      poster,
      rating,
      documentary,
      crime,
      horror,
      comedy,
      time,
      overview,
    } = form;

    onSubmit({
      title: title.value,
      release_date: date.value,
      poster_path: poster.value,
      vote_average: Number(rating.value),
      overview: overview.value,
      runtime: Number(time.value),
      genres: [documentary?.value, crime?.value, horror?.value, comedy?.value],
    });
  };

  return (
    <section className="modal-movie">
      <h1 className="modal-movie__title">Add Movie</h1>
      <form onSubmit={handleSumbit} className="modal__form">
        <label htmlFor="title" className="modal__form_item">
          <span className="modal__form_name">TITLE</span>
          <input
            className="modal__form_large"
            placeholder="Title"
            id="title"
            name="title"
            type="text"
            ref={ref}
            required
          />
        </label>
        <label htmlFor="date" className="modal__form_item">
          <span className="modal__form_name">RELEASE DATE</span>
          <input
            className="modal__form_md"
            type="date"
            id="date"
            placeholder="Select Date"
            name="date"
            ref={ref}
            required
          />
        </label>
        <label htmlFor="poster" className="modal__form_item">
          <span className="modal__form_name">Movie Url</span>
          <input
            className="modal__form_large"
            placeholder="https://"
            id="poster"
            name="poster"
            type="text"
            ref={ref}
            required
          />
        </label>
        <label htmlFor="rating" className="modal__form_item">
          <span className="modal__form_name">RATING</span>
          <input
            className="modal__form_md"
            placeholder="7.8"
            id="rating"
            name="rating"
            ref={ref}
            required
          />
        </label>
        <div className="modal__form_item">
          <p className="modal__form_name">GENRE</p>
          <div className="checkbox">
            <div
              className={
                active ? "checkbox-dropdown is-active" : "checkbox-dropdown"
              }
              onClick={ToggleClass}
            >
              <p>Select Genre</p>
              <div
                className="checkbox-dropdown__list"
                onClick={(e) => e.stopPropagation()}
              >
                {form.map((item) => (
                  <div key={item.name}>
                    <input
                      type="checkbox"
                      name={item.name}
                      value={item.value}
                      ref={ref}
                      required
                    />
                    <label htmlFor={item.htmlFor}>{item.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="time" className="modal__form_item">
          <span className="modal__form_name">RUNTIME</span>
          <input
            className="modal__form_md"
            placeholder=" minutes"
            id="time"
            name="time"
            type="text"
            ref={ref}
            required
          />
        </label>
        <label htmlFor="overview" className="modal__form_item">
          <span className="modal__form_name">OVERVIEW</span>
          <input
            type="text"
            className="modal__form_xxl"
            placeholder="Movie description"
            id="overview"
            name="overview"
            ref={ref}
            required
          />
        </label>

        <div className="modal-movie__btn">
          <button type="reset" onClick={onClear}>
            RESET
          </button>
          <button className="submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </section>
  );
};
