import styled from "styled-components";

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonStyle = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DoneButton = styled(ActionButton)`
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #da190b;
  }
`;

const TodoButton = styled(ActionButton)`
  background-color: #2196f3;
  color: white;

  &:hover {
    background-color: #0b7dda;
  }
`;

const ThemeButton = styled(ButtonStyle)`
  display: block;
  margin: 2rem auto 0;
  background-color: ${(props) => (props.theme === "dark" ? "#666" : "#333")};

  &:hover {
    background-color: ${(props) => (props.theme === "dark" ? "#555" : "#222")};
  }
`;

function Button({ btnType, children, ...props }) {
  const lookUp = {
    submit: (
      <ButtonStyle type="submit" {...props}>
        {children}
      </ButtonStyle>
    ),
    done: (
      <DoneButton type="button" {...props}>
        {children}
      </DoneButton>
    ),
    delete: (
      <DeleteButton type="button" {...props}>
        {children}
      </DeleteButton>
    ),
    toDo: (
      <TodoButton type="button" {...props}>
        {children}
      </TodoButton>
    ),
    inProgress: (
      <TodoButton type="button" {...props}>
        {children}
      </TodoButton>
    ),
    theme: (
      <ThemeButton type="button" {...props}>
        {children}
      </ThemeButton>
    ),
  };

  console.log(lookUp[btnType]);
  return lookUp[btnType];
}

export default Button;
