import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addBook } from "../actions/bookActions";

class AddBookModal extends Component {
  state = {
    modal: false,
    title: "",
    author: "",
    year: "",
    genre: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = () => {};

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Book
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Adding to Book-List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add a Title"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="author">Author</Label>
                <Input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Add an Author"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="year">Published Year</Label>
                <Input
                  type="text"
                  name="year"
                  id="year"
                  placeholder="Add a Published Year"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="genre">Genre</Label>
                <Input
                  type="text"
                  name="genre"
                  id="genre"
                  placeholder="Add a Genre"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Book
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps, { addBook })(AddBookModal);
