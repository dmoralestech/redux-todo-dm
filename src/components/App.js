import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Select from 'react-select';

const optionsDriveType = [
    {value: 'LHD', label: 'Left Hand Drive'},
    {value: 'RHD', label: 'Right Hand Drive'}
];

const optionsEngine = [
    {value: '1.5L', label: '1.5 Liter'},
    {value: '2L', label: '2 Liter'},
    {value: '3L', label: '3 Liter'}
];

const optionsGroup = {
    options: [optionsDriveType, optionsEngine]
}

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
            options={optionsDriveType}
            onChange={logChange}
        />
        <Select
            name="form-field-name"
            value="one"
            options={optionsEngine}
            onChange={logChange}
        />
    </div>
);

export default App;
