const BookItem = ({ book }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    const formats = Object.values(book.formats);
    const htmlFormat = formats.filter(format => format.includes('.htm'));
    if (htmlFormat.length) {
      window.location = htmlFormat[0];
    }
  };

  return (
    <>
      <img src={book.formats['image/jpeg']} alt={book.title} onClick={clickHandler} />
      <p>{book.title}</p>
      <p>{book.authors?.[0]?.name}</p>
    </>
  );
};

export default BookItem;
