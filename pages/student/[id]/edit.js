import { Form, Button, Jumbotron } from "react-bootstrap";

const Edit = () => {
  return (
    <Form>
      <Jumbotron fluid>
        <h1>Edit</h1>
      </Jumbotron>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Họ và Tên</Form.Label>
        <Form.Control type="email" placeholder="Nhập tên" />
      </Form.Group>
      <Form>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Ảnh đại diện" />
        </Form.Group>
      </Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Lớp</Form.Label>
        <Form.Control type="password" placeholder="Nhập lớp" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Giới tính</Form.Label>
        <Form.Control as="select">
          <option>Nam</option>
          <option>Nữ</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="password" placeholder="Nhập ngày tháng năm sinh" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Quê quán</Form.Label>
        <Form.Control type="password" placeholder="Nhập quê" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Edit
      </Button>
    </Form>
  );
};

export default Edit;
