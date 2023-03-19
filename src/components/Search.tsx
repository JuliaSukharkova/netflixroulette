import React, {useState} from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { MOVIE_SEARCH } from "../costants/routes";

export const Search = () => {
  const navigate = useNavigate()
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    searchValue && navigate(`${MOVIE_SEARCH}/?value=${searchValue}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        onChange={onSearch}
        value={searchValue}
        placeholder="What do you want to watch?"
      />
      <button>Search</button>
    </form>
  );
};
