import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Select from 'react-select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

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

const styleObj = {
    // bottom: '0',
    color: '#aaa',
    // left: '0',
    lineHeight: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'absolute',
    // right: '0',
    // top: '0',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    display: 'block',
    height: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    verticalAlign: 'middle'
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
        console.log('newValue', newValue);
        this.setState({selectValue: newValue}, () => {
            console.log('state after callback', this.state);
        });
        console.log('state in updateValue', this.state);
    }


    render() {
        return (<div className="optionName">
            <h3 style={{color: 'red', boxSizing: 'border-box'}} className="optionName-heading">{this.props.label}</h3>
            <Select style={styleObj}
                    autofocus simpleValue
                    name="form-field-name"
                    value={this.state.selectValue}
                    options={this.props.options}
                    onChange={this.updateValue}/>
        </div>)
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
            </div>)
    }
}

var optionsTest = [
    {label: 'One', value: 1},
    {label: 'Two', value: 2},
    {label: 'Three', value: 3},
];

var Container = React.createClass({
    getInitialState () {
        return {value: ''};
    },
    updateValue (value) {
        this.setState({value: value});
    },
    render () {
        return React.createElement(Select, {
            options: optionsTest,
            onChange: this.updateValue,
            value: this.state.value,
        });
    }
});

const FLAVOURS = [
    {label: 'DM Chocolate', value: 'chocolate'},
    {label: 'DM Vanilla', value: 'vanilla'},
    {label: 'Strawberry', value: 'strawberry'},
    {label: 'Caramel', value: 'caramel'},
    {label: 'Cookies and Cream', value: 'cookiescream'},
    {label: 'Peppermint', value: 'peppermint'},
];


var DMSelect = createClass({
    displayName: 'MultiSelectField',
    propTypes: {
        label: PropTypes.string,
    },
    getInitialState () {
        return {
            options: FLAVOURS,
            value: [],
        };
    },
    handleSelectChange (value) {
        console.log('You\'ve selected:', value);
        this.setState({value});
    },
    render () {
        return (
            <div>
                <Select value={this.state.value} placeholder="Select your favourite(s)"
                        options={this.state.options} onChange={this.handleSelectChange}/>
            </div>);
    }
});


const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <DMSelect label='Hello World'/>
        <Container/>
        <OptionSelect/>
    </div>
)

export default App;
