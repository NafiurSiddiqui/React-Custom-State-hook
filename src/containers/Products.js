import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
// import { ProductsContext } from '../context/products-context';

import './Products.css';

// const Products = props => {
//   const productList = useSelector(state => state.shop.products);
//   return (
//     <ul className="products-list">
//       {productList.map(prod => (
//         <ProductItem
//           key={prod.id}
//           id={prod.id}
//           title={prod.title}
//           description={prod.description}
//           isFav={prod.isFavorite}
//         />
//       ))}
//     </ul>
//   );
// };

//--------------------------------------------------------------------------------------------------------------stage 2

// const Products = (props) => {
// 	// const productList = useSelector((state) => state.shop.products);

// 	const productList = useContext(ProductsContext).products;

// 	return (
// 		<ul className="products-list">
// 			{productList.map((prod) => (
// 				<ProductItem
// 					key={prod.id}
// 					id={prod.id}
// 					title={prod.title}
// 					description={prod.description}
// 					isFav={prod.isFavorite}
// 				/>
// 			))}
// 		</ul>
// 	);
// };

// export default Products;

//--------------------------------------------------------------------------------------------------------------stage 3

const Products = (props) => {
	const state = useStore()[0];

	return (
		<ul className="products-list">
			{state.products.map((prod) => (
				<ProductItem
					key={prod.id}
					id={prod.id}
					title={prod.title}
					description={prod.description}
					isFav={prod.isFavorite}
				/>
			))}
		</ul>
	);
};

export default Products;

/**
 * @memo - to make sure they don't render if there props did not change,  for our case, only the favourite item should rerender not the otehrs. But that alone does not prevent all the item from re-rendering even though they did not change, since, we are using our custom hook here.
 * but when the favorite is clicked, the fav item will be rendered anyway since we are going through memo and set our useStore to false.
 * @useStore_FALSE : Now we do not register this component as global listener, therefore, it should not rebuild when our store changes.
 */
