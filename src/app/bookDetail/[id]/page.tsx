import BookDetailView from "./../../views/BookDetails";

const BookDetail = (props: any) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <BookDetailView {...props} />
    </>
  );
};

export default BookDetail;
