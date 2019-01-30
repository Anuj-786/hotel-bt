import React ,{Component}from 'react';
import Grid from '@material-ui/core/Grid';
import {districts} from '../../DBhotellist';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import {ReactExample} from './checkbox';


function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
;
class GroupBooking extends Component {
	
	constructor(props) {
		super(props);
		 this.state ={
      			name:(getFields(districts, "location")),
      			input: '',
      			checked: [0],
      			fruit: [],
            postType:'1',
            nights: [],

    	}
	}
	 onChangeHandler(e){
    this.setState({
      input: e.target.value,
      
    })
  }
  /*onChange = event => {
    this.setState(prevState =>({
       nights: {
         ...prevState.nights,
         nights: event.target.value
       }
   }))
  }*/
  onChange = event => {
  	this.setState({
  		[event.target.name]: event.target.value
  	})
  }

 

    handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  

	render() {
		 const list = this.state.name
        .filter(d => this.state.input === '' || d.includes(this.state.input) || d.toLowerCase().indexOf(this.state.input) > -1)
        .map((d, index) => <div>
        	 <ListItem key={index} role={undefined} dense button onClick={this.handleToggle(d)}>
        	 <Checkbox
              checked={this.state.checked.indexOf(d) !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={d} />
            <p>hello</p>
            <ListItemSecondaryAction htmlFor={d}>
            <select id={d} onChange={this.onChange} value={this.state.nights} name={d}>
            	<option value="1">sdfa1</option>
              <option value="2">2</option>
            	<option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            </ListItemSecondaryAction>
        	 </ListItem>
          
</div>);
 
		return (
         <div >
         <div className="banner1">Book and manage your business travel/Family tour, accommodation with Hotel Booking.bt</div>
	      <Grid container spacing={24}>
	        <Grid item xs={4}>
            <List>
	        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
        {list}
        </List>
     
	        </Grid>
	        <Grid item xs={8}>
	        	world
	        </Grid>
	      </Grid>
	    </div>


	    )
	}
}
export default GroupBooking;