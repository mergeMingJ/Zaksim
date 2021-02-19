import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export default function SearchBar({ sorting, hashtag, title, handleKeyword, handleSearch }) {
  const classes = useStyles();
  const [keyword, setKeyword] = useState(title);
  const handleChange = (e) => {
    setKeyword(e.target.value);
    handleKeyword(e.target.value);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (keyword === undefined) {
        handleSearch(sorting, hashtag, '');
      } else {
        handleSearch(sorting, hashtag, keyword);
      }
    }
  };
  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff521b',
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

      <div className={classes.center}>
        <div className={classes.root}>
          {/* TODO: 입력 데이터 엔터로 검색 */}
          <TextField
            id="outlined-helperText"
            onChange={handleChange}
            onKeyPress={handleEnter}
            placeholder="검색어를 입력해 주세요!"
            value={keyword}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: <SearchIcon position="start" style={{ marginRight: '10' }} />,
            }}
          />

        </div>

      </div>

    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: theme.spacing(5, 2, 5, 2),
    backgroundColor: 'rgba(253,194,62,0.25)',
  },
  paper: {
    textAlign: 'center',
    paddingBottom: '60%', // 정방형 만드는 방법
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },


}));
