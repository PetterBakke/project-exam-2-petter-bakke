import { Link } from "react-router-dom";

function DashBoardMenu() {
  return (
    <nav className="dashboard">
      Sections: <Link to="/dashboard/posts">Posts</Link>
    </nav>
  );
}

export default DashBoardMenu;