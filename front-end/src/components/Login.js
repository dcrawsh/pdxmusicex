import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <input name="email" type="text"></input>
                    <input name="password" type="text"></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}
