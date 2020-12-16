import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export {StateContext};

const StateProvider = ({ reducer,
initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export {StateProvider};

const useStateValue = () => useContext(StateContext);

export {useStateValue};