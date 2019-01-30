import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/deepOrange';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[900],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} style={{maxWidth:"100%"}}>
       
        <CardMedia
          className={classes.media}
          image={this.props.hotelImage}
          
        />
        <CardContent>
          <Typography variant="subtitle1" color="primary"> {this.props.title} </Typography>
          <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={this.props.Rating}  
                                />
          <Typography variant="body2">{this.props.location}</Typography>
          <Typography variant="body2">
            Price: {this.props.price}
          </Typography>
          <Typography component="p" style={{marginTop: 20}}>
            <Button color="secondary" variant="contained">Book Now</Button>
          </Typography>
        </CardContent>
        
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);