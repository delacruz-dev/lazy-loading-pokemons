import React, { Component } from 'react'
import './ListItem.css'

class List extends Component {
    componentDidMount () {
        this.props.observer.observe(this.image)
    }
    
    render () {
        return (
            <li className='ListItem'>
                <img data-src={this.props.sprite} ref={node => { this.image = node }} width={96} height={96} />
            </li>
        )
    }
}

export default List