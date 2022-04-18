import { ButtonGroup } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from "react-router-dom";

import Category from "./Category";
import Title from "./Title";

const bookCategories = ['fiction', 'drama', 'humar', 'politics', 'philosophy', 'history', 'adventure'];

const Categories = () => {
  return (
    <>
      <Title />
      <ButtonGroup orientation="vertical" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
        {bookCategories.map(bookCategory => {
          return (
            <NavLink to={`/${bookCategory}`} key={bookCategory}>
              <Category innerContent={bookCategory} />
            </NavLink>
          );
        })}
      </ButtonGroup>
    </>
  );
};

export default Categories;