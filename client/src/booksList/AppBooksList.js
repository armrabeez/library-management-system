import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
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
        <ListGroup>
          <TransitionGroup className="books-list">
            {books.map(({ id, title, author, published, genre }) => (
              <ListGroupItem>
                <Button
                  className="rmv-button"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, id)}
                >
                  &times;
                </Button>
                {title}
              </ListGroupItem>
            ))}
          </TransitionGroup>
        </ListGroup>
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

export default connect(mapStateToProbs, { getBooks })(AppBooksList);
