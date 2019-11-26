import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Grid, Button } from '@material-ui/core';
import Navigation from './Navigation.js';

const textInputStyle = {
    minWidth: '100%',
    margin: '0 auto',

};

const olStyle = {
    display: 'block'
};

const liStyle = {
    display: 'inline-block'
};

const buttonStyle = {
};

const highlightStyle = {
    backgroundColor: 'red'
};

function showHint() {
    React.createElement('h1', {}, 'Test');
    const test = (
        <p>TEST</p>
    );
}


export default class Guides extends Component {
    render() {
        return (
            <Container maxWidth="l">
                <div className="guides">
                    <Navigation></Navigation>

                    <h1>Edit Guide</h1>
                    <h2>I was rejected at TU Berlin. What can I do?</h2>
                    <p>Find out why you were rejected.</p>
                    <ol style={olStyle}>
                        <li>Check the deadlines! Maybe you can still apply.
                            <Button variant="contained" style={buttonStyle}>Comment
                            </Button>
                        </li>
                        <li>Contact the student's office as soon as possible. Best in person.
                            <Button variant="contained" style={buttonStyle}>Comment</Button>
                        </li>
                        <li>Try resending missing documents. Get a list of all documents you need.
                            <Button variant="contained" style={buttonStyle}>Comment</Button>
                        </li>
                        <li>Get these documents in order: High school diploma, health insurance, <span onMouseOver={showHint} style={highlightStyle}>rent contract.</span>
                            <div hidden id="test">User A: This information is wrong, you do not need that!</div>
                            <Button variant="contained" style={buttonStyle}>Comment</Button>
                        </li>
                        <li>The last resort is sueing the university :)
                            <Button variant="contained" style={buttonStyle}>Comment</Button>
                        </li>
                    </ol>
                    <hr></hr>

                    <TextField id="edit-area" type="text" style={textInputStyle} placeholder="Leave a comment!" />
                </div>
            </Container>
)
    }
}
