import { useDispatch } from "react-redux";
import { setSearch } from "../features/dashboard/slices/productDashboardSlice";
import "../styles/main.scss";

const SearchProduct = () => {
  const dispatch = useDispatch();

  function customDebounce<T extends unknown[]>(
    callback: (...args: T) => void,
    delay: number
  ): (...args: T) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: T) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  const handleSearch = (value: string) => {
    dispatch(setSearch(value));
  };

  const debouncedSearch = customDebounce(handleSearch, 1000);

  return (
    <div className="search-container">
      <label htmlFor="product-search" className="search-label">
        Search products by name
      </label>

      <input
        id="product-search"
        type="text"
        placeholder="Search product by name"
        className="search-bar"
        onChange={(e) => debouncedSearch(e.target.value)}
        aria-label="Search products by name"
        aria-describedby="search-description"
        autoComplete="off"
      />

      <span id="search-description" className="search-description">
        Type product name to filter products
      </span>
    </div>
  );
};

export default SearchProduct;
