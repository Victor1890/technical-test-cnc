import { useState, useRef } from "react";

import classes from "./Home.module.css";
import CountriesList from "../components/CountriesList";
import { CountryI } from "../providers/server/server.interface";

interface Props {
  countries: CountryI[];
}

const HomePage: React.FC<Props> = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState<CountryI[]>();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [option,] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const openFilterHandler = () => {
    setShowOptions((prevState) => !prevState);
  };

  const searchHandler = () => {
    const currentInput = inputRef.current?.value.toLowerCase();

    if (currentInput === "" && !option) {
      setFilteredCountries(undefined);
    }

    if (currentInput === "" && option) {
      setFilteredCountries(
        countries?.filter((country) => country.iso_code === option)
      );
    }

    if (currentInput !== "" && option && countries.length) {
      setFilteredCountries(
        countries.filter(
          (country) =>
            country.nombre.toLowerCase().slice(0, currentInput?.length) ===
            currentInput && country.iso_code === option
        )
      );
    }

    if (currentInput !== "" && !option && countries.length) {
      setFilteredCountries(
        countries.filter(
          (country) =>
            country.nombre.toLowerCase().slice(0, currentInput?.length) ===
            currentInput
        )
      );
    }
  };

  return (
    <div>
      <div className={classes.actions}>
        <div className={classes.contain}>
          <input
            className={classes.search}
            placeholder="Search for a country..."
            ref={inputRef}
            onChange={searchHandler}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
        </div>

        {showOptions && (
          <div className={classes.backdrop} onClick={openFilterHandler}></div>
        )}
      </div>

      {!filteredCountries && countries.length && (
        <CountriesList countriesData={countries} />
      )}
      {filteredCountries && filteredCountries.length && (
        <CountriesList countriesData={filteredCountries} />
      )}
      {(!filteredCountries && !countries) ||
        (filteredCountries?.length && (
          <div className={classes.error}>No Countries Found</div>
        ))}
    </div>
  );
};

export default HomePage;
