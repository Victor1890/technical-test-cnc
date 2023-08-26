import config from "../../config";
import Base from "../base";
import { ResponseAllCountriesI, ResponseOneCountriesI } from "./server.interface";

class TerritorialProvider extends Base {

    constructor() {
        super(config.server.api)
    }

    public getAllCountries(): Promise<ResponseAllCountriesI> {
        return this.get("/paises")
    }

    public getCountry(id: number | string): Promise<ResponseOneCountriesI> {
        return this.get(`/paises/${id}/show`)
    }

    public getDistricts(id: number | string): Promise<ResponseOneCountriesI> {
        return this.get(`/distritos/${id}/show`)
    }
}

const territorialProvider = new TerritorialProvider()

export default territorialProvider