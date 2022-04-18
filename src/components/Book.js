import { Paper, Grid } from '@mui/material';
import BookItem from './BookItem';

const Book = ({ book }) => {
  return (
    <>
      <Grid item>
        <Paper style={{ height:200, width: 150,}}><BookItem book={book} /></Paper>
      </Grid>
    </>
  );
};

export default Book;
