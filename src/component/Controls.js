import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setHtml, setNumber } from '../redux/formSlice';

function Controls() {
    const dispatch = useDispatch();

    const handleNumberChange = (e) => {
        dispatch(setNumber(e.target.value));
    }

    const handleHtmlChange = (e) => {
        dispatch(setUseHtml(e.target.value));
    }

    return (
        <div className='controls'>
            <form>
                <label htmlFor='paragrafs'>Paragrafhs: </label>
                <input type='number' min='0' id='paragrafs' name='paragrafs' value={number} onChange={(e) => handleNumberChange(e)} />
                <label htmlFor='include-html' className='include-html-label'>Html: </label>
                <select id='include-html' name='include-html' onChange={(e) => handleHtmlChange(e)} defaultValue={useHtml}>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </form>
        </div>
    )
}

export default Controls;