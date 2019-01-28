const BASE_URL = "http://localhost:4000";

export const api = async (url, method, reqBody = null, headers = {}) => {
    try {
        const URL = BASE_URL.concat(url);
        const body = reqBody && JSON.stringify(reqBody);

        const fetchParams = {method, headers};

        if ((method === "POST" && !body) || (method === "PUT" && !body)) {
            throw new Error("Request body required");
        }

        if (body) {
            fetchParams.body = body;
            fetchParams.headers["Content-Type"] = "application/json";
        }

        const fetchPromise = fetch(URL, fetchParams);
        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Request timeout");
            }, 50000);
        });

        const response = await Promise.race([fetchPromise, timerPromise]);
        return response;
    } catch (err) {
        return err;
    }
};

export const fetchApi = async (url, method, status, body = null) => {
    try {
        const response = await api(url, method, body);
        console.log(response);
        if(response.status === status) {
            return await response.json();
        }
        const errorBody = await response.json();
        console.log("Error Details =>", errorBody);
    } catch (e) {
        throw new Error(e);
    }
}
