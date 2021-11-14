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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NDNiYTdkYzFhY2IwYjUyYmU1MDc4In0sImlhdCI6MTYzMzEwNzk0NX0.q4g3obTujGLaFMo5kbwXMJzwA5VAiTEcYQ6NnVHKpw8'
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
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NDNiYTdkYzFhY2IwYjUyYmU1MDc4In0sImlhdCI6MTYzMzEwNzk0NX0.q4g3obTujGLaFMo5kbwXMJzwA5VAiTEcYQ6NnVHKpw8'
            },
            body: JSON.stringify({title,desc,tag})
        });
        const json = response.json();

        const note = {
            "_id": "6158903c21af24193b10d85d",
            "user": "61543ba7dc1acb0b52be5078",
            "title": title,
            "desc": desc,
            "tag": tag,
            "date": "2021-10-02T17:03:08.066Z",
            "__v": 0
        }
        console.log("Adding note")
        setNotes(notes.concat(note));
    }

    // function to deleteNote
    const deleteNote = async(id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NDNiYTdkYzFhY2IwYjUyYmU1MDc4In0sImlhdCI6MTYzMzEwNzk0NX0.q4g3obTujGLaFMo5kbwXMJzwA5VAiTEcYQ6NnVHKpw8'
            },
        });
        const json = response.json();
        console.log(json)

        console.log("Deleting note" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // function to editNote
    const editNote = async (id, title, desc, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NDNiYTdkYzFhY2IwYjUyYmU1MDc4In0sImlhdCI6MTYzMzEwNzk0NX0.q4g3obTujGLaFMo5kbwXMJzwA5VAiTEcYQ6NnVHKpw8'
            },
            body: JSON.stringify({title,desc,tag})
        });
        const json = response.json();


        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.desc = desc;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesState
