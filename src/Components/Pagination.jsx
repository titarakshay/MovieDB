
const Pagination = ({ nextPreviousPage, setPage, page }) => {
   
  const nextPage = (page) => {
    let pageCount = (page += 1);
    setPage(pageCount);
  };

  const previousPage = (page) => {
    let previousPageCount = (page -= 1);
    setPage(previousPageCount);
  };
  return (
    <div className=" p-4">
      {page === 1 ? (
        ""
      ) : (
        <button
          className="pagination-btn"
          onClick={() => previousPage(nextPreviousPage.page)}
        >{`⬅ ${nextPreviousPage.page - 1}  page`}</button>
      )}

      {page >= nextPreviousPage.total_pages ? (
        ""
      ) : (
        <button
          className="pagination-btn float-right"
          onClick={() => nextPage(nextPreviousPage.page)}
        >{`${nextPreviousPage.page + 1}  page `}</button>
      )}
    </div>
  );
};

export default Pagination;