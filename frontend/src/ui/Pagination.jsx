function Pagination({ page, setPage, num, limit = 10 }) {
  const numPages = Math.ceil(num / limit);
  if (numPages <= 1) return null;
  const listNum =
    page <= 5 ? 0 : page > numPages - 5 ? numPages - 10 : page - 5;
  const pagesArr = Array.from(
    { length: Math.min(10, numPages) },
    (_, index) => index + listNum + 1
  );
  function handlePageChange(newPg) {
    setPage(newPg);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex font-semibold p-8 items-center">
      <label>
        Page {page} of {numPages}
      </label>
      <div className="flex justify-between gap-12 mx-auto">
        {page !== 1 && (
          <button
            className="text-indigo-800"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}
        <ul className="flex gap-6">
          {pagesArr.map((pg) => (
            <li
              className={`${
                pg === page
                  ? "bg-indigo-900 w-6 h-6 text-center text-white rounded-full"
                  : " cursor-pointer"
              }`}
              onClick={() => handlePageChange(pg)}
              key={pg}
            >
              {pg}
            </li>
          ))}
        </ul>
        {page !== numPages && (
          <button
            className="text-indigo-800"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
