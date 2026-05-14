import { useDispatch } from "react-redux";
import { setSearch } from "../slices/productDashboardSlice";
import "../styles/main.scss";

const SearchProduct = () => {
  const dispatch = useDispatch();

  function customDebounce(callback: Function, delay: number) {
    let timer: NodeJS.Timeout;
    return function (...args: any) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const debouncedSearch = customDebounce(handleSearch, 1000);

  return (
    <input
      type="text"
      placeholder="Search product by name"
      className="search-bar"
      onChange={debouncedSearch}
    />
  );
};

export default SearchProduct;
