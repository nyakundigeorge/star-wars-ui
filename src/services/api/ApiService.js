/**
 * @author lusinabrian adapted by nyakundigeorge.
 * @notes: API Service. This is a wrapper around axios(or any other api library) and will make api calls to API. This is convenient as it allows
 * the application to interchange 3rd party libraries or even use a custom one, if the need arises, without need to change
 * all over codebase.
 */

import axios from "axios";
import {
    NOT_FOUND_STATUS_CODE,
    UNAUTHORIZED_STATUS_CODE,
    INTERNAL_SERVER_STATUS_CODE
} from "../constants";

class ApiService {
    constructor() {
        this.service = axios.create({
            headers: {
                "Content-Type": "application/json"
            },
            timeout: 10000
        });
        this.service.interceptors.request.use(this.handleRequestInterceptor);
        this.service.interceptors.response.use(
            this.handleResponseSuccess,
            this.handleResponseError
        );
    }

    /**
     * Request interceptor config. This is called before any request is made to API.
     * @param {Object} config
     * @return {Object} config object for axios
     * */
    handleRequestInterceptor = config =>
        // config.headers = {
        // 	Auth: this.token
        // };

        config;

    /**
     * Handles successful Response. This is used to handle the response accordingly
     * MUST return the response
     * @param {Object} response Response Object from request
     * @return {Object} Response */
        // Reference https://github.com/axios/axios#response-schema
    handleResponseSuccess = response => ({
        ...response
    });

    /**
     * Handles response errors
     * @param {Object} error Error Object received from response
     * */
        // Reference https://github.com/axios/axios#handling-errors
    handleResponseError = error => {
        if (error.response) {
            const { status } = error.response;
            switch (status) {
                case UNAUTHORIZED_STATUS_CODE:
                    // this.redirectTo(LOGIN_ROUTE);
                    break;
                case 400:
                    // this.redirectTo("/404");
                    break;
                case NOT_FOUND_STATUS_CODE:
                    break;
                case INTERNAL_SERVER_STATUS_CODE:
                    // this.redirectTo("/500");
                    break;
                default:
                    break;
            }
        }
    };

    /**
     * Perform POST requests to API
     * @param {String} url Url to make POST request
     * @param {Object} payload Payload Object data to POST to api
     * @param {Object} headers Headers
     * */
    post(url, payload, headers = null) {
        if (headers) {
            let currentHeaders = this.service.headers;

            this.service.headers = {
                ...currentHeaders,
                headers
            };

            return this.service.post(url, payload);
        } else {
            return this.service.post(url, payload);
        }
    }

    /**
     * perform GET request
     * @param {String} url
     * */
    get(url) {
        return this.service.get(url);
    }

    /**
     * Patch HTTP verb,handles patch requests
     * @param {String} url
     * @param {Object} payload
     * */
    patch(url, payload) {
        return this.service.patch(url, payload);
    }

    /**
     * Delete HTTP verb, handles delete requests
     * @param {String} url Url to post the delete method to
     */
    delete(url) {
        return this.service.delete(url);
    }
}

export default new ApiService();
