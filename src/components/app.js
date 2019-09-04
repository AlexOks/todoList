import React, {Component} from 'react';
import AppHeader from './app-header';
import ToDoList from './todo-list';
import SearchPanel from './search-panel';
import ItemStatusFilter from './item-status-filter';
import AddItemForm from './add-item-form';
import './app.css';

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createNewItem('Buy new car'),
            this.createNewItem('Read english book'),
            this.createNewItem('Create new app'),
        ],
        term: '',
        filter: 'all' //active, all or done
    }

    createNewItem (label) {
        return{
            label, done: false, important: false, id: this.maxId++
        }
    }

    deleteItem = (id) => {
       this.setState(({ todoData }) =>{
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
        return {
            todoData: newArray
        }
       })
    };

    addItem = (text) => {
      const newItem = this.createNewItem(text);

      this.setState(({todoData})=>{
          const newArr = [
              ...todoData,
              newItem
          ];
          return{
              todoData: newArr
          };
      })

    };

    toggleProperty (arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
        ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)
    ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
        return {
            todoData: this.toggleProperty(todoData, id, 'important')
        };
    });
    };
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })

  };
  search (items, term) {
      if (term.length === 0){
          return items;
      }
      return items.filter((item) => {
          return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      })
  }
  onSearchChange = (term) => {
      this.setState({term});
  }

  filter (items, filter){
      switch (filter) {
          case 'all':
              return items;
        case 'active':
            return items.filter((item)=> !item.done);
        case 'done':
            return items.filter((item)=> item.done);
            default:
            return items;
      }
  }
  onFilterChange = (filter) => {
    this.setState({filter});
};
     render () {
         const {todoData, term, filter} = this.state;
         const visibleItems = this.filter(this.search(todoData, term), filter);
         const doneCounter = todoData.filter((el)=> el.done).length;
         const todoCounter = todoData.length - doneCounter;

         return (
            <div className="todo-app">
                <AppHeader toDo={todoCounter} done={doneCounter } />
          <div className="top-panel d-flex">
            <SearchPanel
            onSearchChange={this.onSearchChange}/>
            <ItemStatusFilter filter= {filter}
            onFilterChange = {this.onFilterChange}/>
          </div>
                <ToDoList todo = {visibleItems}
                onDeleted= {this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}/>
                <AddItemForm onAdded = {this.addItem}/>
            </div>
        );

        }


    };
