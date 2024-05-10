export default function SortArticles({
  setOrderQuery,
  orderQuery,
  setSortBy,
  sortBy,
  orderQueryBtn,
  setOrderQueryBtn,
}) {
  const sortQueries = ["created_at", "author", "comment_count", "votes"];

  const handleClick = () => {
    if (orderQuery === "ASC") {
      setOrderQuery("DESC");
      setOrderQueryBtn("Descending ↓");
    }
    if (orderQuery === "DESC") {
      setOrderQuery("ASC");
      setOrderQueryBtn("Ascending ↑");
    }
  };

  return (
    <section className="sort-section">
      <div className="sort-div">
        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
        >
          <option value="created_at">Sort Articles By</option>
          {sortQueries.map((sort, index) => {
            if (sort === "created_at") {
              return (
                <option value={sort} key={index}>
                  Date created
                </option>
              );
            } else if (sort === "comment_count") {
              return (
                <option value={sort} key={index}>
                  Comments
                </option>
              );
            } else {
              return (
                <option value={sort} key={index}>
                  {sort}
                </option>
              );
            }
          })}
        </select>
        <button className="order-btn" onClick={handleClick} value={orderQuery}>
          {orderQueryBtn}
        </button>
      </div>
    </section>
  );
}
