import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [toDoChores, setToDoChores] = useState(["1", "2"]);
  const [doneChores, setDoneChores] = useState(["3", "4"]);
  const [theme, setTheme] = useState("light");
  const breakpoint = 400;

  function useLocalStorage() {
    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);
  }

  const useWindowSize = function () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);

      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, [breakpoint]);

    return isMobile;
  };
  const isMobile = useWindowSize();

  useLocalStorage();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        height: "100dvh",
      }}
      className="App"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const chore = new FormData(e.target).get("chore");

          setToDoChores((c) => [...c, chore]);
        }}
      >
        <input name="chore" type="text" placeholder="Wash a dog" />
        <input type="submit" value={"SUBMIT"} />
      </form>

      <article>
        <ul>
          {toDoChores.map((c) => (
            <li style={{ color: "lime" }} key={c}>
              <span>{c}</span>{" "}
              <button
                data-chore={c}
                onClick={(e) => {
                  const chore = e.target.dataset.chore;
                  setToDoChores((c) => c.filter((ch) => ch !== chore));
                  setDoneChores((c) => [...c, chore]);
                }}
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <ul>
          {doneChores.map((c) => (
            <li style={{ color: "red" }} key={c}>
              <span>{c}</span>
              <button
                data-chore={c}
                onClick={(e) => {
                  const chore = e.target.dataset.chore;
                  setDoneChores((c) => c.filter((ch) => ch !== chore));
                }}
              >
                Delete
              </button>
              <button
                data-chore={c}
                onClick={(e) => {
                  const chore = e.target.dataset.chore;
                  setToDoChores((c) => [...c, chore]);
                }}
              >
                To do
              </button>
            </li>
          ))}
        </ul>
      </article>
      <button
        onClick={() =>
          !isMobile && setTheme((t) => (t === "light" ? "dark" : "light"))
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
