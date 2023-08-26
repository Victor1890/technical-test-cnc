import { CountryI } from "../providers/server/server.interface";
import classes from "./CountryDetail.module.css";
import ProvinceList from "./ProvinceList";

type Props = {
  country: CountryI;
};

const CountryDetail: React.FC<Props> = ({ country }) => {

  return (
    <div>
      <div className={classes.right}>
        <h2>{country.nombre}</h2>
        <div className={classes.middle}>
          <ul className={classes.geography}>
            <li>
              <h3>Provincias: </h3>
              {country.provincias?.length ? (
                <p>{country.provincias?.length}</p>
              ) : (
                <p>N/A</p>
              )}
            </li>
          </ul>

        </div>
      </div>
      <ProvinceList provinces={country.provincias || []} />
    </div>
  );
};

export default CountryDetail;
