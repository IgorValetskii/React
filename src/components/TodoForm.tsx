import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
}
const TodoForm = ({ onInputChange, ...props }: Props) => {
    return (
        <form {...props}>
            <input
                className="form-control"
                placeholder="What would you like to get done?"
                onChange={onInputChange}
            />
            <button className="btn btn-primary">Create</button>
        </form>
    );
};
export default TodoForm;
