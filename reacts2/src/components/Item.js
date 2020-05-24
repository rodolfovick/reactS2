import React, { Component } from 'react'

var baseUrl = 'http://127.0.0.1:5000/s2agarradinho/';

export default class Item extends Component {
    render() {
        if (this.props.item) {
            return (
                <div style={{
                    float: 'left',
                    width: '180px',
                    height: '350px',
                    overflow: 'auto',
                    padding: '10px',
                    textAlign: 'center'
                    
                }}>
                    <img src={baseUrl+this.props.item.image} 
                        alt={this.props.item.image} 
                        style={{
                            width: "80%",
                            objectFit: 'cover'
                    }}/>
                    <p style={{
                        display: 'block',
                        width: '180px',
                        height: 'auto',
                        wordBreak:'break-all',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                        {this.props.item.text}
                    </p>
                    <p>
                        {'R$ '+this.props.item.price}
                    </p>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}
