import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {BrowserRouter as Route} from 'react-router-dom';
import Login from '../Login';
import logo from '../../logo.png';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  seprate: {
  	alignItems: 'center',
  	webkitalignItems: 'center',
  	justifyContent: 'space-between',
  	webkitjustifyContent: 'space-between',
  	display: 'flex',
  	display: '-webkit-flex'
  }
};

class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
    
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary" className="header">
          
          <Toolbar style={styles.seprate}>
          <div style={styles.seprate}>
           
            <a href="/"><img src={logo} width="150" alt="logo" style={{borderRadius: '5px',paddingTop:10,backgroundClip:'padding-box'}}/></a>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
             <a href="/ListProperties" style={{color:'#fff',textDecoration:'none'}}>List your Property</a>
            {auth && (
              <div>

                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem><AccountCircle /><Login /></MenuItem>
                  <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
                  
                </Menu>
                <Route path="/login" component={Login} />
              </div>
            )}
            </div>
          </Toolbar>

        </AppBar>
        
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);