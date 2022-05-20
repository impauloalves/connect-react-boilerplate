import ReactDOM from "react-dom";
import React from "react";

import Button from './components/Button';

window.onload = () => {
    const app = document.getElementById("app");
    ReactDOM.render(<Button/>, app);
};
