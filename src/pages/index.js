import React from "react";
import App from "../components/app";
import { Helmet } from "react-helmet";

export default function Index() {
    return (
        <div className="app">
            <Helmet>
                <meta charSet="utf-8" />
                <title>DeathSpace</title>
            </Helmet>
            <App />
        </div>
    );
}
