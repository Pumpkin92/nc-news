import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>NC News</h1>
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
    </header>
  );
}
