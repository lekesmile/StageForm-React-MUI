import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { List, ListItem, ListItemText } from '@material-ui/core';
import '../App.css'
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

export default class FormUserInfo3 extends Component {
    previous = (e) => {
        e.preventDefault();
        this.props.previousStep()

    }
    render() {
        const {
            value: { firstname, lastname, email, dob, city, country }
        } = this.props

        return (
            <div className="App">
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="title"
                            color="inherit"
                        >
                            Comfirm your Details: Stage 3
                        </TypoGraphy>
                    </Toolbar>
                </AppBar>


                <h1>Comfirm details</h1>

                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstname} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastname} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Dbo" secondary={dob} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City" secondary={city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Country" secondary={country} />
                    </ListItem>
                </List>
                <br />

                <Button
                    className="BottonBom"
                    label="Continue"
                    variant="contained"
                    color="primary"
                    onClick={this.previous}
                >
                    back
                        </Button>
            </div>
        )
    }
}
