import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const {deleteNote} = context
    const { note,updateNote } = props;
    const delNote=()=>{
        deleteNote(note._id)
        props.showAlert("Note deleted","danger")
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.desc}</p>
                <i className="fas fa-trash-alt mx-2" onClick={delNote}></i>
                <i className="fas fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
