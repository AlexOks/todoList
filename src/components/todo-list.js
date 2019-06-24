import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {

    return(
        <ul>
            <li><ToDoListItem
            important
            label="Buy new car"/></li>
            <li><ToDoListItem label="Read english book"/></li>
    </ul>
    );
};

export default ToDoList;
