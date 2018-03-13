import React from 'react';
import { Paper, Grid } from 'material-ui';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Content(props) {
  const { classes } =  props;

  return(
    <div className={ classes.root }>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={ classes.paper }>Left Pane</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={ classes.paper }>Right Pane</Paper>
        </Grid>
      </Grid>
    </div>
  )
};

export default withStyles(styles)(Content)
