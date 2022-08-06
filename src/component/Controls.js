import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setType, setNumber } from '../redux/formSlice';

function Controls() {
    const number = useSelector(state => state.form.number);
    const type = useSelector(state => state.form.type);
    const dispatch = useDispatch();

    const handleNumberChange = (e) => {
        dispatch(setNumber(e.target.value));
    }

    const handleTypeChange = (e) => {
        dispatch(setType(e.target.options[e.target.selectedIndex].value));
    }

    return (
        <div className='controls'>
            <form>
                <label htmlFor='paragrafs'>Paragrafhs: </label>
                <input type='number' min='1' id='paragrafs' name='paragrafs' value={number} onChange={(e) => handleNumberChange(e)} />
                <label htmlFor='include-html' className='include-html-label'>Html: </label>
                <select id='include-html' name='include-html' onChange={(e) => handleTypeChange(e)} defaultValue={type}>
                    <option value='html'>Yes</option>
                    <option value='text'>No</option>
                </select>
            </form>
        </div>
    )
}

export default Controls;