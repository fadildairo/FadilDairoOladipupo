import "./App.css";
import SearchBar from "./SearchBar.js";

export default function App() {
  return (
    <>
      <div className="text">
        <p>For the ❤ of dark mode</p>
        <h1>
          Type a suggested prayer
          <span role="img" aria-label="Prayer hand emoji">
            🤲
          </span>{" "}
          below and get path to achieve it
          <span role="img" aria-label="Winking eye emoji">
            😉
          </span>
        </h1>
        <div className="suggested-prayers">
          <p>I do not want to be a mechanic</p>
          <p>God abeg! I want to be a baller</p>
          <p>I just want to relax and be taken care off</p>
          <p>I just want to travel to different countries</p>
        </div>
      </div>
      <SearchBar />
    </>
  );
}
