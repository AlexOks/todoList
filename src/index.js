import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import ToDoList from './components/todo-list';
import SearchPanel from './components/search-panel';


const App = () => {
    const todoData = [
        {label:"Buy new car", important: true},
        {label:"Read english book", important: false},
        {label:"Create new app", important: true},
    ]
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ToDoList todo = {todoData}/>
        </div>
    );

};


ReactDOM.render(<App />, document.getElementById('root'));
