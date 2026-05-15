import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/productDashboardSlice";
import "../styles/main.scss";

const SearchProduct = () => {
  const dispatch = useDispatch();

  function customDebounce(callback: Function, delay: number) {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  const handleSearch = (value: string) => {
    dispatch(setSearch(value));
  };

  const debouncedSearch = useMemo(() => customDebounce(handleSearch, 1000), []);

  return (
    <div>
      <label htmlFor="product-search">Search products by name</label>

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

      <span id="search-description">Type product name to filter products</span>
    </div>
  );
};

export default SearchProduct;
