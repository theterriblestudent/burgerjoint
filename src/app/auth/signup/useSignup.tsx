'use client';
import { useFormState } from "react-dom";
import { onCreateAccountAction } from "@actions";


const useSignup = () => {
    const [state, action] = useFormState(onCreateAccountAction, {message: ""});

    return {state, action};
}

export default useSignup

