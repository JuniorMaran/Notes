import React, { useState } from 'react';
import api from '../../../services/api';
import '../../../../index.css';

const Note = (props) => {
    const { data, deleteNote } = props;
    const [showPriority, setShowPriority] = useState(data.priority);



    const updateNote = async (event) => {
        event.preventDefault();
        const payload = {
            title: data.title,
            notes: event.target.value,
            priority: data.priority
        };

        await api.post(`/contents/${data._id}`, payload);

    };

    const updateTitle = async (event) => {
        event.preventDefault();

        console.log('event => ', event);
        const payload = {
            title: event.target.value,
            notes: data.notes,
            priority: data.priority
        };

        await api.post(`/contents/${data._id}`, payload);
    };

    const updatePriority = async (event) => {
        event.preventDefault();


        const payload = {
            title: data.title,
            notes: data.notes,
            priority: !data.priority
        };

        const response = await api.post(`/priorities/${data._id}`, payload);

        setShowPriority(response.data.priority);
    };

    return (
        <>
            <li key='1' className={`${showPriority ? 'bg-red-400' : 'bg-white'} shadow-custom m-5 p-5 max-w-[387px] rounded-lg xl:w-[387px]`}>
                <div className="flex items-center justify-between rounded-lg space-x-5">
                    <textarea
                        className={`p-2 block font-bold rounded-lg text-gray-900 flex-grow text-center break-words resize-none ${showPriority ? 'bg-red-300' : 'bg-white'}`}
                        onBlur={e => updateTitle(e)}
                    >
                        {data.title}
                    </textarea>
                    <div
                        className={`text-rose-100 font-bold cursor-pointer duration-200 ${showPriority ? 'text-rose-700' : 'text-red-400'}`}
                        onClick={() => deleteNote(data._id)}
                    >
                        x
                    </div>
                </div>

                <textarea className={`p-2 mt-2 mb-1 w-full rounded-lg h-32 text-sm text-gray-600 border-none bg-white resize-none ${showPriority ? 'bg-red-300' : 'bg-white'}`}
                    onBlur={e => updateNote(e)}
                >
                    {data.notes}
                </textarea>
                <span className={`font-bold cursor-pointer duration-200 ${showPriority ? 'text-rose-700' : 'text-red-400'}`}
                    onClick={(e) => updatePriority(e)}
                >!</span>

            </li>
        </>


    )
}

export default Note;