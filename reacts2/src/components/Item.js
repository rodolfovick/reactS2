import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

var baseUrl = 'http://127.0.0.1:5000/s2agarradinho/';

export default class Item extends Component {
    state = {
        openImage: false,
        url: ''
    }

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
                    <a href='#' onClick={() => {
                        this.setState({openImage: true});
                        this.setState({url: baseUrl+this.props.item.image})
                    }}>
                        {
                            this.state.openImage && 
                            <Lightbox 
                                mainSrc = {this.state.url}
                                onCloseRequest = {() => {
                                    this.setState({openImage: false});
                                    this.setState({url: ''})
                                }} 
                            />
                        }
                        <img src={baseUrl+this.props.item.image} 
                            alt={this.props.item.image} 
                            style={{
                                width: "80%",
                                objectFit: 'cover'
                        }}/>
                    </a>
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
