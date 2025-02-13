import { useState, useEffect } from "react";
import axios from "axios";


export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=194")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "name-asc") return a.title.localeCompare(b.title);
    if (sortType === "name-desc") return b.title.localeCompare(a.title);
    if (sortType === "price-asc") return a.price - b.price;
    if (sortType === "price-desc") return b.price - a.price;
    if (sortType === "rating-asc") return a.rating - b.rating;
    if (sortType === "rating-desc") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <div className="search-bar">
      <input 
      className="search-input"
        type="text"
        placeholder="Mahsulot qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="">Saralash</option>
      
        <option value="price-asc">Narx  : (Eng arzon)</option>
        <option value="price-desc">Narx : (Eng qimmat)</option>
        <option value="name-asc">Nomi:(A-Z)</option>
        <option value="name-desc">Nomi:(Z-A)</option>
        <option value="rating-asc">Reyting (O'sish)</option>
        <option value="rating-desc">Reyting (Kamayish)</option>
      </select>
      </div>

      <ul className="product">
        {sortedProducts.map((product) => (
          <li className="product-item"  key={product.id}>
            <div className="product-image">
            <img src={product.thumbnail} alt={product.title} width="150" />
            </div>
            <div className="product-info">
            <h3>{product.title}</h3>
            <p><span className="price">Narx:</span> ${product.price}</p> 
            <p><span className="price">Reyting:</span> ⭐{product.rating}</p>
            <p><span className="price">Brend:</span> {product.brand}</p>
            <p><span className="price">Kategoriya:</span> {product.category}</p>
            <p><span className="price">Tavsif:</span> {product.description}</p>
            </div>
            <button className="buy">Savatga qo'shish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



