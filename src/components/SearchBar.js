import "./SearchBar.css";
import { useState } from "react";
import getPath from "../get-path.js";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [path, setPath] = useState("");

  const prayers = {
    "let us pray": {
      "id": 1,
      "baller": {
        "prayer point one": "I do not want to be a mechanic",
        "prayer point two": "God abeg! I want to be a baller"
      },
      "enjoyment minister": {
        "prayer point one": "I just want to relax and be taken care off",
        "prayer point two": "I just want to travel to different countries"
      }
    }
  };
  
  const handleKeyDown = event => {
      if (event.key === 'Enter') {
        setPath(getPath(prayers, query)? 
                getPath(prayers, query).toString().replace(/,/g, '.'): 
                "Please use one of the suggestions above");
      }
    }

  return (
    <div className="search-bar">
      <span className="sr-only">Search</span>

      <span className="search-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    
        <input
          onKeyDown={handleKeyDown}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for paths..."
          type="text"
          id="search"
          required
        />
      
        <div className="path">
          {query.length > 0 ? path : ""}
        </div>

    </div>
  );
}
export {SearchBar}
