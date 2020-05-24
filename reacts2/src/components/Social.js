import React, { Component } from 'react'

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
        image = 'http://127.0.0.1:5000/assets/fb.png';
    }
    else if(media == 'instagram') {
        image = 'http://127.0.0.1:5000/assets/ig.png'; 
    }
    else if(media == 'whatsapp') {
        image = 'http://127.0.0.1:5000/assets/ws.png';
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
        url= social.url;
    }

    return url;
}

export default class Social extends Component {
    render() {
        if (this.props.social) {
            console.log(this.props.social)
            return (
                <li>
                    <a href={getUrl(this.props.social.media)+this.props.social.url} target="_blank"> 
                        <img src={getImage(this.props.social.media)} alt={this.props.social.media}/>
                        {formatUrl(this.props.social)}
                     </a>
                </li> 
            )
        }
        else {
            return (<div></div>)
        }
    }
}
