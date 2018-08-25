import React, { Component } from "react";

// This component is a "controlled" component.
export class Counter extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call
    }
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  render() {
    const { onDecrement, onIncrement, onDelete } = this.props;

    return (
      <div getBadgeClasses="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
