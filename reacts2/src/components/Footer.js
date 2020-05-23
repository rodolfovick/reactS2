import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        if (this.props.footer) {
            return (
                <div>
                    {this.props.footer.map(msg => <p>{msg}</p>)}
                    <p>Criado por s2agarradinho.</p>
                    <ul>
                        <li>
                            <a href={'https://www.instagram.com/s2agarradinho/'}>Instagram</a>
                        </li>
                        <li>
                            <a href={'https://www.facebook.com/s2agarradinho/'}>Facebook</a>
                        </li>
                        <li>
                            <a href={'https://wa.me/5519992253116'}>Whatsapp</a>
                        </li>
                    </ul>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}
