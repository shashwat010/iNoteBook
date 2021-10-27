import NoteContext from "./NoteContext"
import { useState } from "react"

const NotesState = (props) => {
    const initialNotes = [
        {
            "_id": "615741b4131f72662b6de935",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Meet friend",
            "desc": "all school friends",
            "tag": "Travel",
            "date": "2021-10-01T17:13:24.563Z",
            "__v": 0
        },
        {
            "_id": "615890cc21af24193b10d85d",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Buy Clothes",
            "desc": "shoes,pyjama,t-shirt",
            "tag": "Shopping",
            "date": "2021-10-02T17:03:08.066Z",
            "__v": 0
        },
        {
            "_id": "615741b4131f72662b6de935",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Meet friend",
            "desc": "all school friends",
            "tag": "Travel",
            "date": "2021-10-01T17:13:24.563Z",
            "__v": 0
        },
        {
            "_id": "615890cc21af24193b10d85d",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Buy Clothes",
            "desc": "shoes,pyjama,t-shirt",
            "tag": "Shopping",
            "date": "2021-10-02T17:03:08.066Z",
            "__v": 0
        },
        {
            "_id": "615741b4131f72662b6de935",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Meet friend",
            "desc": "all school friends",
            "tag": "Travel",
            "date": "2021-10-01T17:13:24.563Z",
            "__v": 0
        },
        {
            "_id": "615890cc21af24193b10d85d",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Buy Clothes",
            "desc": "shoes,pyjama,t-shirt",
            "tag": "Shopping",
            "date": "2021-10-02T17:03:08.066Z",
            "__v": 0
        },
        {
            "_id": "615741b4131f72662b6de935",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Meet friend",
            "desc": "all school friends",
            "tag": "Travel",
            "date": "2021-10-01T17:13:24.563Z",
            "__v": 0
        },
        {
            "_id": "615890cc21af24193b10d85d",
            "user": "61543ba7dc1acb0b52be5078",
            "title": "Buy Clothes",
            "desc": "shoes,pyjama,t-shirt",
            "tag": "Shopping",
            "date": "2021-10-02T17:03:08.066Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(initialNotes)
    const addNote=(title,desc,tag)=>{
        const note={
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
    const deleteNote=()=>{

    }
    const editNote=()=>{

    }

    return (
        <NoteContext.Provider value={{ notes,addNote,deleteNote,editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesState
