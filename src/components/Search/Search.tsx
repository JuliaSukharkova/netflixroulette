import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MOVIE_SEARCH } from "../../costants/routes";
import { InputElement, SearchBtn, SearchForm } from "./SearchForm";

export const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    searchValue && navigate(`${MOVIE_SEARCH}/?value=${searchValue}`);
  };

if (!searchValue || searchValue.trim() === "") {
  return (
    <SearchForm>
      <InputElement
        type="text"
        onChange={onSearch}
        value={searchValue}
        data-testid="input"
        placeholder="Чтобы Вы хотели посмотреть?"
      />
      <SearchBtn type="submit">Поиск</SearchBtn>
    </SearchForm>
  );
}

  return (
    <SearchForm onSubmit={handleSubmit}>
      <InputElement
        type="text"
        onChange={onSearch}
        value={searchValue}
        data-testid="input"
        placeholder="Чтобы Вы хотели посмотреть?"
      />
      <SearchBtn type="submit">Найти</SearchBtn>
    </SearchForm>
  );
};
