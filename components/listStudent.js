import { ButtonGroup, Button } from "react-bootstrap";
import Link from "next/link";
const ListStudent = (props) => {
  const lis = props.listStudent.map((item, id) => {
    return (
      <tr key={id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td> {item.class}</td>
        <td> {item.sex}</td>
        <td> {item.DOB}</td>
        <td> {item.country}</td>

        <td>
          <ButtonGroup aria-label="Basic example">
            <Link href="/student/[id]" as={`/student/${item.id}`}>
              <Button variant="warning">Detail</Button>
            </Link>
            <Link href="/add" as="/add">
              <Button variant="secondary">Edit</Button>
            </Link>
            <Link href="/add" as="/add">
              <Button variant="danger">Delete</Button>
            </Link>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return <React.Fragment>{lis}</React.Fragment>;
};

export default ListStudent;
