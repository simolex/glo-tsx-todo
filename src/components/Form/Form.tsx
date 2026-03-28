import { ChangeEvent, SubmitEvent, useState } from 'react'
import { FormBlock, FormButton, FormInput, FormLabel, FormWrapper } from './Form.styled';
import ButtonIcon from '../../assets/images/plus.png'

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormInput type="text" onChange={changeText} value={text} />
                    <FormButton icon={ButtonIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}