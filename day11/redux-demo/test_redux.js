// Redux Code .. No React Code
// State management
const {createStore} = require('redux')

const employees = [
    {id:34, name:"Ravi", salary: 344334.34},
    {id:3, name:"Priya", salary: 44444.34},
] 

// 0. Reducer to modify the state in an immutable fashion 
function employeeReducer(state = { employees }, action){
    console.log(action);
    // always immutables (don't modify the state directly)
    switch (action.type) {
        case 'add':
          return [...employees, action.payload]
        case 'delete':
            return employees.filter(e => e.id!=action.payload.id)
        case 'fetch':
          return employees;
        default:
          return state
      }
}

// 1. Create a store contains reducers
let store = createStore(employeeReducer)

store.subscribe(()=> console.log(store.getState()));

// 2. Fire Action
// store.dispatch({ type: 'fetch' })
// store.dispatch({type: 'add', payload: {id: 1, name:"Test", salary: 34344} });
store.dispatch({type:'delete', payload: {id:34}})