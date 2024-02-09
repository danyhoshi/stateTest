// import { useState } from "react";
// import { sculptureList } from "./data.js";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     if (index < 11) {
//       setIndex(index + 1);
//     } else {
//       return;
//     }
//   }

//   function handleNextClickAn() {
//     if (index > 0) {
//       setIndex(index - 1);
//     } else {
//       return;
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClickAn}>Anterior</button>
//       <button onClick={handleNextClick}>Siguiente</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         por {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} de {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Ocultar" : "Mostrar"} detalles
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   );
// }
import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Queso",
    count: 5,
  },
  {
    id: 2,
    name: "Espaguetis",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  }

  function handleDecreaseClick(productId) {
    if (products.find((product) => product.id === productId).count > 1) {
      setProducts(
        products.map((product) =>
          product.id === productId
            ? { ...product, count: product.count - 1 }
            : product
        )
      );
    } else {
      setProducts(
        products.filter((product) => product.id != productId && product)
      );
    }
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
