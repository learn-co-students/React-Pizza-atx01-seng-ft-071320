import React, { Component } from "react"

class PizzaForm extends Component {
  state = {
    topping: '',
    size: '',
    vegetarian: null
  }

///// this is unfinished, no fetch POST or radio button functionality /////
  render() {
    let pizza = this.props.pizza
    return (
      <div className="form-row">
        <div className="col-5">
          <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={pizza.topping} />
        </div>
        <div className="col">
          <select value={null} name="size" className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={null} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

    )
  }
}

export default PizzaForm
