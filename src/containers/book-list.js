import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}></li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// glue between react and redux
// Note:
// 1) Whenever application state changes the connected component re-renders
// 2) Whenever application state changes the output object will be assigned to props
function mapStateToProps(state) {
  // takes application state and maps to props
  // whatever is returned will end up as props in BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
