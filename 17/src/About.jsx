import { Link, Outlet } from "react-router";

function About() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/about/1"}>See parents</Link>
        </li>
        <li>
          <Link to={"/about/2"}>See Job</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default About;
