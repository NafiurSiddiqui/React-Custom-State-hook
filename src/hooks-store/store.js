import { useEffect, useState } from 'react';

let globalState = {};
//To listen to changes in the global state
let listeners = [];
//actions we can dispatch
let actions = {};

export function useStore(shouldListen = true) {
	//get global state
	const setState = useState(globalState)[1];
	//we used second index, since we are not interested in the first index of previousState.

	const dispatch = (actionIdentifier, payload) => {
		//key that matches our actionId here
		//and the value is a function which we define
		//actions will return a function(reducer) which we call here by passing global state here.
		//productID will be the payload here
		const newState = actions[actionIdentifier](globalState, payload);

		//return new global state with old and new data

		globalState = { ...globalState, ...newState };

		//Register this updates to the listeners

		for (const listener of listeners) {
			listener(globalState);
		}
	};

	// new listener
	useEffect(() => {
		//if componnet mounts & should listen is true
		if (shouldListen) {
			listeners.push(setState);
		}
		//if unmounts
		return () => {
			if (shouldListen) {
				listeners = listeners.filter((li) => li !== setState);
			}
		};
	}, [setState, shouldListen]);
	//this dependancy is added because esList could not pick since we did not destrcture the useState here.

	//return the two values

	return [globalState, dispatch];
}

//There is no way to update the actions, we can call them but can not update them. Therefore we export another function that take care of them.

export function initStore(userActions, initialState) {
	//arg- initial state is something if we need to init the state which we usually do. Like - product state.
	if (initialState) {
		globalState = { ...globalState, ...initialState };
		//defining both the newUSer state and old state.
	}

	actions = { ...actions, ...userActions };
}

/**
 * @useStore -
 * This hook will be used by any component, that calls it.
 * This hook will register the global object to the listerners, if the component mounts
 * if the componoent unmount, listener will be removed.
 * @shouldListen -
 * is used to prevent prduct item from rendering the number of item times.
 * we can use that to decide whether or not we should register the componet or not
 */

/**
 * @useEffect - if the component mounts, the first function wil be called, if unmounts the clearn up function will be called.
 */
