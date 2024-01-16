import { useState } from "react";

export default function useHandleInputChange() {
    const [ loginData, setLoginData ] = useState<{ email: string; password: string }>({
        email: '',
		password: ''
	});
	const { email, password } = loginData;
    
    function handleInputChange(value: string, id: string) {
        setLoginData((prevState) => ({ ...prevState, [id]: value }))
    }

    return { email, password, handleInputChange }
}