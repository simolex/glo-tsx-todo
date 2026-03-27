import { ChangeEvent, SubmitEvent, useState } from 'react'
import './Form.scss'

interface FormProps {
    createNewTodo: Function
}

export const Form = (props: FormProps) => {
    const { createNewTodo } = props;

    const [text, setText] = useState<string>('')

    const formSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        if (text) {
            createNewTodo(text)
            setText('')
        }
        e.preventDefault()
    }

    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input type="text" onChange={changeText} value={text} />
                    <button></button>
                </label>
            </form>
        </div>
    )
}