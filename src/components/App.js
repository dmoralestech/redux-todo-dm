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

const optionsTransmission = [
    {value: 'MAN', label: 'Manual'},
    {value: 'AUTO', label: 'Automatic'}
];

const optionsGroup = {
    options: [optionsDriveType, optionsEngine, optionsTransmission]
}

const optionsGroupV2 = [
    {name: 'Drive Type', options: optionsDriveType},
    {name: 'Engine', options: optionsEngine},
    {name: 'Transmission', options: optionsTransmission},
]


function logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
}

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        {optionsGroup.options.map((optionItem, i) =>
            <Select autofocus simpleValue
                key={i}
                name="form-field-name"
                value={optionItem[0].value}
                options={optionItem}
                onChange={logChange}/>
        )}

        {optionsGroupV2.map((optionObj, i) =>
            <Select autofocus simpleValue
                key={i}
                name="form-field-name"
                label="Nice"
                value={optionObj.options[0].value}
                options={optionObj.options}
                onChange={logChange}/>
        )}

    </div>
);

export default App;
