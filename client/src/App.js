import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './style.css'

const socket = io('https://realtime-doc.herokuapp.com')

const App = () => {
    const [data, setDocument] = useState('')
    const [history, setHistory] = useState([])

    useEffect(() => {
        document.addEventListener('Keydown', (event) => {
            if (event.key === 'Enter') {
                console.log('press Enter')
                handle()
            }
        })

        document.title = 'Real Doc'
        socket.on('doc', payload => {
            setHistory([...history, payload])
        })
    })

    const handle = (e) => {
        e.preventDefault();
        socket.emit('doc', { data })
        setDocument('')
    }



    return (
        <main>
            <form onSubmit={handle}>
                <input className="inPut" type="text" name="message" value={data} onChange={(e) => setDocument(e.target.value)} required placeholder="Enter your document" />
                <button type="submit">send</button>
            </form>
            <div className="doC">
                {
                    history.map((payload, index) => {
                        return (
                            <p key={index} className="igotIT" onClick={(e) => {
                                navigator.clipboard.writeText(payload.data)
                                e.currentTarget.style.background = '#e801b7'
                            }}>{payload.data}
                            </p>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default App