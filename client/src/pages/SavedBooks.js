import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {showBookRequest} from '../redux/actions';

export default function SavedBooks() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("state", state);

    React.useEffect(() =>{
        dispatch(showBookRequest())
    }, [])
    return (
        <div>
           d
        </div>
    )
}
