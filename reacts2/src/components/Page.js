import React, { Component } from 'react'
import Item from './Item';

export default class Page extends Component {
    render() {
        if (this.props.page) {
            return this.props.page.map(item => (<Item item={item}/>))
        }
        else {
            return (<div></div>)
        }
    }
}
