import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Learn React", "Learn JavaScript", "Learn CSS", "Learn HTML"]);

    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }   

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }


    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); 
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }


    return (
        <div className="todo-list-container">
            <h1>To-Do List</h1>

            <div>   
                <input
                type="text"
                value={newTask}
                placeholder="Add a new task"
                onChange={handleInputChange}/>

                <button className="add-task-button" onClick={addTask}>Add Task</button>
            </div>
            <div className="task-list-container">
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className="task-text">{task}</span>
                            <button className="delete-task-button" onClick={() => deleteTask(index)}>&#10006;</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>&#9757;</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>&#128071;</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList