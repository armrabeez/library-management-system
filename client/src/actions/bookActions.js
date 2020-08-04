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

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const setLoadingBooks = () => {
  return {
    type: LOADING_BOOKS,
  };
};
