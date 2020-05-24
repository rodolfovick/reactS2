import React, { Component } from 'react'
import Social from './Social'

export default class Header extends Component {
    render() {
        console.log(this.props.header)
        if (this.props.header) {
            return (
                <div>
                <div>
                    <img src={'http://127.0.0.1:5000/s2agarradinho/'+this.props.header.logo} alt={''} style={{
                            width: "20%"
                        }}/>
                    <h1>{this.props.header.name}</h1>
                </div>
                <div>
                    <ul>
                    {
                        this.props.header.social.map(social => <Social social={social}/>)
                    }
                    </ul>
                </div>
                </div>
            )
        }
        else {
            return (
                <div>

                </div>
            )
        }
    }
}
