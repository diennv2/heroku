import React from 'react';
import { removeBook } from '../actions/books';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Book = ({ id, title, description, author, published, dispatch }) => (

    <tr>
        <td><Link to={`/book/${id}`}>{title} ({published})</Link></td>
        <td>{author}</td>
        <td>{description}</td>
        <td><Button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</Button>
            <Link to={`/book/${id}`}><Button>Edit</Button></Link>
        </td>
    </tr>
);
export default connect()(Book);