import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initState } from "../init/initState";
import { rootReducer } from "../reducers/rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);
