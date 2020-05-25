import React, { Component } from 'react'

var baseUrl = 'assets/';

function getUrl(media) {
    var url = '';
    if(media == 'facebook') {
        url = 'https://www.facebook.com/';
    }
    else if(media == 'instagram') {
        url = 'https://www.instagram.com/'; 
    }
    else if(media == 'whatsapp') {
        url = 'https://wa.me/55';
    } 

    return url;
}

function getImage(media) {
    var image = '';
    if(media == 'facebook') {
        image = baseUrl+'fb.png';
    }
    else if(media == 'instagram') {
        image = baseUrl+'ig.png'; 
    }
    else if(media == 'whatsapp') {
        image = baseUrl+'ws.png';
    } 
    
    return image;
}

function formatUrl(social) {
    var url = '';
    if (social.media == 'whatsapp') {
        url = '('+social.url.substring(0,2)+') '+
        social.url.substring(2, 7)+'-'+
        social.url.substring(7,11); 
    }
    else {
        url = social.url;
    }

    return url;
}

export default class Social extends Component {
    render() {
        if (this.props.social) {
            return (
                    <a href={getUrl(this.props.social.media)+this.props.social.url} target="_blank"> 
                        <img src={getImage(this.props.social.media)} alt={this.props.social.media} style={{
                            verticalAlign: 'middle'
                        }}/>
                        <span>
                            {formatUrl(this.props.social)}
                        </span>
                     </a> 
            )
        }
        else {
            return (<div></div>)
        }
    }
}
