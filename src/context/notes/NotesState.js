import NoteContext from "./NoteContext"
import { useState } from "react"

const NotesState = (props) => {
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesState
