import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.covid19india.org/state_district_wise.json",

  });

  export default instance