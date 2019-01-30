import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});


class LoginDialog extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
    this.setState({ value });
    };

    handleChangeIndex = index => {
    this.setState({ value: index });
    };
    
    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    handleListItemClick = value => {
      this.props.onClose(value);
    };
  
    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
        const {theme } = this.props;
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle style={{backgroundColor: '#D74800'}} id="simple-dialog-title"><Typography variant="title" style={{color: '#fff', fontSize: 18}}>Login Or Register to Hotel Booking-Bt</Typography></DialogTitle>
          <div>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="primary"
                fullWidth
            >
                <Tab label="Login" />
                <Tab label="Sign Up" />
                
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                >
                <TabContainer dir={theme.direction}>
                    <FormControl className={classes.margin} fullWidth= "true" required="true">
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                        <TextField
                        id="email"
                        label ="Email/Phone"
                        required
                        fullWidth
                      
                        />

                        </Grid>
                          <Grid item xs={12}>
                        <TextField
                        id="password"
                        label ="Password"
                        required
                        fullWidth
                        type="password"
                      
                        />

                        </Grid>

                        </Grid>
                        
                    
                        <Button variant="contained" color="secondary" className={classes.button} style={{width: 100, marginTop: 20}}>Login</Button>
                    </FormControl>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                <FormControl className={classes.margin} fullWidth= "true" required="true">
                          <Grid container spacing={24}>
                            <Grid item xs={12}>
                        <TextField
                        id="emailenter"
                        label ="Email"
                        required
                        fullWidth
                        type="email"
                      
                        />

                        </Grid>
                          <Grid item xs={12}>
                        <TextField
                        id="phponeenter"
                        label ="Phone"
                        required
                        fullWidth
                        type="number"
                      
                        />

                        </Grid>
                         <Grid item xs={12}>
                        <TextField
                        id="pass"
                        label ="password"
                        required
                        fullWidth
                        type="password"
                      
                        />

                        </Grid>


                        </Grid>
                                         

                        <Button variant="contained" color="secondary" className={classes.button} style={{width: 100, marginTop: 20}}>Sign Up</Button>
                    </FormControl>
                </TabContainer>
                
            </SwipeableViews>
          </div>
        </Dialog>
      );
    }
  }
  const TabContainer = ({ children, dir }) => {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

  LoginDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
export default withStyles(styles, { withTheme: true })(LoginDialog)
