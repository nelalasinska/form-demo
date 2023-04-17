import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input placeholder="Nazwa użytkownika"
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                <input placeholder="Hasło"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                    required
                />
            </label>
            <button type="submit">Zaloguj</button>
            <button type="submit">Stwórz nowe konto</button>
        </form>
    );
};

export default Form;
