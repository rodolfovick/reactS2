import React, { Component } from 'react'
import Social from './Social'

export default class Footer extends Component {
    render() {
        if (this.props.footer) {
            return (
                <div style={{
                    margin: '10px',
                    fontSize: '14px'
                }}>
                    {this.props.footer.map(msg => <p>{msg}</p>)}
                    <hr></hr>
                    <p>Criado por Amor Agarradinho.</p>
                    <div>
                        <Social social={{media: 'facebook', url: 's2agarradinho'}}/>&nbsp;
                        <Social social={{media: 'instagram', url: 's2agarradinho'}}/>&nbsp;
                        <Social social={{media: 'whatsapp', url: '19992253116'}}/>
                    </div>
                    <br></br>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}
