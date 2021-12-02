import NoteContext from "./NoteContext"
import { useState } from "react"

const NotesState = (props) => {
    const host = "http://localhost:5000";
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes)

    // function to getNotes
    const getNotes = async() => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json)
    }

    // function to addNote
    const addNote = async(title, desc, tag) => {
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,desc,tag})
        });
        const note= await response.json();
        setNotes(notes.concat(note));
    }

    // function to deleteNote
    const deleteNote = async(id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // function to editNote
    const editNote = async (id, title, desc, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,desc,tag})
        });
        let newNotes=JSON.parse(JSON.stringify(notes));

        for (let index = 0; index < newNotes.length; index++) {
            if (newNotes[index]._id === id) {
                newNotes[index].title = title;
                newNotes[index].desc = desc;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesState
