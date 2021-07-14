import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

const App = () => {
    const [document, setDocument] = useState('')
    const [history, setHistory] = useState([])

    useEffect(() => {
        socket.on('message', payload => {
            setHistory([...history, payload])
        })
    })

    const handle = (e) => {
        e.preventDefault();
        console.log(document)
        socket.emit('message', { document })
       
    }
    return (
        <>
            <form onChange={handle}>
                <input type="text" name="message" value={document} onChange={(e) => setDocument(e.target.value)} required />
                <button type="submit">send</button>
            </form>
            {
                history.map((payload, index) => {
                    return (
                        <>
                            <b key={index}>{payload.document}</b>
                            <hr></hr>
                        </>
                    )
                })
            }
        </>
    )
}

export default App