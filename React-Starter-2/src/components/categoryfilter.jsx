function CategoryFilter({
  categories,
  category,
  setCategory,
}) {
  return (
    <select
      className="category-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="all">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;