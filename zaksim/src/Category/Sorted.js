import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Sorted({ handleSorting }) {
  const classes = useStyles();
  const [value, setValue] = useState("최신순");

  const handleChange = (event) => {
    setValue(event.target.value);
    handleSorting(event.target.value);
  };
  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#ff521b",
      },
    },
    typography: {
      fontFamily: 'KOTRA_GOTHIC',
      color: '#3E3D3D',
      fontSize: '25px'
    }
  });
  const [myTheme, setMyTheme] = useState(colorTheme);

  return (
    <ThemeProvider theme={myTheme}>
      <Container maxWidth="md" align="center" style={{ marginBottom: "30px" }}>
        <Paper className={classes.paper}>
          <FormControl component="fieldset" className={classes.margin}>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="최신순"
                control={<Radio color="primary" />}
                label="최신순"
              />
              <FormControlLabel
                value="오래된순"
                control={<Radio color="primary" />}
                label="오래된순"
              />
              <FormControlLabel
                value="인기순"
                control={<Radio color="primary" />}
                label="인기순"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: theme.spacing(2),
  },

  center: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "12px",
    boxShadow: 1,
    backgroundColor: "rgba(253,194,62,0.1)",
  },
  margin: {
    margin: theme.spacing(2, 0),
  },
}));
