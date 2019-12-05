import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import '../App.css'


export default class FormUserInfo2 extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    previous = (e) => {
        e.preventDefault()
        this.props.previousStep()
    }

    render() {
        const { value, handleChange } = this.props

        return (
            <MuiThemeProvider>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <TypoGraphy variant="title"
                            color="inherit"
                        >
                            Enter your Details: Stage 2
           </TypoGraphy>
                    </Toolbar>
                </AppBar>

                  

                    <form >
                        <br />
                        <TextField
                            placeholder="email"
                            label="email"
                            onChange={handleChange}
                            defaultValue={value.email}
                            name="email"
                        />
                        <br />
                        <TextField
                            placeholder="city"
                            label="city"
                            name="city"
                            onChange={handleChange}
                            defaultValue={value.city}
                        />
                        <br />
                        <TextField
                            placeholder="country"
                            label="country"
                            name="country"
                            onChange={handleChange}
                            defaultValue={value.country}
                        />
                        <br />
                        <br />
                        <Button
                            className="ButtonBom"
                            label="Continue"
                            variant="contained"
                            color="primary"
                            onClick={this.continue}
                        >
                            next
                        </Button>

                        <Button
                            className="ButtonBom"
                            label="Continue"
                            variant="contained"
                            color="primary"
                            onClick={this.previous}
                        >
                            back
                        </Button>
                    </form>
              
            </MuiThemeProvider>
        )
    }
}
