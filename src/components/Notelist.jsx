import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getNotesAsync,removeNotesAsync } from '../redux/notes/services';
import { selectNotes } from '../redux/notes/notesSlice';

const Notelist = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNotesAsync());
    },[dispatch]);
    const notes = useSelector(selectNotes);
    console.log(notes);
  return (
    <div>
        
        <div className="container-fluid">
            <div className="row justify-content-center ">
            {
                notes.map(note=>{
                    const color = note.color
                    console.log(color)
                    return(

                            <div 
                            className="notes-div col m-3"
                            key={note.id}
                                style={{backgroundColor: color}}
                            >
                                <div className="di"><h1>Note</h1></div>
                                <p>{note.title}</p>
                                <button onClick={async () => await dispatch(removeNotesAsync(note.id))} className='btn btn-light m-3'>Sil</button>
                               
                               
                            </div>



                    )
                })
            }
        </div>
        </div>
        
    </div>
  )
}

export default Notelist