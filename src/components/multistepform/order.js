import React,{Component,Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import {Datepicker1} from '../SearchForm';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PlannedTour from './plantour';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
const styles={
  colorStyle: {color:"rgba(0, 0, 0, 0.54)",fontSize:"16px"}
}
class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();

  }
  back = e => {
    this.props.prevStep();
  }
  state = {
    vyes: false,
    vno: false,
    foodb: false,
    foodlu: false,
    fooddi: false,
    vg: false,
    nonveg: false,
    both: false

  };
   handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
	render() {
    const { vyes,vno,foodb,foodlu,fooddi,vg,nonveg,both} = this.state;
		return (
		<div style={{width:'100%',maxWidth:'calc(100% - 48px)',margin:'25px auto'}}>
		<Grid container spacing={24}>
      <Grid item xs={12}>
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Planned your Tour 
          </Typography>

        </Toolbar>
      </AppBar>
      </Grid>
      <Grid item xs={6}>
        <PlannedTour/>
     
          </Grid>
        <Grid item xs={6}>
         <Typography variant="caption" gutterBottom>
        Start and End date of the tour
      </Typography>
         <Datepicker1/>
        </Grid>
        <Grid item xs={12}>
        <TextField
           required
          id="no"
          label="Number of Group members"
          type="number"
          fullWidth
          margin="normal"
          margin="dense"
          variant="outlined"
        />
        </Grid>
         <Grid item xs={12}>
             <Typography variant="subtitle2" gutterBottom style={styles.colorStyle}>
          Include vehicle transport  
      </Typography>
              <FormGroup style={{flexDirection:"row"}}>

            <FormControlLabel
              control={
                <Checkbox checked={vyes} onChange={this.handleChange('vyes')} value="vyes" />
              }
              label="Yes"
              style={styles.colorStyle}
            />
            <FormControlLabel
              control={
                <Checkbox checked={vno} onChange={this.handleChange('vno')} value="vno" />
              }
              style={styles.colorStyle}
              label="No"
            />
            </FormGroup>
        </Grid>
          <Grid item xs={12}>
             <Typography variant="subtitle2" gutterBottom style={styles.colorStyle}>
          Include Food
      </Typography>
              <FormGroup style={{flexDirection:"row"}}>

            <FormControlLabel
              control={
                <Checkbox checked={foodb} onChange={this.handleChange('foodb')} value="foodb" />
              }
              label="Breakfast"
              style={styles.colorStyle}
              value={this.state.foodb}
            />
            <FormControlLabel
              control={
                <Checkbox checked={foodlu} onChange={this.handleChange('foodlu')} value="foodlu" />
              }
              style={styles.colorStyle}
              label="Lunch"
            />
            <FormControlLabel
              control={
                <Checkbox checked={fooddi} onChange={this.handleChange('fooddi')} value="fooddi" />
              }
              style={styles.colorStyle}
              label="Dinner"
            />
            </FormGroup>
        </Grid>
          <Grid item xs={12}>
             <Typography variant="subtitle2" gutterBottom style={styles.colorStyle}>
          Prefer Food Type
      </Typography>
              <FormGroup style={{flexDirection:"row"}}>

            <FormControlLabel
              control={
                <Checkbox checked={vg} onChange={this.handleChange('vg')} value="vg" style={styles.colorStyle} />
              }
              label="Veg"
              style={styles.colorStyle}
            />
            <FormControlLabel
              control={
                <Checkbox checked={nonveg} onChange={this.handleChange('nonveg')} value="nonveg" />
              }
              style={styles.colorStyle}
              label="Non Veg"
            />
            <FormControlLabel
              control={
                <Checkbox checked={both} onChange={this.handleChange('both')} value="both" />
              }
              style={styles.colorStyle}
              label="Both"
            />
            </FormGroup>
        </Grid>
        <Grid item xs={12}>
                <TextField
          id="standard-multiline-flexible"
          label="Message"
           margin="dense"
          variant="outlined"
          multiline
          rows="4"
          margin="normal"
          fullWidth
        />
        </Grid>
       
       
            
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={this.continue}>
             Done
          </Button>
          <Button variant="contained" color="secondary" style={{marginLeft:10}} onClick={this.back}>
             Back
          </Button>
          </Grid>
        </Grid>
        </div>
		)
	}
}
export default UserDetails;