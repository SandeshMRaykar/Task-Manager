import { CREATE_TASK, EDIT_TASK, SORT_TASK, REMOVE_TASK } from "../actions/types";
 const initialState= [
//     {
//         id: 1,
//         title: "Task 1",
//         description: "Task 1",
//         status: "Completed"
//     },
//  {
//    id: 2,
//        title: "Task 2",
//        description: "Task 2",
//        status: "Pending"
// },

]

 const tasks = (state = {tasks: initialState}, action)=>{
   // if(action.type === EDIT_TASK) {
   //    const {payload} = action;
   //    return {
   //       tasks: state.tasks.map((task) => {
   //          if(task.id === payload.id) {
   //             return Object.assign({}, task, payload.params)
   //          }
   //          return task;
   //       })
   //    }
   // }
   const {payload} = action;
switch(action.type) {
   case EDIT_TASK : {
      console.log("Inside edit task");
      return {
         tasks: state.tasks.map((task) => {
                     if(task.id === payload.id) {
                        return Object.assign({}, task, payload.params)
                     }
                     return task;
      })
   }
   }
   case CREATE_TASK : {
      
      return {
         tasks: state.tasks.concat(action.payload),
      };
   }
   case SORT_TASK : {
      
      return {
         tasks: state.tasks.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate)),
      };
   }
   case REMOVE_TASK : {

      return {
         tasks: state.tasks.filter(task => task.id !== action.id),
      }
   }
default:
    return state;
 }
}

export default tasks;