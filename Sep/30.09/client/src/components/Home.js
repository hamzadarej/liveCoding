import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <div>
      <Link to={process.env.PUBLIC_URL + "/register"}>
          <span>REGISTER</span>
        </Link> Or  <Link to={process.env.PUBLIC_URL + "/login"}>
          <span>LOGIN</span>
        </Link>
      <h3>Welcome :) </h3>
     
    </div>
  );
}
