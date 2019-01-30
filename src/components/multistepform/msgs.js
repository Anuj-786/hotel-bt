import React, { Component } from "react";


const Location = [
  { id: 0, location: "one" },
  { id: 1, location: "two" },
  { id: 2, location: "three" }
];

export default class Test extends Component {
  state = {
    name: []
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <ul>
          {Location.map(el => (
            <li>
              <span>Rate location {el.location}</span>
              <select name={`${el.location}`} onChange={this.handleChange}>
                <option value="1">One Star</option>
                <option value="2">Two Star</option>
                <option value="3">Three Star</option>
              </select>
              
            </li>
          ))}
        </ul>
        <p>{this.state.name}</p>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}


