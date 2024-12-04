// Create a Store (single point of state ) - reducer modify the state
// Reducer going to modify in immutable fashion
// const {createStore} = require('redux')
import {createStore} from 'redux';

const initialState = {
    courses: [ {
        "id": "2",
        "title": "NodeJS",
        "description": "NodeJS for back-end-app built on Google V8 Engine!",
        "votes": 23
      },
      {
        "id": "3",
        "title": "Angular",
        "description": "Front-end framework from Google!",
        "votes": 444
      },
      {
        "id": "4",
        "title": "NodeJS",
        "description": "NodeJS for back-end-app built on Google V8 Engine!",
        "votes": 234
      },
      {
        "id": "5",
        "title": "NodeJS",
        "description": "NodeJS for back-end-app built on Google V8 Engine!",
        "votes": 2
      },
      {
        "id": "6",
        "title": "NodeJS",
        "description": "NodeJS for back-end-app built on Google V8 Engine!",
        "votes": 123
      },
      {
        "id": "7",
        "title": "NodeJS",
        "description": "NodeJS for back-end-app built on Google V8 Engine!",
        "votes": 223
      }]
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_VOTE':
            return {
               ...state,
                courses: state.courses.map(course => 
                    course.id === action.payload.id? {...course, votes: course.votes + 1} : course)
            }
        case 'ADD_COURSE':
            return {
               ...state,
                courses: [...state.courses, action.payload]
            }
        case 'DELETE_COURSE':
            return {
               ...state,
                courses: state.courses.filter(course => course.id!== action.payload)
            }
        default:
            return state;
    }
}
const store = createStore(courseReducer)

// Action {type, payload} - dipatch


store.subscribe(() => {
    console.log('Course State:', store.getState().courses);
})

// Dispatch actions
// store.dispatch({type: 'INCREMENT_VOTE', payload: {id: '2'}})
store.dispatch({type: 'ADD_COURSE', payload: {id: '8', title: 'React', description: 'React for front-end app built on Facebook!', votes: 1}})
// store.dispatch({type: 'DELETE_COURSE', payload: '5'})


// Subscribe to store state