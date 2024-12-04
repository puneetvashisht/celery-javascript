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

export default courseReducer;