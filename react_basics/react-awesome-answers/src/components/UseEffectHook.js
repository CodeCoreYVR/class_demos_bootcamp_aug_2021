import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // 1 Component Did Mount
    // 2 Component Did Update
    // 3 Component Will Unmount

    // if you pass an empty array as the second argument of useEffect Hook
    // then it's same as componentDidMount
    // useEffect(() => {
    //     console.log('now you are inside useEffect function');
    // }, [])

    // if you don't pass that array, then useEffect Hook becomes to the componentDidUpdate()
    // useEffect(() => {
    //     console.log('now you are inside useEffect function');
    // })
    // if you pass the state into the array, then useEffect will be triggering when this(these) state(s) are changing
    // useEffect(() => {
    //     console.log('now you are inside useEffect function');
    // }, [name])

    // inside the callback function, the function you return is same as componentWillUnmount
    // useEffect(() => {
    //     return () => {
    //         console.log("componentWillUnmount");
    //     }
    // }, [])

    useEffect(() => {
        console.log('now you are inside useEffect function');
        // setInterval(() => {
        //     setDate(new Date());
        // }, 1000)

        return () => {
            // clear
            console.log("componentWillUnmount");
        }
    }, [])
    return (
        <div>
            {date.toLocaleString()}
            <button onClick={() => setCount(count + 1)}>Count + 1</button>
        </div>
    )
}
