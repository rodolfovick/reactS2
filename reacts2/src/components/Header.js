import React, { Component } from 'react'
import Social from './Social'

var baseUrl = 'data/';

export default class Header extends Component {
    render() {
        if (this.props.header) {
            return (
                <div style={{
                    overflow: 'hidden'
                }}>
                    <div style={{
                                maxWidth: '150px',
                                width: '40%',
                                padding: '10px',
                                float: 'left'
                            }}>
                        <img src={baseUrl+this.props.header.logo} alt={''} style={{
                                width: '100%'
                            }}/>
                    </div>
                    <div style={{
                                maxWidth: '200px',
                                width: '60%',
                                padding: '10px',
                                float: 'left'
                    }}>
                        <h1 style={{
                            fontSize: '22px',
                            textAlign: 'left'
                         }}>
                            {this.props.header.name}
                        </h1>
                        <ul style={{
                            listStyleType: 'none',
                            textAlign: 'left'
                         }}>
                            {this.props.header.social.map(social => <li><Social social={social}/></li>)}
                        </ul>
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}
