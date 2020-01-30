import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {getSuggestions} from "./getBotReply";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: theme.spacing(0.5),
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    }));

export const AnswerProvider = (props: any) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            {getSuggestions(props.message)?.map((data, index) => {
                return (
                    <Chip
                        onClick={() => {
                            console.log(`clicked ${data}`);
                            props.onAnswerPicked(data)
                        }}
                        key={index}
                        label={data}
                        className={classes.chip}
                    />
                );
            })}
        </Paper>
    );
}