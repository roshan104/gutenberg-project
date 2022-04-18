import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const CategoryHeader = ({ category, searchChangeHandler, searchText }) => {
  const textChangeHandler = (e) => {
    e.preventDefault();
    searchChangeHandler(e.target.value);
  };

  return (
    <>
      <NavLink to="/">
        <p className="title">{ category }</p>
      </NavLink>
      <TextField onChange={textChangeHandler} value={searchText} className="textField" variant="outlined"></TextField>
    </>
  );
};

export default CategoryHeader;
