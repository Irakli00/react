import { Navigate, useParams } from "react-router";

function Fact() {
  const { id } = useParams();

  const facts = {
    1: "His parents were Drogo Baggins and Primula Brandybuck",
    2: "Frodo becomes the Ring-bearer of the One Ring",
  };

  if (!facts[id]) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <aside>{facts[id]}</aside>
    </div>
  );
}

export default Fact;
