import { useState } from 'react'


// Passed a callback function to onChange to save our input value 
// in our local state. We'll access the typed input value with e.target.value
function ControlledForm() {
    const [inputValue, setInputValue] = useState('Ask your question here')
    const isInputError = inputValue.includes('f')
    return (
        <div>
            {isInputError && (
                <div>🔥 You are not allowed to use the letter “f” here.</div>
            )}
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert me 🚨</button>
        </div>
    )
}


// Functions for uncontrolled forms
function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function UncontrolledForm() {
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='my_input' defaultValue='Type your text' />
            <button type='submit'>Enter</button>
        </form>
    )
}


export {ControlledForm, UncontrolledForm};