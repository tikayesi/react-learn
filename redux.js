const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    name: "Tika",
    age: 23
}

//reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_AGE":
            return{
                ...state,
                age: state.age + 1
            }
        case "CHANGE_NAME":
            return{
                ...state,
                name: action.newName
            }
            default: return state;
    }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribtion
store.subscribe(() => {
    console.log("Store change", store.getState());
})

//Dispatching action
store.dispatch(
    {
        type: "ADD_AGE"
    }
)
store.dispatch({ type: "CHANGE_NAME", newName : "Yesi"})
console.log(store.getState());
