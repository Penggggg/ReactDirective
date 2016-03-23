var Rinput = React.createClass({
	getInitialState: function(){
		return {
			RIfChecked: false,//default: not checked...
			RValue: this.props.RFlaseValue || '' //default: false-value
		}
	},
	CheckBoxHandler: function(){
		this.setState({
			//change the checked state
			RIfChecked: !this.state.RIfChecked
		})
			//change the value 
		var that = this
		setTimeout(function(){
			that.setState({
				RValue: that.state.RIfChecked ? that.props.RTrueValue : that.props.RFlaseValue
			})
		}, 0)
	},
	render: function(){
		return <label>
			<input type="checkbox" value={this.state.RValue} checked={this.state.RIfChecked} onClick={this.CheckBoxHandler}/><span>{this.props.Rtag}</span>
			<h5>Checked: {this.state.RIfChecked.toString()}</h5>
			<h5>Value: {this.state.RValue}</h5>	
		</label>
	}
})


var FormSet = React.createClass({
	render: function(){
		return <div>
			<div className="checkbox">
				<Rinput RTrueValue="i like play games" RFlaseValue="i dont like play games now" Rtag="Do you like games?" />
			</div>
		</div>
	}
})

ReactDOM.render(
	<FormSet />,
	document.getElementById('example')
)