import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { getBooks } from './actions/books';
// import './styles/styles.scss';
// import './styles/style.css';
import { Provider } from 'react-redux';
import './custom.scss';
// import 'antd/dist/antd.css';
const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getBooks()).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});
