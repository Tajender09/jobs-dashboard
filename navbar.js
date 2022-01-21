import { Nav } from "react-bootstrap";
import "./navbar.css";

const Navbar = () => {
  return (
      <Nav>
        <Nav.Item>
          <Nav.Link className="text-dark active">Jobs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary">Teams</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-secondary">U19</Nav.Link>
        </Nav.Item>
      </Nav>
  );
};
export default Navbar;
