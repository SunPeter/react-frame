var React = require('react');
var Store = require("../stores");
var Action = require("../actions");
var App = React.createClass({
    getInitialState: function () {
        return {
            data: Store.getAll()
        }
    },
    componentDidMount: function () {
        Store.addChangeListener(this._onChange);
    },
    render: function () {
        var num = this.state.data.num || 0;
        return (
            <section>
                <h1>hahaha{num}</h1>
                <button onClick={this.handleClick}>click me</button>
            </section>
        );
    },
    handleClick: function  () {
        Action.create(10);
    },
    _onChange: function () {
        this.setState({
            data: Store.getAll()
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    React.render(<App/>, document.getElementById("main"));
});
