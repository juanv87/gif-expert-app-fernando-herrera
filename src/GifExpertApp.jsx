import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        categories={categories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </>
  );
};
