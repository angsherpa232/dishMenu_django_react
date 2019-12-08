import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Spinner from "./Spinner";

class Table extends PureComponent {
  // Render the table body
  renderTableBody(dishes) {
    return dishes.map((dish, index) => {
      const { id, name, price } = dish;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
        </tr>
      );
    });
  }

  // Render the table header
  renderTableHeader(dishes, onSort) {
    let header = Object.keys(dishes[0]);
    return header.map((key, index) => {
      if (/name|price/gi.test(key)) {
        return (
          <th key={index}>
            <button onClick={event => onSort(event, key)}>
              {key.toUpperCase()}
            </button>
          </th>
        );
      } else {
        return <th key={index}>{key.toUpperCase()}</th>;
      }
    });
  }

  render() {
    const { dishes, onSort } = this.props;
    return (
      <div>
        {dishes && dishes.length ? (
          <div className="container">
            <h1 id="title">
              <i className="fas fa-utensils"></i> Menu for Delicious Dishes
            </h1>
            <table id="dishes">
              <tbody>
                <tr>{this.renderTableHeader(dishes, onSort)}</tr>
                {dishes && this.renderTableBody(dishes)}
              </tbody>
            </table>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

Table.propTypes = {
  dishes: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired
};

export default Table;
