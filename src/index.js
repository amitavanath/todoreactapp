import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from "axios";

axios.defaults.baseURL = "https://todochallengeapi.azurewebsites.net/api";

ReactDOM.render(<App />, document.getElementById("root"));
