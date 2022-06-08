import React, { useState } from 'react';

export const ProductsContext = React.createContext({
	products: [],
	toggleFav: (id) => {},
});

export default function CtxProvider(props) {
	const [productList, setProductList] = useState([
		{
			id: 'p1',
			title: 'Red Scarf',
			description: 'A pretty red scarf.',
			isFavorite: false,
		},
		{
			id: 'p2',
			title: 'Blue T-Shirt',
			description: 'A pretty blue t-shirt.',
			isFavorite: false,
		},
		{
			id: 'p3',
			title: 'Green Trousers',
			description: 'A pair of lightly green trousers.',
			isFavorite: false,
		},
		{
			id: 'p4',
			title: 'Orange Hat',
			description: 'Street style! An orange hat.',
			isFavorite: false,
		},
	]);

	function toggleFavourite(productId) {
		setProductList((currentProdList) => {
			//find the card selected, get the id
			const prodIndex = currentProdList.findIndex((p) => p.id === productId);

			//swtich the fav list
			const newFavStatus = !currentProdList[prodIndex].isFavorite;
			const updatedProducts = [...currentProdList];
			updatedProducts[prodIndex] = {
				...currentProdList[prodIndex],
				isFavorite: newFavStatus,
			};

			return updatedProducts;
		});
	}

	return (
		<ProductsContext.Provider
			value={{ products: productList, toggleFav: toggleFavourite }}
		>
			{props.children}
		</ProductsContext.Provider>
	);
}
