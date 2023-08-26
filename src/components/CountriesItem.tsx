import { Link } from "react-router-dom";
import classes from "./CountriesItem.module.css";
import { CountryI } from "../providers/server/server.interface";

type Props = {
  country: CountryI;
};

const CountriesItem: React.FC<Props> = ({ country }) => {
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <Link to={`/${country.id}`}>
          <h2>{country.nombre}</h2>
        </Link>
      </div>
    </li>
  );
};

export default CountriesItem;
