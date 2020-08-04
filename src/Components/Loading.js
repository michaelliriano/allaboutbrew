import React, { Component } from 'react'

export default class Loading extends Component {

    render() {
        const getState = () => {
            if(this.props === false){
                console.log('running')
                return (
                    <div>
                        <h1>Loading</h1>
                    </div>
                )
            } else{
                return null;
            }
        }
        return (
            <div>
                {getState}
            </div>
        )
    }
}
