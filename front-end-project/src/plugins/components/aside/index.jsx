import React, {useState} from 'react';
import api from '../../services/api'
import '../../../input.css';

const Aside = (props) => {
    const {handleSubmit, title, setTitle, notes, setNotes} = props;

    return (
        <div className='mb-7 mt-5 py-7 px-5  h-auto w-[350px] bg-white shadow-custom rounded-lg self-center md:fixed md:self-start md:mr-[350px]' id="aside">
            <strong className="text-xl text-center block text-gray-800">Caderno de Notas</strong>
            <form className="mt-7" onSubmit={handleSubmit}>
                <>
                <div className="border-gray-500 my">
                    <label htmlFor="title" className="text-gray-400 text-sm bold block">Titulo da Anotação</label>
                    <input className="w-full h-8 text-sm text-gray-600 border-b border-b-gray-200"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required

                    />
                </div>

                <div>
                    <label htmlFor="nota" className="text-gray-400 text-sm bold block">Anotações</label>
                    <textarea className="mx-2 w-full h-48 text-sm text-gray-600 border-b border-b-gray-200 bg-white resize-none" 
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        required
                    />
                </div>
                </>
                <button type="submit" className="w-full border-0 my-7 bg-red-400 hover:bg-red-300 disabled:bg-rose-100 rounded-lg py-4 px-5 bolder text-base text-white"
                disabled={!notes || !title}
                
                >
                    Salvar

                </button>
            </form>
        </div>
    )
}

export default Aside;