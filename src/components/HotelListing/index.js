import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SidebarFilters from './SidebarFilters'
import Listing from './HotelListing'
// import SearchFormListing from './SearchForm';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class HotelListing extends Component {
    
    render () {
        const { classes } = this.props;
        
        return (
            <div variant="title" className={classes.root} style={{width: '100%',margin:"25px auto 0",maxWidth:'calc(100% - 24px)'}}>
                <Grid container spacing={24}>

                   <Grid item sm={3}>
                   <Typography color="secondary" variant="h4" gutterBottom >Hotels in Location</Typography>
                  <SidebarFilters />

                   </Grid>
                   <Grid item sm={9} style={{marginTop:25}}>
                    <Listing />
                   </Grid>
                </Grid>
            </div>
        ) 
    }
}
HotelListing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelListing);