import { Nav } from "react-bootstrap";

const Navs = () => {
  return (
    <Nav activeKey="/home" className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/home">Add</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navs;
