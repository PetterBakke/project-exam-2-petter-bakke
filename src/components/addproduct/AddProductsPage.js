import { Link } from "react-router-dom";
import Heading from "../heading/Heading";
import Dashboard from "../dashboard/Dashboard";

function AddProductsPage() {
  return (
    <Dashboard>
      <Heading title="Add hotel"/>
      <p>
        <Link to="/dashboard/posts/add">Add Hotel</Link>
      </p>
    </Dashboard>
  );
}

export default AddProductsPage;