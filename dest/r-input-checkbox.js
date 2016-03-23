"use strict";

var RinputChk = React.createClass({ displayName: "RinputChk",
	getInitialState: function getInitialState() {
		return {
			RIfChecked: false, //default: not checked...
			RValue: this.props.RFlaseValue || '' //default: false-value
		};
	},
	CheckBoxHandler: function CheckBoxHandler() {
		this.setState({
			//change the checked state
			RIfChecked: !this.state.RIfChecked
		});
		//change the value
		var that = this;
		setTimeout(function () {
			that.setState({
				RValue: that.state.RIfChecked ? that.props.RTrueValue : that.props.RFlaseValue
			});
		}, 0);
	},
	render: function render() {
		return React.createElement("label", null, React.createElement("input", { type: "checkbox", value: this.state.RValue, checked: this.state.RIfChecked, onClick: this.CheckBoxHandler }), React.createElement("span", null, this.props.Rtag), React.createElement("h5", null, "Checked: ", this.state.RIfChecked.toString()), React.createElement("h5", null, "Value: ", this.state.RValue));
	}
});

var FormSet = React.createClass({ displayName: "FormSet",
	render: function render() {
		return React.createElement("div", null, React.createElement("div", { className: "checkbox" }, React.createElement(RinputChk, { RTrueValue: "i like play games", RFlaseValue: "i dont like play games now", Rtag: "Do you like games?" })));
	}
});

ReactDOM.render(React.createElement(FormSet, null), document.getElementById('example'));