import React, { Component } from 'react';

class CurrentDateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
        console.log('1: constructor fired')
    }

    //gets triggered after the component is rerendered
    componentDidMount() {
        console.log('3: componentDidMount')
        this.intervalId = setInterval(() => {
            this.setState((state) => {
                return {
                    date: new Date()
                }
            })
        }, 1000)
    }

    componentDidUpdate() {
        console.log('4: componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('5: componentWillUnmount')
        clearInterval(this.intervalId)
    }

    render() {
        console.log('2: render fired')
        return (
            <div>
                {
                    this.props.shouldShowTime ?
                        this.state.date.toLocaleTimeString()
                        :
                        this.state.date.toLocaleDateString()
                }
            </div>
        )
    }

}

export default CurrentDateTime;

