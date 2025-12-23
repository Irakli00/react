import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: ${(props) =>
    props.theme === "dark" ? "#1a1a1a" : "#f5f5f5"};
  color: ${(props) => (props.theme === "dark" ? "#f5f5f5" : "#1a1a1a")};
  transition: all 0.3s ease;
`;
const ChoreSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 2px solid ${(props) => (props.theme === "dark" ? "#444" : "#ddd")};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${(props) => (props.theme === "dark" ? "#2a2a2a" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "#f5f5f5" : "#1a1a1a")};

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Section = styled.div`
  max-width: 600px;
  background-color: white;
  padding: 5px 10px;
  border-radius: 7px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: normal;
  border-bottom: 1px solid red;
  padding-bottom: 5px;
`;
const ToDoTitle = styled(SectionTitle)`
  border-bottom: 2px solid brown;
`;
const InProgressTitle = styled(SectionTitle)`
  border-bottom: 2px solid yellow;
`;
const DoneTitle = styled(SectionTitle)`
  border-bottom: 2px solid green;
`;

const ChoreList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const ChoreItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.$borderColor};
  padding: 8px;
  border-left: 10px solid ${(props) => props.$leftBorderColor};
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#2a2a2aff" : "#fff"};
`;

const ChoreText = styled.span`
  flex: 1;
`;

const generateColor = () => {
  const r = Math.floor(Math.random() * 190);
  const g = Math.floor(Math.random() * 145);
  const b = Math.floor(Math.random() * 200);
  return `rgba(${r}, ${g}, ${b}, 1)`;
};

function App() {
  const [toDoChores, setToDoChores] = useState([
    "Wash dishes",
    "Take out trash",
  ]);
  const [inProgressChores, setInProgressChores] = useState([
    "Do somethnig",
    "Do something else",
  ]);
  const [doneChores, setDoneChores] = useState([
    "Vacuum living room",
    "Do laundry",
  ]);
  const [theme, setTheme] = useState("light");
  const breakpoint = 400;

  const useWindowSize = function () {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    return isMobile;
  };

  const isMobile = useWindowSize();

  return (
    <AppContainer theme={theme}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const chore = new FormData(e.target).get("chore");
          if (chore && chore.trim()) {
            setToDoChores((c) => [...c, chore]);
            e.target.reset();
          }
        }}
      >
        <Input
          theme={theme}
          type="text"
          name="chore"
          placeholder="Enter a new chore..."
          required
        />
        <Button btnType={"submit"}>Add</Button>
      </Form>

      <ChoreSectionContainer>
        <Section>
          <ToDoTitle>To Do {toDoChores.length}</ToDoTitle>
          <ChoreList>
            {toDoChores.map((c, index) => {
              const borderColor = generateColor();
              const leftBorderColor = generateColor();
              return (
                <ChoreItem
                  key={index}
                  theme={theme}
                  $borderColor={borderColor}
                  $leftBorderColor={leftBorderColor}
                >
                  <ChoreText>{c}</ChoreText>
                  <Button
                    btnType={"inProgress"}
                    data-chore={c}
                    onClick={(e) => {
                      const chore = e.target.dataset.chore;
                      setToDoChores((c) => c.filter((ch) => ch !== chore));
                      setDoneChores((c) => [...c, chore]);
                    }}
                  >
                    In progress
                  </Button>
                </ChoreItem>
              );
            })}
          </ChoreList>
        </Section>
        <Section>
          <InProgressTitle>
            In progress {inProgressChores.length}
          </InProgressTitle>
          <ChoreList>
            {doneChores.map((c, index) => {
              const borderColor = generateColor();
              const leftBorderColor = generateColor();
              return (
                <ChoreItem
                  key={index}
                  theme={theme}
                  $borderColor={borderColor}
                  $leftBorderColor={leftBorderColor}
                >
                  <ChoreText>{c}</ChoreText>
                  <Button
                    btnType={"toDo"}
                    data-chore={c}
                    onClick={(e) => {
                      const chore = e.target.dataset.chore;
                      setDoneChores((c) => c.filter((ch) => ch !== chore));
                    }}
                  >
                    To do
                  </Button>
                  <Button
                    btnType={"inProgress"}
                    data-chore={c}
                    onClick={(e) => {
                      const chore = e.target.dataset.chore;
                      setDoneChores((c) => c.filter((ch) => ch !== chore));
                      setToDoChores((c) => [...c, chore]);
                    }}
                  >
                    Done
                  </Button>
                </ChoreItem>
              );
            })}
          </ChoreList>
        </Section>
        <Section>
          <DoneTitle>Done {doneChores.length}</DoneTitle>
          <ChoreList>
            {doneChores.map((c, index) => {
              const borderColor = generateColor();
              const leftBorderColor = generateColor();
              return (
                <ChoreItem
                  key={index}
                  theme={theme}
                  $borderColor={borderColor}
                  $leftBorderColor={leftBorderColor}
                >
                  <ChoreText>{c}</ChoreText>
                  <Button
                    btnType={"delete"}
                    data-chore={c}
                    onClick={(e) => {
                      const chore = e.target.dataset.chore;
                      setDoneChores((c) => c.filter((ch) => ch !== chore));
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    btnType={"todo"}
                    data-chore={c}
                    onClick={(e) => {
                      const chore = e.target.dataset.chore;
                      setDoneChores((c) => c.filter((ch) => ch !== chore));
                      setToDoChores((c) => [...c, chore]);
                    }}
                  >
                    To Do
                  </Button>
                </ChoreItem>
              );
            })}
          </ChoreList>
        </Section>
      </ChoreSectionContainer>

      {!isMobile && (
        <Button
          btnType={"theme"}
          theme={theme}
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          Toggle Theme
        </Button>
      )}
    </AppContainer>
  );
}

export default App;
