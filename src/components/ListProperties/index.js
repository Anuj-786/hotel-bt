import React, { Component } from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
});
const propertyType = [
    {
      label: 'Hotel',
    },
    {
      label: 'Homestay',
    },
    {
      label: 'Guest House',
    }
  ];
class ListProperties extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currency: 'Hotel'
        }
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };
    
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={16} style={{padding: 25}}>
                <Grid item xs={12}>
                    <Typography variant="title" color="secondary" style={{fontWeight: 'bold'}}>List Your Property</Typography>
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <form fullWidth>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Property Name"
                                    placeholder="for ex: The Lalit New Delhi"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                                <TextField
                                    id="filled-select-currency"
                                    fullWidth
                                    select
                                    label="Select Property Type"
                                    // className={classes.textField}
                                    value={this.state.currency}
                                    onChange={this.handleChange('currency')}
                                    variant="outlined"
                                    SelectProps={{
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    helperText="Please select your Property type"
                                    margin="normal"
                                    
                                    >
                                    {propertyType.map(option => (
                                        <MenuItem key={option.label} value={option.label}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Full Address"
                                    fullWidth
                                    placeholder="Type your property address"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                />
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label style={{padding: '20px 0px 0px'}} htmlFor="raised-button-file">
                                <Button variant="raised" component="span" className={classes.button}>
                                    Upload Your Property Image
                                </Button>
                                </label> 

                                <Typography variant='subheading' style={{padding: "20px 0px 0px"}}>Select Room Type</Typography>
                                
                                {
                                    ["Delux Room", "Double", "PREMIER"].map( item => (
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                // checked={this.state.checkedA}
                                                // onChange={this.handleChange('checkedA')}
                                                value="checkedA"
                                            />
                                            }
                                            label={item}
                                        />
                                    ))
                                }
                                <Typography variant='subheading' style={{padding: '20px 0px 0px'}}>Select Facilities</Typography>
                                {
                                    ["Wifi", "Restaurant", "Parking", "Breakfast included"].map( item => (
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                // checked={this.state.checkedA}
                                                // onChange={this.handleChange('checkedA')}
                                                value="checkedA"
                                            />
                                            }
                                            label={item}
                                        />
                                    ))
                                }
                                
                                
                            </form>
                            <Button color="secondary" variant="contained" style={{marginTop: '15px'}}>Add Property</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
ListProperties.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles) (ListProperties); 