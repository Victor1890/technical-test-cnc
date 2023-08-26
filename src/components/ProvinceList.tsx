import { Fragment } from "react";
import { ProvinceI } from "../providers/server/server.interface";
import ProvinceItem from "./ProvinceItem";
import classes from "./CountriesList.module.css";

type Props = {
  provinces: ProvinceI[];
};

const ProvinceList: React.FC<Props> = ({ provinces }) => (
  <Fragment>
    {provinces.length ? (
      <ul className={classes.list}>
        {provinces.map((provider) => (
          <ProvinceItem province={provider} key={provider.id} />
        ))}
      </ul>
    ) : null}
  </Fragment>
)

export default ProvinceList;
