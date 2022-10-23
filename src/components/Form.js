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
            <div className="input__wrapper">
                <label htmlFor="name" className="form__label">Имя</label>
                <input id="name" className="form__input"
                type="text"
                onChange={ (e) => setInputName(e.target.value)}
                required
                       maxLength={20}
            />
            </div>
            <div className="input__wrapper">
                <label htmlFor="date" className="form__label">Дата рождения </label>
                <input id="date" className="form__input"
                type="date"
                onChange={ (e) => setInputDate(e.target.value)}
                required
            />
            </div>
            </div>
            <button className="form__btn">Посчитать</button>
        </form>
    )
}

export default Form;