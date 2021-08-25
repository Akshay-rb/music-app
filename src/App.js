import "./styles.css";
import React, { useState } from "react";

const languages = {
  kannada: [
    {
      name: "bhava lokada bhrameya",
      link: "https://www.youtube.com/watch?v=50T6Ht7ITSM"
    },
    {
      name: "aakasha deepavu neenu",
      link: "https://www.youtube.com/watch?v=QbE2mLrK1LM"
    },
    {
      name: "mugulu nageye nee helu",
      link: "https://www.youtube.com/watch?v=qU97BOR2eDA"
    }
  ],
  Hindi: [
    {
      name: "aaj jane ki zid na karo ",
      link: "https://www.youtube.com/watch?v=wGwHQYtvNRw"
    },
    {
      name: "tu mile dil khile",
      link: "https://www.youtube.com/watch?v=6ZQVDkVEuio"
    },
    {
      name: "kehte hain khuda ne",
      link: "https://www.youtube.com/watch?v=QDKPdf86QtY"
    }
  ],
  English: [
    {
      name: "My Heart will go on ",
      link: "https://www.youtube.com/watch?v=3gK_2XdjOdY"
    },
    {
      name: "Ed Sheeran - Perfect",
      link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g"
    },
    {
      name: "Marshmello - Happier",
      link: "https://www.youtube.com/watch?v=m7Bc3pLyij0"
    }
  ]
};

export default function App() {
  const [selectLanguage, setLanguage] = useState("kannada");
  function languageClickHandler(language) {
    setLanguage(language);
  }
  return (
    <div className="App">
      <h1>
        Love for Music{" "}
        <span role="img" aria-label="none">
          ❤️
        </span>
      </h1>
      <p>checkout my favorite songs. Select a language to get started </p>
      <div>
        {Object.keys(languages).map((language) => (
          <button onClick={() => languageClickHandler(language)}>
            {language}
          </button>
        ))}
        <hr />
        <div>
          <ul>
            {languages[selectLanguage].map((language) => (
              <li key={language}>
                {""}
                <div>{language.name}</div>
                <div>
                  <a href={language.link} target="blank">
                    Listen to it here
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
