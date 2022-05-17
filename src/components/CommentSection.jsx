import { useEffect, useState } from 'react';
import './css/commentSection.css';
import { FaRegComments } from 'react-icons/fa'
import db from '../firebase/firebase';
import { addDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { doc, setDoc, arrayUnion } from "firebase/firestore";


const CommentSection = ({ selectedMovie }) => {

    useEffect(() => {
        appendFirestoreData(selectedMovie)

    }, [])

    return (
        <div id='commentSection'>
            <section id='commentInputContainer'>
                <form onSubmit={(event) => {
                    // PreventDefault = No page refresh on submit
                    event.preventDefault()
                    createNewComment()
                }}>
                    <input type='text' placeholder='Your thoughts...' id='textInputField' />
                    <button type='button' onClick={() => createNewComment(selectedMovie)}>Send<FaRegComments /></button>
                </form>
            </section>

            <section>
                <ul id='commentList'>
                </ul>
            </section>
        </div>
    )

    async function createNewComment(selectedMovie) {
        const textInput = document.getElementById('textInputField');

        const movieRef = doc(db, "movies", selectedMovie.title);
        setDoc(movieRef, { comment: arrayUnion(...[textInput.value]) }, { merge: true });

    }

    function appendFirestoreData(selectedMovie) {
        console.log('Movie id to fetch chat from:', selectedMovie.id);
        // Todo
    }
}

export default CommentSection;