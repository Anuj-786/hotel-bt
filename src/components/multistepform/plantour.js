import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Chip from '@material-ui/core/Chip';
import {districts} from '../../DBhotellist';




const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
const names = getFields(districts, "location");
const nights = [1,2,3,4,5,6,7,8,9,10];

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class MultipleSelect extends React.Component {
  state = {
    name: [],
    nights:'',
    isChecked: false,
    color: 'default',
    name1: []
  };
static propTypes = {
        value: PropTypes.object,
        onChange: PropTypes.func,
    }
  handleChange = event => {
    this.setState({ name: event.target.value,});
    
  };

   handleChange1 = (event) => {
     
    /*const { name1, value } = event.target;*/
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name);
    
      
  };
  RenderSelect = () => {

  }

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,


    });

    
  };

  render() {
    const { classes,value } = this.props;
    console.log(value);
    const {color} = this.state;
    
    return (
      <div className={classes.root}>
        
        <FormControl className={classes.formControl} style={{width:'100%',maxWidth:'100%'}}>
          <InputLabel htmlFor="select-multiple-chip" syle={{width:'100%'}}>Planned Location of the tour</InputLabel>
          <Select
            multiple
            value={this.state.name}

            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" fullWidth />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={`${value}`} className={classes.chip} />
                ))}
              </div>
            )}
            style={{width:'100%'}}
            MenuProps={MenuProps}
          >
          

            {names.map(name => (
             
               <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.name.indexOf(name) > -1} />
                <ListItemText primary={name} />
                {(this.state.name.indexOf(name) > -1)?( <ListItemSecondaryAction id={name}>
                <span>Planned nights on {name} : </span>
                 
               <select name={`Location-${name}`} onChange={this.handleChange1} >
                <option value="0">Nonesa</option>
                <option value="1">One Night</option>
                <option value="2">Two Nights</option>
                <option value="3">Three Nights</option>
                <option value="4">Four Nights</option>
                <option value="5">Five Nights</option>
                <option value="6">Six Nights</option>
                <option value="7">Seven Nights</option>
                <option value="8">Eight NIghts</option>
                <option value="9">Nine Nights</option>
                <option value="10">Ten NIghts</option>
              </select>
            </ListItemSecondaryAction>):(<span></span>)}

              </MenuItem> 
                   ))}
       
          </Select>

        </FormControl>
        
        
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);