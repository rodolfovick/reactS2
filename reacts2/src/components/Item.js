import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                <img src={'http://127.0.0.1:5000/s2agarradinho/'+this.props.item.image} 
                    alt={this.props.item.image} 
                    style={{
                            width: "20%"
                        }}/>
                <p>{this.props.item.text}</p>
                <p>{'R$ '+this.props.item.price}</p>
            </div>
        )
    }
}
