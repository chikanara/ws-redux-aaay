import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../const";

const intialState = {
  tasks: [
    {
      id: 0,
      todo: "Learn React",
      isDone: true,
    },
    {
      id: 1,
      todo: "Learn Redux",
      isDone: true,
    },
    {
      id: 2,
      todo: "Learn DevOps",
      isDone: false, // inchallah
    },
  ],
};
/************sfc ******************/
const todoReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TASK:
      // payload = {id,task}
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, todo: payload.todo } : task
        //   task.id === payload.id ? { ...task, ...payload } : task
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
/*****************rxreducer ********************/
// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
