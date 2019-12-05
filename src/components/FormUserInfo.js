import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import '../App.css'





export default class FormUserInfo extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }


    render() {
        const { value, handleChange } = this.props
        console.log(handleChange)

        return (
            <MuiThemeProvider>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="title"
                            color="inherit"
                        >
                            Enter your Details : Stage 1
           </TypoGraphy>
                    </Toolbar>
                </AppBar>

                <form >
                    <br />
                    <TextField
                        placeholder="firstname"
                        label="firstname"
                        onChange={handleChange}
                        defaultValue={value.firstname}
                        name="firstname"
                    />
                    <br />
                    <TextField
                        placeholder="lastname"
                        label="lastname"
                        onChange={handleChange}
                        defaultValue={value.lastname}
                        name="lastname"
                    />
                    <br />
                    <TextField
                        placeholder="dob"
                        label="dob"
                        onChange={handleChange}
                        defaultValue={value.dob}
                        name="dob"
                    />
                    <br />
                    <br />
                    <Button
                        className="BottonBom"
                        label="Continue"
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                    >
                        next
                        </Button>
                </form>

            </MuiThemeProvider>
        )
    }
}
