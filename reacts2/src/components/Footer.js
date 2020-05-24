import React, { Component } from 'react'
import Social from './Social'

export default class Footer extends Component {
    render() {
        if (this.props.footer) {
            return (
                <div>
                    {this.props.footer.map(msg => <p>{msg}</p>)}
                    <p>Criado por s2agarradinho.</p>
                    <ul>
                        <Social social={{media: 'facebook', url: 's2agarradinho'}}/>
                        <Social social={{media: 'instagram', url: 's2agarradinho'}}/>
                        <Social social={{media: 'whatsapp', url: '19992253116'}}/>
                    </ul>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}
