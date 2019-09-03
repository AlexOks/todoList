import React, {Component} from 'react';
import './add-item-form.css';




export default class AddItemForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
   this.setState({
     label: e.target.value
   })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: ' '
    })
  };

  render () {
  return (
        <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
          <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="What you need to do?" value={this.state.label}/>
        <button type="submit"
                  className="btn btn-success"
                 >Add Item</button>
        </form>
      );
  }
};
