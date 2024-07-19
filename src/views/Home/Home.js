import React from 'react';
import './Home.css';
import I18n from './../../utils/I18n';

const userCount = 15;

function Home() {
    return (
        <div>
            <h1>{I18n({ Keyword: "WelcomeMessage" })}</h1>

            <p>
                {I18n({ Keyword: "normalMessage" })}
            </p>

            <h3>
                {I18n({ Keyword: "greetingMessage" })}
            </h3>

            <h5>{I18n({ Keyword: "endMessage" })}</h5>

            <select
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}
            >
                <option value="mr">Marathi</option>
                <option value="hi">Hindi</option>
                <option value="en">English</option>
            </select>

            <p>
                {I18n({ Keyword: "usersStatMessage" }, "{usersCount}", userCount)}
            </p>
        </div>
    );
}

export default Home;
