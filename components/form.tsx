import * as React from 'react';
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme, ThemeProvider, createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export interface IFormProps {
  errorMessage:any,
  onSubmit:any
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "30vw",
    height:"50vh",
    opacity: .9,
    zIndex: 30000,
    backgroundColor: 'white'
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',            
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
  },
  input: {
      // color: 'white'
  }
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A585D',
    },
  },
});
function Form (props: IFormProps) {
  const classes = useStyles();
  const [email, chEmail] = React.useState("");

  return (
    <form onSubmit={props.onSubmit}>
      <ThemeProvider theme={theme}>
        <label>
          <div id="email-div">
            <TextField InputProps={{className: classes.input}} id="outlined-basic" label="Username" variant="outlined"  name="email"/>
            <p id="company-domain">@pelotonu.org</p>
          </div>
        </label>
        {/* <label>
          <div id="password-div">
            <TextField InputProps={{className: classes.input}} id="outlined-basic" label="Password" variant="outlined" type="password" />
          </div>
        </label> */}
        <div className="submit">
          <Button type="submit" variant="contained" id="sign-in">Log In</Button>
        </div>

        {props.errorMessage && <p className="error">{props.errorMessage}</p>}
        <p className="login-description">
          Login using your PelotonU email.
        </p>
      </ThemeProvider>
    </form>
  );
}

export default Form;