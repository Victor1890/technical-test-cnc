import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Base {
    private readonly axios: AxiosInstance

    constructor(api: string, config?: AxiosRequestConfig) {
        this.axios = axios.create({
            baseURL: api,
            ...(config || {})
        })
    }

    private params(params: Record<string, any>): string {
        return Object.keys(params)
            .map((key) => {
                let value = params[key]
                value = typeof value == typeof {} ? JSON.stringify(value) : value
                return `${key}=${value}`
            })
            .join('&')
    }

    private getMessage(error: any): string {
        const response = error.response
        const message = response && response.data && response.data.error ? response.data.error.message : error.message
        return message
    }

    protected get(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
        return new Promise((resolve) => {
            const _isParam = Object.keys(params).length > 0
            this.axios
                .get(`${url}${_isParam ? `?${this.params(params)}` : ''}`, config)
                .then((res) => resolve(res.data))
                .catch((error) => {
                    const message = this.getMessage(error)
                    return resolve({ error: { message } })
                })
        })
    }

    protected _download(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
        return new Promise((resolve) => {
            const _isParam = Object.keys(params).length > 0
            this.axios
                .get(`${url}${_isParam ? `?${this.params(params)}` : ''}`, config)
                .then((res) => resolve(res))
                .catch((error) => {
                    const message = this.getMessage(error)
                    return resolve({ error: { message } })
                })
        })
    }

    protected post(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<any> {
        return new Promise((resolve) => {
            this.axios
                .post(url, data, config)
                .then((res) => resolve(res.data))
                .catch((error) => {
                    const message = this.getMessage(error)
                    return resolve({ error: { message } })
                })
        })
    }

    protected update(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<any> {
        return new Promise((resolve) => {
            this.axios
                .patch(url, data, config)
                .then((res) => resolve(res.data))
                .catch((error) => {
                    const message = this.getMessage(error)
                    return resolve({ error: { message } })
                })
        })
    }

    protected delete(url: string, config: AxiosRequestConfig = {}): Promise<any> {
        return new Promise((resolve) => {
            this.axios
                .delete(url, config)
                .then((res) => resolve(res.data))
                .catch((error) => {
                    const message = this.getMessage(error)
                    return resolve({ error: { message } })
                })
        })
    }
}

export default Base
