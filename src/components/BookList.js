import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

import Table from 'react-bootstrap/Table';

const BookList = (props) => (

    <Table striped bordered hover variant="white">
        <thead>
            <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.books.map(book => {
                return (
                        <Book {...book}>
                    </Book>
                );
            })}
        </tbody>
    </Table>

);

const mapStateToProps = (state) => {
    return {
        books: state
    };
}
export default connect(mapStateToProps)(BookList);
