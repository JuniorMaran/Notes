
import React, {useState, useEffect} from 'react';
import api from '../services/api';
import Notes from './notes';
import Aside from './aside';
import '../../input.css';

const Notepad = () => {
    const [allNotes, setAllNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    
    const handleSubmit  = async (event) => {
        event.preventDefault();
        const payload = {
            title,
            notes,
            priority: false
        };
        
        const response = await api.post('/annotations', payload);
    
        setTitle('');
        setNotes('');
        setAllNotes(prevNotes => [...prevNotes, response.data]);
    };
    
    const deleteNote = async (id) => {
        await api.delete(`/annotations/${id}`);
    
        setAllNotes(allNotes.filter(note => note._id !== id)); 
    };
    
    const getAllNotes = async () => {
        const response = await api.get('/annotations');
        setAllNotes(response.data);
    };

    useEffect(() => {
        getAllNotes();
    }, []);
    
    

    return (
        <div className="flex flex-col items-center  md:flex-row " id="Notepad">
            <Aside 
                handleSubmit={handleSubmit}
                notes={notes} 
                setNotes={setNotes} 
                setAllNotes={setAllNotes} 
                title={title} 
                setTitle={setTitle}/>
            <Notes 
                deleteNote={deleteNote}
                allNotes={allNotes}
                setAllNotes={setAllNotes}
            />
        </div>
    )
}

export default Notepad;