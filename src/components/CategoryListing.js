import { useReducer, useEffect } from "react";
import CategoryHeader from "./CategoryHeader";
import Books from './Books';
import { throttle } from "../helper";


const reducer = (state, action) => {
  if ('SEARCH_CHANGE' === action.type) {
    return { ...state, searchText: action.value };
  }

  if ('BOOKS_RESULT_CHANGE' === action.type) {
    return { ...state, books: action.value };
  }

  if ('NEXT_URL_CHANGE' === action.type) {
    return { ...state, nextUrl: action.value };
  }

  if ('BOOKS_RESULT_UPDATE' === action.type && state.nextUrl !== action.next) {
    return { ...state, books: [...state.books, ...action.value] };
  }

  return state;
};

const initialState = {
  searchText: '',
  books: [],
  nextUrl: ''
};

const CategoryListing = ({ category }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { searchText } = state;

  useEffect(() => {
    fetch(`http://skunkworks.ignitesol.com:8000/books?mime_type=image&topic=${category}&search=${searchText}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((books) => {
        dispatch({ type: 'BOOKS_RESULT_CHANGE', value: books.results, nextUrl: books.next });
        dispatch({ type: 'NEXT_URL_CHANGE', value: books.next });
      })
  }, [category, searchText]);

  const handleSearchChange = (value) => {
    dispatch({ type: 'SEARCH_CHANGE', value});
  };

  window.addEventListener('scroll', throttle(() => {
    const fetchUrl = state.nextUrl;
    if ((window.innerHeight + window.scrollY + 200) >= document.body.offsetHeight && fetchUrl) {
      fetch(fetchUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();  
        }
      })
      .then((books) => {
        dispatch({ type: 'BOOKS_RESULT_UPDATE', value: books.results, next: books.next});
        dispatch({ type: 'NEXT_URL_CHANGE', value: books.next });
      })
    }
  }, 500));

  return (
    <>
      <CategoryHeader searchChangeHandler={handleSearchChange} searchText={state.searchText} category={category} />
      <Books books={state.books} />
    </>
  );
};

export default CategoryListing;
