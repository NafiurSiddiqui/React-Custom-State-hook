import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import ProductsProvider from './context/products-context';

// const rootReducer = combineReducers({
// 	shop: productReducer,
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</Provider>,
// 	document.getElementById('root')
// );

//--------------------------------------------------------------------------------------------------------------stage 2 (applying context)

// ReactDOM.render(
// 	<ProductsProvider>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</ProductsProvider>,
// 	document.getElementById('root')
// );

//--------------------------------------------------------------------------------------------------------------stage 3 (Custom hook

import configureProductStore from './hooks-store/products-store';

configureProductStore();

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

/**
 * @configureProductStore -
 * default export hence we could name it anything we wanted
 * we do not have to wrap it around our component. Since, we already intiated the state when we called the Store file inisde Product-store.
 */
