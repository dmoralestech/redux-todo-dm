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

class OptionType extends React.Component {
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        console.log('initial', this.props.options[0].value)
        this.state = {selectValue: this.props.options[0].value};
        console.log('state', this.state);
    }

    updateValue(newValue) {
        console.log('state', this.state);
        this.setState({selectValue: newValue});
        console.log('state', this.state);
    }

    render() {
        return (<div className="optionName">
            <h3 className="optionName-heading">{this.props.label}</h3>
            <Select autofocus simpleValue
                    name="form-field-name"
                    value={this.state.selectValue}
                    options={this.props.options}
                    onChange={this.updateValue}/>);
        </div>);
    }
}

class OptionSelect extends React.Component {
    render() {
        return (
            <div>
                {optionsGroupV2.map((optionObj, i) =>
                    <OptionType
                        key={i}
                        label={optionObj.name}
                        options={optionObj.options}
                    />
                )}
            </div>);
    }
}

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <OptionSelect/>
    </div>
);

export default App;
