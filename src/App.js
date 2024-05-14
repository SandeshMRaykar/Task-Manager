import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import TaskForm from './components/TaskForm';
import { connect } from "react-redux";
import { createTask, editTask, sortTask, removeTask} from "./actions";


function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id,{status}))
  }

  const onCreateTask = ({title, description}) => {
    props.dispatch(createTask({title, description}));
  };

  const onSortTask = () => {
    props.dispatch(sortTask());
  }

const onRemoveTask = (id) => {
  props.dispatch(removeTask(id))
}

  return (
    <>
    
   <TaskForm 
   tasks={props.tasks} 
   onStatusChange={onStatusChange}
   onCreateTask={onCreateTask}
   onSortTask={onSortTask}
   onRemoveTask={onRemoveTask}
   />
    
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}
export default connect(mapStateToProps)(App);
