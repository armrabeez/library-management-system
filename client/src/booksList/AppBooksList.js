import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getBooks, deleteBook } from "../actions/bookActions";
import PropTypes from "prop-types";

class AppBooksList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  onDeleteClick = (id) => {
    this.props.deleteBook(id);
  };
  render() {
    const { books } = this.props.book;
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <Row>
                <Col>
                  <th></th>
                </Col>
                <Col md="4">
                  <th>Title</th>
                </Col>
                <Col md="2">
                  <th>Author</th>
                </Col>
                <Col md="3">
                  <th>Genre</th>
                </Col>
                <Col md="1">
                  <th>Published</th>
                </Col>
              </Row>
            </tr>
          </thead>
          <tbody>
            {books.map(({ _id, title, author, genre, published }) => (
              <tr>
                <Row>
                  <Col>
                    <td>
                      <ListGroup>
                        <TransitionGroup className="books-list">
                          <ListGroupItem>
                            <CSSTransition
                              key={_id}
                              timeout={1000}
                              classNames="fade"
                            >
                              <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={this.onDeleteClick.bind(this, _id)}
                              >
                                &times;
                              </Button>
                            </CSSTransition>
                          </ListGroupItem>
                        </TransitionGroup>
                      </ListGroup>
                    </td>
                  </Col>
                  <Col md="4">
                    <td>{title}</td>
                  </Col>
                  <Col md="2">
                    <td>{author}</td>
                  </Col>
                  <Col md="3">
                    <td>{genre}</td>
                  </Col>
                  <Col md="1">
                    <td>{published}</td>
                  </Col>
                </Row>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}

AppBooksList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

const mapStateToProbs = (state) => ({
  book: state.book,
});

export default connect(mapStateToProbs, { getBooks, deleteBook })(AppBooksList);
