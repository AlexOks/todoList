import React from 'react';
import ToDoListItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ( {todo, onDeleted, onToggleImportant, onToggleDone } ) => {
    const elements = todo.map((item)=> {
        const { id, ...itemProps} = item;
        return(
            <li  className = "list-group-item" key = {id}>
                <ToDoListItem
           {... itemProps}
           onToggleImportant = {() => onToggleImportant(id)}
           onToggleDone = {() => onToggleDone(id)}
           onDeleted = {() => onDeleted(id)}
           />
            </li>
        );

    });
    return(
        <ul className = "list-group todo-list">
        {elements}
    </ul>
    );
};

export default ToDoList;
