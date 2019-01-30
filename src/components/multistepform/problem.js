import React, { Component } from "react";
import ReactDOM from "react-dom";

const Location = [
  { id: 0, location: "one" },
  { id: 1, location: "two" },
  { id: 2, location: "three" }
];

class Test extends Component {
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
              <select name={`Location-${el.id}`} onChange={this.handleChange}> value={this.state.name}>
                <option value="1">One Star</option>
                <option value="2">Two Star</option>
                <option value="3">Three Star</option>
              </select>
            </li>
          ))}
        </ul>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);
