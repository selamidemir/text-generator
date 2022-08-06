import React, { useContext } from 'react';
import FormContext from '../context/formContext';

function Controls() {
    const { paragrafs, setParagrafs, setUseHtml } = useContext(FormContext);
    const handleNumberChange = (e) => {
        e.preventDefault();
        setParagrafs(e.target.value);
    }

    const handleHtmlChange = (e) => {
        e.preventDefault();
        setUseHtml(e.target.value);
    }

    return (
        <div className='controls'>
            <form>
                <label htmlFor='paragrafs'>Paragrafhs: </label>
                <input type='number' min='0' id='paragrafs' name='paragrafs' value={paragrafs} onChange={(e) => handleNumberChange(e)} />
                <label htmlFor='include-html' className='include-html-label'>Html: </label>
                <select id='include-html' name='include-html' onChange={(e) => handleHtmlChange(e)} defaultValue='No'>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            </form>
        </div>
    )
}

export default Controls;