import React, { useState } from 'react';
import BookList from './BookList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const Demo = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
}

const onSearch = value => console.log(value);

export default class BookForm extends React.Component {

    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPublishedChange = this.onPublishedChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBound = this.onChangeBound.bind(this);

        this.state = {
            title: props.book ? props.book.title : '',
            author: props.book ? props.book.author : '',
            description: props.book ? props.book.description : '',
            published: props.book ? props.book.published : 0,

            error: ''
        };
    }
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }

    onAuthorChange(e) {
        const author = e.target.value;
        this.setState(() => ({ author: author }));
    }

    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description: description }));
    }

    onPublishedChange(e) {
        const published = parseInt(e.target.value);
        this.setState(() => ({ published: published }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.author || !this.state.published) {
            this.setState(() => ({ error: 'Please set title & author & published!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitBook(
                {
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description,
                    published: this.state.published
                }
            );
            this.setState({
                visible: false,
            });
        }
    }
    onChangeBound(event) {
        const title = event.target.value;
        this.setState({
            title: title,
        });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter Title" value={this.state.title}
                        onChange={this.onTitleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="author" placeholder="Author" value={this.state.author}
                        onChange={this.onAuthorChange} />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} type="description" placeholder="Description" value={this.state.description}
                        onChange={this.onDescriptionChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPublished">
                    <Form.Label>Published</Form.Label>
                    <Form.Control type="published" placeholder="Published" value={this.state.published}
                        onChange={this.onPublishedChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}