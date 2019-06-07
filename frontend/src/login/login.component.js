import React, { Component } from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { history } from "../_helpers";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import "./login.component.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  button: {
    margin: theme.spacing.unit
  },

  input: {
    display: "none"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreUsuario: "",
      contrasenia: "",
      showPassword: false
    };
  }

  componentDidMount() {
    console.log(this.props);
    if (localStorage.getItem("auth")) {
      history.push("/administrador");
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  login = event => {
    this.setState({ submitted: true });
    const { nombreUsuario, contrasenia } = this.state;
    const { dispatch } = this.props;
    if (nombreUsuario && contrasenia) {
      dispatch(userActions.login(nombreUsuario, contrasenia));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="login-margin">
        <Grid container spacing={24}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography>
                <h1>{"INGRESAR"}</h1>
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <div>
                <TextField
                  label="Nombre de Usuario"
                  value={this.state.nombreUsuario}
                  className={classes.textField}
                  onChange={this.handleChange("nombreUsuario")}
                />
                <br />
                <br />
                <TextField
                  label="Contraseña"
                  autoComplete="current-password"
                  type={this.state.showPassword ? "text" : "password"}
                  className={classes.textField}
                  value={this.state.contrasenia}
                  onChange={this.handleChange("contrasenia")}
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={event => {
                    this.login();
                  }}
                >
                  Ingresar
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: propTypes.object.isRequired
};

const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
};

const connectedLoginPage = withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    {
      pure: false
    }
  )(withStyles(styles)(Login))
);

export { connectedLoginPage as Login };
