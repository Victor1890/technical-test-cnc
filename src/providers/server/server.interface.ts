export interface CountryI {
    id: number
    code: number
    iso_code: string
    nombre: string
    provincias?: ProvinceI[]
}

export interface ResponseAllCountriesI {
    data: CountryI[]
}

export interface ResponseOneCountriesI {
    data: CountryI
}

export interface ProvinceI {
    id: number
    code: number
    country_code: number
    nombre: string
}