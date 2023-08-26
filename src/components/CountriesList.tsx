import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";
import { CountryI } from "../providers/server/server.interface";
import { Fragment } from "react";

type Props = {
  countriesData: CountryI[];
};

const CountriesList: React.FC<Props> = ({ countriesData }) => (
  <Fragment>
    {countriesData.length ? (
      <ul className={classes.list}>
        {countriesData.map((country: CountryI) => (
          <CountriesItem country={country} key={country.id} />
        ))}
      </ul>
    ) : null}
  </Fragment>
)

export default CountriesList;
