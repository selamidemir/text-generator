import React, { useContext } from 'react';
import FormContext from '../context/formContext';
import { paragrafsText } from '../assets/paragrafs';

function Paragraf() {
    const { paragrafs, useHtml } = useContext(FormContext);
    const createParagrafs = () => {
        if(paragrafs<=0) return [];
        const allParagrafs = getParagrafText(paragrafs);
        return allParagrafs;
    }

    const getParagrafText = (paragrafsCount) => {
        const textsArray = [];
        let text =  paragrafsText[Math.floor(Math.random() * paragrafsText.length)];
        if(useHtml === 'Yes') text = `<p>${text}</p>`;
        textsArray.push(text);
        if(paragrafsCount>1) {
            paragrafsCount -= 1;
            textsArray.push(...getParagrafText(paragrafsCount));
        }
        return textsArray;
    }

    return (
    <div className='generated-text'>
        { createParagrafs().map((text, key) => <p key={key}>{text}</p>) }
    </div>
  )
}

export default Paragraf