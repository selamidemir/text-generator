import React, { useContext, useEffect, useState } from 'react';
import FormContext from '../context/formContext';

function Paragraphs() {
    const { number, useHtml } = useContext(FormContext);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        const createParagraphs = () => {
            if (number <= 0) return [];
            return getParagraphText(number);
        }

        const getParagraphText = (paragraphsCount) => {
            const textsArray = [];
            let text = paragraphTexts[Math.floor(Math.random() * paragraphTexts.length)];
            if (useHtml === 'Yes') text = `<p>${text}</p>`;
            textsArray.push(text);
            if (paragraphsCount > 1) {
                paragraphsCount -= 1;
                textsArray.push(...getParagraphText(paragraphsCount));
            }
            return textsArray;
        }

        setParagraphs(createParagraphs());

    }, [number, useHtml]);

    return (
        <div className='generated-text'>
            {paragraphs.map((text, key) => <p key={key}>{text}</p>)}
        </div>
    );
}

export default Paragraphs;