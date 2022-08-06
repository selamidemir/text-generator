import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthText } from '../redux/formSlice';
import Loading from './Loading';
import Error from './Error';


function Paragraphs() {
    const paragraphs = useSelector(state => state.form.items);
    const number = useSelector(state => state.form.number);
    const type = useSelector(state => state.form.type);
    const isLoading = useSelector(state => state.form.isLoading);
    const error = useSelector(state => state.form.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthText({number: number, type:type}));
    },[number, type, dispatch]);

    return (
        <div className='generated-text'>
            { isLoading && <Loading />}
            { error && <Error message={error} />}
            { !isLoading && !error && paragraphs && paragraphs }
        </div>
    );
}

export default Paragraphs;