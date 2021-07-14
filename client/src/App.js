import React, { useState } from 'react'

const App = () => {
    const [document,setDocument] = useState('')
    const handle= (e)=>{
        e.preventDefault()

    }
    return (
        <>
            <form onSubmit={handle}>
            <input type="text" name="message" value={document} onChange={(e)=>setDocument(e.target.value)} required/>
            <button type="submit">send</button>
            </form>
        </>
    )
}

export default App