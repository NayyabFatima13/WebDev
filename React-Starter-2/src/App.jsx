
import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";

function App() {
  // States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Create categories
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Loading state
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // Error state
  if (error) {
    return <h2>{error}</h2>;
  }

  // Empty API state
  if (products.length === 0) {
    return <h2>No products found.</h2>;
  }

  // Empty search/filter state
  if (filteredProducts.length === 0) {
    return <h2>No matching products found.</h2>;
  }

  // Main UI

  return (
    <div className="app">
      <h1>🛒 Product Gallery</h1>

      <div className="controls">

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Category */}
        <CategoryFilter
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Products */}
      <ProductGrid
        products={filteredProducts}
      />
    </div>
  );


}

export default App;