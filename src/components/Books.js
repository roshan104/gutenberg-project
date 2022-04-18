import { Grid } from '@mui/material';
import Book from './Book';

const Books = ({ books }) => {
  return (
    <Grid container justifyContent="center" rowSpacing={35} columnSpacing={20} style={{padding: 50}}>
      {books.map((book) => <Book key={book.id} book={book} />)}
    </Grid>
  );
};

export default Books;
