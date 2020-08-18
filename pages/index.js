import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import { getAll } from "../server/student.controller";
import ListStudent from "../components/listStudent";
import Link from "next/link";
const Home = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <Link href="/add" as="/add">
            <Button variant="success">Add</Button>
          </Link>
        </tr>
        <tr>
          <th>#</th>
          <th>Tên</th>
          <th>Lớp</th>
          <th>Giới tính</th>
          <th>Năm sinh</th>
          <th>Quốc tịch</th>
        </tr>
      </thead>
      <tbody>
        <ListStudent listStudent={props.listStudent} />
      </tbody>
    </Table>
  );
};

Home.getInitialProps = async () => {
  const listStudent = await getAll();
  return { listStudent };
};

export default Home;
