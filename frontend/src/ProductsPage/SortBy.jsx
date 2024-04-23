function SortBy({ sortBy, setSortBy }) {
  return (
    <ul className="flex pt-2 justify-start gap-8">
      <li className=" font-bold">Sort by</li>
      <li>
        <button
          className={`${
            sortBy === "relevance" &&
            "text-indigo-900 underline underline-offset-8"
          }`}
          onClick={(e) =>
            setSortBy(e.target.innerText.toLowerCase().replace(/ /g, "-"))
          }
        >
          Relevance
        </button>
      </li>
      <li>
        <button
          className={`${
            sortBy === "popularity" &&
            "text-indigo-900 underline underline-offset-8"
          }`}
          onClick={(e) =>
            setSortBy(e.target.innerText.toLowerCase().replace(/ /g, "-"))
          }
        >
          Popularity
        </button>
      </li>
      <li>
        <button
          className={`${
            sortBy === "price--low-to-high" &&
            "text-indigo-900 underline underline-offset-8"
          }`}
          onClick={(e) =>
            setSortBy(e.target.innerText.toLowerCase().replace(/ /g, "-"))
          }
        >
          Price--Low to High
        </button>
      </li>
      <li>
        <button
          className={`${
            sortBy === "price--high-to-low" &&
            "text-indigo-900 underline underline-offset-8"
          }`}
          onClick={(e) =>
            setSortBy(e.target.innerText.toLowerCase().replace(/ /g, "-"))
          }
        >
          Price--High to Low
        </button>
      </li>
      <li>
        <button
          className={`${
            sortBy === "newest-first" &&
            "text-indigo-900 underline underline-offset-8"
          }`}
          onClick={(e) =>
            setSortBy(e.target.innerText.toLowerCase().replace(/ /g, "-"))
          }
        >
          Newest First
        </button>
      </li>
    </ul>
  );
}

export default SortBy;
