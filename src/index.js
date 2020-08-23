import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { CounterApp } from "./components";

const app = document.getElementById("root");

ReactDom.render(<CounterApp />, app);
