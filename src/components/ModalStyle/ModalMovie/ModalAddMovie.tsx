import React, { useState } from "react";
import { form } from "../../../costants/costants";
import {
  ButtonContainer,
  CheckboxDropDown,
  CheckboxInput,
  CheckboxItem,
  CheckboxLabel,
  CheckboxList,
  CheckboxTextArea,
  ModalButton,
  ModalCheckbox,
  ModalForm,
  ModalInput,
  ModalItem,
  ModalName,
  ModalSection,
  ModalTitle,
  Error,
} from "./ModalMovie";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { MOVIES_LIST } from "../../../costants/endpoints";
import axios from "axios";
import { IAddMovie } from "../../../types/movie";

export const ModalAddMovie = ({ setShowSuccessModal }: any) => {
  const [active, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!active);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .typeError("Enter title")
      .min(1, "Min. 1 characters")
      .required("Title is required"),
    release_date: Yup.date()
      .typeError("Date is required")
      .required("Date is required"),
    poster_path: Yup.string()
      .typeError("Enter Movie URL")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Movie URL is required"
      )
      .required("Invalid Movie URL"),
    vote_average: Yup.number()
      .typeError("Enter rating")
      .min(0, "Rating is required")
      .max(10, "Invalid Rating")
      .required("Invalid Rating"),
    genres: Yup.array()
      .typeError("Select at least one genre to proceed")
      .min(1, "Select at least one genre to proceed")
      .required("Genres is required"),
    runtime: Yup.number()
      .typeError("Enter runtime")
      .min(1, "Runtime is required")
      .required("Invalid Runtime"),
    overview: Yup.string()
      .typeError("Enter overview")
      .min(20, "Min. 20 characters")
      .required("Overview is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddMovie>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IAddMovie) => {
    try {
      const response = await axios.post(MOVIES_LIST, data);
      setShowSuccessModal(true);
      return response.data;
    } catch (error: any) {
      return { error: error.response };
    }
  };

  return (
    <>
      <ModalSection>
        <ModalTitle>Add Movie</ModalTitle>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalItem htmlFor="title">
            <ModalName>TITLE</ModalName>
            <ModalInput
              width={406}
              placeholder="Title"
              id="title"
              type="text"
              {...register("title")}
              required
            />
            <Error>{errors.title?.message}</Error>
          </ModalItem>
          <ModalItem htmlFor="date">
            <ModalName>RELEASE DATE</ModalName>
            <ModalInput
              width={210}
              type="date"
              id="date"
              placeholder="Select Date"
              {...register("release_date")}
              required
            />
            <Error>{errors.release_date?.message}</Error>
          </ModalItem>
          <ModalItem htmlFor="poster">
            <ModalName>Movie Url</ModalName>
            <ModalInput
              width={406}
              placeholder="https://"
              id="poster"
              type="text"
              required
              {...register("poster_path")}
            />
            <Error>{errors.poster_path?.message}</Error>
          </ModalItem>
          <ModalItem htmlFor="rating">
            <ModalName>RATING</ModalName>
            <ModalInput
              width={210}
              placeholder="7.8"
              id="rating"
              {...register("vote_average")}
              required
            />
            <Error>{errors.vote_average?.message}</Error>
          </ModalItem>
          <ModalItem>
            <ModalName>GENRE</ModalName>
            <ModalCheckbox>
              <CheckboxDropDown
                className={active ? "is-active" : ""}
                onClick={ToggleClass}
              >
                Select Genre
                <CheckboxList onClick={(e) => e.stopPropagation()}>
                  {form.map((item) => (
                    <CheckboxItem key={item.name}>
                      <CheckboxInput
                        type="checkbox"
                        value={item.value}
                        {...register("genres")}
                      />
                      <CheckboxLabel htmlFor={item.htmlFor}>
                        {item.label}
                      </CheckboxLabel>
                    </CheckboxItem>
                  ))}
                  <Error>{errors.genres?.message}</Error>
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
              type="text"
              {...register("runtime")}
              required
            />
            <Error>{errors.runtime?.message}</Error>
          </ModalItem>
          <ModalItem htmlFor="overview">
            <ModalName>OVERVIEW</ModalName>
            <CheckboxTextArea
              placeholder="Movie description"
              id="overview"
              {...register("overview")}
              required
            ></CheckboxTextArea>
            <Error>{errors.overview?.message}</Error>
          </ModalItem>
          <ButtonContainer>
            <ModalButton
              color="#f65261"
              background="rgb(0, 0, 0, 0)"
              type="reset"
              onClick={() => reset()}
            >
              RESET
            </ModalButton>
            <ModalButton type="submit">SUBMIT</ModalButton>
          </ButtonContainer>
        </ModalForm>
      </ModalSection>
    </>
  );
};
