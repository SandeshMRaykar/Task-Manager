import React, {useState} from "react";
import TaskList from "./TaskList";

const TASKS_STATUSES = ["Pending", "Completed"]

const TaskForm = (props) => {
  const [cardForm, showCardForm] = useState(false)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

const onChangeTitle = (e) => {
  setTitle(e.target.value)
}

const onChangeDescription = (e) => {
  setDescription(e.target.value)
}

const onChangeDueDate = (e) => {
  setDueDate(e.target.value)
}

const formToggler = () => {
  showCardForm(!cardForm)
}

const resetForm = () => {
  setTitle("")
  setDescription("")
  setDueDate("")
  showCardForm(false);

}
const onCreateTask = (e) => {
  e.preventDefault();
  props.onCreateTask({
    title,
    description,
    dueDate,
  });
  resetForm();
}


const onSortTask = () => {
 //e.preventDefault();
  props.onSortTask();
  console.log("Inside sorttask", props)
}

const renderTaskLists = () => {

const {tasks} = props;
return TASKS_STATUSES.map((status, id)=>{
  const statusTasks = tasks.filter((task) => task.status === status);
  return (
    <div className="col-md-3 card m-2 p-0" key={id}>
<TaskList 
  key={status}
  status={status}
  tasks={statusTasks}
  onStatusChange={props.onStatusChange}
  onSortTask={props.onSortTask}
  onRemoveTask={props.onRemoveTask}
  />
</div>
  )
})

}
  return (
    <div className="container border border-primary rounded my-5">
        <div className="jumbotron py-3">
            <div className="row ">
                <div className="col-md-2 ">
                   <button className="btn btn-danger m-3" onClick={formToggler}>+</button>
                </div>
                <div className="col-md-2 ">
                   <button className="btn btn-danger m-3" onClick={onSortTask()}>Sort</button>
                </div>
                <div className="col-md-10">
                 <h2 className="display-4 font-semibold text-center text-uppercase border bg-secondary text-white rounded ">Task Manager</h2>
                </div>
            </div>
          
            {/* Inputs Form */}
            {cardForm && (
            <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Task Title" onChange={onChangeTitle}/>
            </div>
            <div className="form-group">
              <textarea type="text" className="form-control  mt-3" placeholder="Task Description" onChange={onChangeDescription}></textarea>
            </div>
            <div className="form-group">
              <input type="date" className="form-control m-1" placeholder="Task Due Date" onChange={onChangeDueDate}/>
            </div>
            <button type ="submit" className="btn btn-success mt-3" >Submit</button>
            </form>)}
        </div>
        <div className="row d-flex justify-content-center position-relative"
          style={{background: "#e9ece"}}>
            {renderTaskLists()}
        </div>
    </div>
  );
};

export default TaskForm;
