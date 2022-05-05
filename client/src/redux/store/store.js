import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "../reducers/rootReducers";
import thunk from "redux-thunk";
import { initState } from "../init/initState";
export const store = createStore(
  rootReducers,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);
