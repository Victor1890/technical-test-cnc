import { ProvinceI } from "../providers/server/server.interface";
import classes from "./CountriesItem.module.css";

type Props = {
  province: ProvinceI;
};

const ProvinceItem: React.FC<Props> = ({ province }) => {
  return (
    <li className={classes.item}>
      <div className={classes.info}>
        <h2>{province.nombre}</h2>
      </div>
    </li>
  );
};

export default ProvinceItem;
