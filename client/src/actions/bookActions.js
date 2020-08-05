import axios from "axios";
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, LOADING_BOOKS } from "./types";

export const getBooks = () => (dispatch) => {
  dispatch(setLoadingBooks());
  axios.get("api/books").then((res) =>
    dispatch({
      type: GET_BOOKS,
      payload: res.data,
    })
  );
};

export const addBook = (book) => (dispatch) => {
  axios.post("api/books", book).then((res) =>
    dispatch({
      type: ADD_BOOK,
      payload: res.data,
    })
  );
};

export const deleteBook = (id) => (dispatch) => {
  axios.delete(`api/books/${id}`).then((res) =>
    dispatch({
      type: DELETE_BOOK,
      payload: id,
    })
  );
};

export const setLoadingBooks = () => {
  return {
    type: LOADING_BOOKS,
  };
};
