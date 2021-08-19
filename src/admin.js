import React from "react";
import Header from "./header";
import "./App.css";
import axios from "axios";
var fields = [],
    unique = [],
    ids = [];
var Admin = React.createClass({
    getInitialState() {
        return {
            type: "info",
            message: "",
        };
    },
    handleSubmit: function (event) {
        event.preventDefault();
        this.setState(
            { type: "info", message: "Sending..." },
            this.sendFormData
        );
    },
    sendFormData: function () {
        // Prepare form data for submitting it.
        var options1 = this.refs.options1.value;
        var options2 = this.refs.options2.value;
        var options3 = this.refs.options3.value;
        var options4 = this.refs.options4.value;
        var allOptions = [];
        allOptions.push(options1, options2, options3, options4);
        console.log(allOptions);
        var formData = {
            question: this.refs.question.value,
            options: allOptions,
            answer: options1,
        };

        // Send the form data.
        axios.post("https://reqres.in/invalid-url", formData).catch((error) => {
            this.setState({ errorMessage: error.message });
            console.error("There was an error!", error);
        });
    },
    componentWillMount() {
        this.style = {
            marginLeft: "100px",
            marginTop: "50px",
        };
    },
    render() {
        return (
            <div className="row">
                <Header />
                <div style={this.style}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row col-md-12">
                            <div className="form-group col-md-8">
                                <label for="question">Enter Question</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    name="question"
                                    ref="question"
                                    id="question"
                                    placeholder="Question"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div className="form-group form-inline col-md-2 has-feedback">
                                <label for="options">Options</label>
                                <div className="form-group has-feedback">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="options1"
                                        ref="options1"
                                        id="options1"
                                        placeholder="Correct Answer"
                                        aria-describedby="inputSuccess4Status"
                                        required
                                    />
                                    <span
                                        className="glyphicon glyphicon-ok form-control-feedback"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="options2"
                                    ref="options2"
                                    id="options2"
                                    placeholder="Other Options"
                                    required={true}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    name="options3"
                                    ref="options3"
                                    id="options3"
                                    placeholder="Other Options"
                                    required={true}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    name="options4"
                                    ref="options4"
                                    id="options4"
                                    placeholder="Other Options"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                            <button type="submit" className="btn btn-default">
                                Save
                            </button>
                        </div>
                        <div className="form-group col-md-12">
                            <button className="btn btn-default">
                                Next Question
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    },
});

export default Admin;
