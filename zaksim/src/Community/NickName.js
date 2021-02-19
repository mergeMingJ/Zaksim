import React, { useState, useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import TimeForToday from './TimeForToday';
import { makeStyles } from '@material-ui/core/styles';
import http from '../common/axios/index';

const useStyles = makeStyles({
    title: {
        textDecoration: 'none',
        color: 'black',
    }
})

const NickName = ({id}) => {
    const classes = useStyles();
    const [nickname, setNickname] = useState('무명');
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const userInfo = await http.get(`/user/info?userId=${id}`);
        setNickname(userInfo.data.object.nickname);
        setLoading(false);
    }, []);

    if (loading) return <div>loading...</div>;
    return (
        <div>
            {nickname}
        </div>
    )
}

export default NickName;