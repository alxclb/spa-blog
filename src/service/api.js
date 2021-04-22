import axios from "axios";

export default axios.create({
    baseURL: "https://frontend-api-test-nultien.azurewebsites.net",
});

export const header = {
    header: {
        "accept" : "*/*",
    }
};
