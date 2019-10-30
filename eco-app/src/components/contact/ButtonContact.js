import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function ButtonContact() {
  const classes = useStyles();
  return (
    <div>
      <Link to="/contactnav">
      <Button variant="contained" color="green" className={classes.button}>
        Контактирајте не веднаш!
      </Button>
      </Link>
    </div>
  );
}

export default ButtonContact;