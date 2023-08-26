import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./Detail.module.css";
import CountryDetail from "../components/CountryDetail";
import { CountryI } from "../providers/server/server.interface";
import territorialProvider from "../providers/server";

const DetailPage = () => {
  const params = useParams<{ id: string }>();
  const [country, setCountry] = useState<CountryI | null>(null);

  const getCountry = (id: string) => {
    territorialProvider.getCountry(id).then(data => {
      setCountry(data.data);
    }).catch(e => {
      console.error("territorialProvider.getCountry(id) error: ", e)
    })
  }

  useEffect(() => {
    if (!params?.id) return;
    getCountry(params.id);
  }, [params.id]);

  return (
    <div className={classes.container}>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
          />
        </svg>
        <span>Back</span>
      </Link>
      {
        country ? <CountryDetail country={country} /> : <div className={classes.error}>Country Not Found</div>
      }
    </div>
  );
};

export default DetailPage;
