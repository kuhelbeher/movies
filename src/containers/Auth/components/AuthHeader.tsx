import React from 'react';
import { Avatar, Typography, makeStyles } from '@material-ui/core';
import { FaLock } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

type Props = {
  children: string;
};

function AuthHeader({ children }: Props) {
  const classes = useStyles();

  return (
    <>
      <Avatar className={classes.avatar}>
        <FaLock />
      </Avatar>
      <Typography component="h1" variant="h5">
        {children}
      </Typography>
    </>
  );
}

export default AuthHeader;
