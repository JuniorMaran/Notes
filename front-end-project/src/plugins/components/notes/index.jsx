
import React, {useEffect} from 'react';
import Note from './components/note';
import api from '../../services/api'
import '../../../../src/input.css';

const Notes = (props) => {
    const {allNotes, setAllNotes, deleteNote} = props;

    return (
        <div className='md:ml-[350px]' id="Notes">
            <ul className='grid grid-cols-1 gap-5 list-none md:grid-cols-2 self-center justify-normal'>
                {allNotes.map(data => (
                    <Note data={data} setAllNotes={setAllNotes} deleteNote={deleteNote}/>

                ))}

            </ul>
        </div>
    )
}

export default Notes;