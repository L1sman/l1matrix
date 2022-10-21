import {useState} from "react";


function Form({ onSubmit }) {
    const [inputName , setInputName] = useState('');
    const [inputDate , setInputDate] = useState('');

    const getInfo = (e) =>  {
        e.preventDefault()
            const today = new Date();
            const birthDate = new Date(inputDate);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

         const user = {
            name: inputName,
            birthDate: inputDate,
             age: age
        }
        onSubmit(user);

    }

    return (
        <form className="form flex" onSubmit={getInfo}>
            <div className="form__inputs">
            <input className="form__input"
                type="text"
                placeholder="Имя"
                onChange={ (e) => setInputName(e.target.value)}
                required
            />
            <input className="form__input"
                type="date"
                onChange={ (e) => setInputDate(e.target.value)}
                required
            />
            </div>
            <button className="form__btn">Посчитать</button>
        </form>
    )
}

export default Form;