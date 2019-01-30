import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Payment extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            checkedA: false
        }
    }
   
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    render() {
        return (
            <Grid container spacing={16} style={{padding: 25}}>
                <Grid item xs={12}>
                    <Typography color='secondary' variant="title" style={{textAlign: 'center'}}>Payment Details</Typography>
                </Grid>
                <Grid item xs={8} style={{margin: 'auto'}}>
                    <Typography style={{padding: '10px 0'}}>Credit/Debit Card</Typography>
                    <form>
                        <TextField
                            id="outlied-name"
                            fullWidth
                            value=''
                            placeholder="CARD NO"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="outlied-name"
                            fullWidth
                            value=''
                            placeholder="MM / YY"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="outlied-name"
                            fullWidth
                            value=''
                            placeholder="CVV"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            id="outlied-name"
                            fullWidth
                            value=''
                            placeholder="NAME"
                            variant="outlined"
                            margin="normal"
                        />
                        
                        <FormControlLabel
                            
                            control={
                              <Checkbox onChange={this.handleChange('gilad')} value="gilad" />
                            }
                            label="Save card securely for faster booking ( 100% Secure)"
                         
                        />
                        <Typography  variant='subheading' style={{margin: '15px 0'}}>Total payble ammount <span style={{color: '#D74800', fontSize: 24, fontWeight: 'bold'}}>₹ 930</span></Typography>
                        <Button variant="contained"  color="secondary" ><Link style={{textDecoration: 'none', color:"#fff"}} to="/Thanks">Pay Securely </Link></Button>
                    </form>
                </Grid>
            </Grid>
        )
    } 
}

export default Payment;