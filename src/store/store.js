import { createStore } from "redux";
// import defaultReducer from '../reducer/defaultReducer.js'
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import thunk from "redux-thunk";
import  addContentReducer from '../reducers/addContentReducer';
const rootReducer = combineReducers({
    addContentReducer,
    toastr: toastrReducer,
  });
  const composeEnhancers = composeWithDevTools({
    serialize: true
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  export default store;