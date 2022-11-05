import { useNavigate } from "react-router-dom";

function MyPagination(props) {
  const navigate = useNavigate();

  const currentPage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  let items = [];
  for (let number = 1; number <= props.pagesCount; number++) {
    items.push(
      <button
        type="button"
        key={number}
        onClick={() => {
          return navigate(`/dashboard/orders/${number}`);
        }}
        className={`btn border rounded-0 ${
          +currentPage === +number ? "text-light bg-dark" : ""
        }`}
      >
        {number}
      </button>
    );
  }

  return (
    <div className="my-5 d-flex flex-row justify-content-center">
      <div className="d-flex flex-row mx-auto">{items}</div>
    </div>
  );
}

export default MyPagination;
