export type Product = {
  id: string | number;
  image: string;
  title: string;
  price: number;
};

export type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
  search: string;
  currentPage: number;
  itemsPerPage: number;
  skip: number;
  limit: number;
};
