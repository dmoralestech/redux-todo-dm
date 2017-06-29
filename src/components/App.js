import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Select from 'react-select';

const options = [
    {value: 'one', label: 'One'},
    {value: 'two', label: 'Two'}
];

function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
}

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={logChange}
        />
    </div>
);

export default App;
