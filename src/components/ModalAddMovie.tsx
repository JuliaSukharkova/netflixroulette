import React, { useState, useRef } from "react";
import { IAddMovie } from "../types/addmovie";
import { form } from "../costants/costants";
import { MyValues } from "../costants/costants";
import {
  ButtonContainer,
  CheckboxDropDown,
  CheckboxInput,
  CheckboxItem,
  CheckboxLabel,
  CheckboxList,
  CheckboxTitle,
  ModalButton,
  ModalCheckbox,
  ModalForm,
  ModalInput,
  ModalItem,
  ModalName,
  ModalSection,
  ModalTitle,
} from "./styled-components/ModalStyle/ModalMovie";

interface AddFormProps {
  onSubmit: (data: IAddMovie) => void;
}

export const ModalAddMovie = ({ onSubmit }: AddFormProps) => {
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
    <ModalSection>
      <ModalTitle>Add Movie</ModalTitle>
      <ModalForm onSubmit={handleSumbit}>
        <ModalItem htmlFor="title">
          <ModalName>TITLE</ModalName>
          <ModalInput
            width={406}
            placeholder="Title"
            id="title"
            name="title"
            type="text"
            ref={ref}
            required
          />
        </ModalItem>
        <ModalItem htmlFor="date">
          <ModalName>RELEASE DATE</ModalName>
          <ModalInput
            width={210}
            type="date"
            id="date"
            placeholder="Select Date"
            name="date"
            ref={ref}
            required
          />
        </ModalItem>
        <ModalItem htmlFor="poster">
          <ModalName>Movie Url</ModalName>
          <ModalInput
            width={406}
            placeholder="https://"
            id="poster"
            name="poster"
            type="text"
            ref={ref}
            required
          />
        </ModalItem>
        <ModalItem htmlFor="rating">
          <ModalName>RATING</ModalName>
          <ModalInput
            width={210}
            placeholder="7.8"
            id="rating"
            name="rating"
            ref={ref}
            required
          />
        </ModalItem>
        <ModalItem>
          <ModalName>GENRE</ModalName>
          <ModalCheckbox>
            <CheckboxDropDown
              className={
                active ? "is-active" : ""
              }
              onClick={ToggleClass}
            >
              <CheckboxTitle>Select Genre</CheckboxTitle>
              <CheckboxList
                onClick={(e) => e.stopPropagation()}
              >
                {form.map((item) => (
                  <CheckboxItem key={item.name}>
                    <CheckboxInput
                      type="checkbox"
                      name={item.name}
                      value={item.value}
                      ref={ref}
                      required
                    />
                    <CheckboxLabel htmlFor={item.htmlFor}>{item.label}</CheckboxLabel>
                  </CheckboxItem>
                ))}
              </CheckboxList>
            </CheckboxDropDown>
          </ModalCheckbox>
        </ModalItem>
        <ModalItem htmlFor="time">
          <ModalName>RUNTIME</ModalName>
          <ModalInput
            width={210}
            placeholder=" minutes"
            id="time"
            name="time"
            type="text"
            ref={ref}
            required
          />
        </ModalItem>
        <ModalItem htmlFor="overview">
          <ModalName>OVERVIEW</ModalName>
          <ModalInput
            width={636}
            height={120}
            type="text"
            placeholder="Movie description"
            id="overview"
            name="overview"
            ref={ref}
            required
          />
        </ModalItem>

        <ButtonContainer>
          <ModalButton color="#f65261" background="rgb(0, 0, 0, 0)" type="reset" onClick={onClear}>
            RESET
          </ModalButton>
          <ModalButton type="submit">
            SUBMIT
          </ModalButton>
        </ButtonContainer>
      </ModalForm>
    </ModalSection>
  );
};
