import { useEffect, useState } from "react";
import territorialProvider from "./providers/server";
import { CountryI } from "./providers/server/server.interface";
import Router from "./router";

function App() {
  const [countries, setCountries] = useState<CountryI[]>([]);

  const getAllCountries = () => {

    territorialProvider.getAllCountries().then(countries => {
      setCountries(countries.data)
    }).catch(e => {
      console.error("territorialProvider.getAllCountries error", e)
    })
  }

  useEffect(() => {
    getAllCountries();
  }, []);

  return <Router countries={countries} />
}

export default App;
