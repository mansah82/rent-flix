import { useEffect, useState, useRef } from 'react';
import './css/commentSection.css';
import { FaRegComments } from 'react-icons/fa'
import db from '../firebase/firebase';
import { doc, setDoc, arrayUnion, onSnapshot, addDoc, updateDoc, collection } from "firebase/firestore";


const CommentSection = ({ selectedMovie }) => {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        const unsubscribe = onSnapshot(doc(db, "movies", selectedMovie.original_title), (doc) => {
            if (doc.data() == undefined) return

            addPreviousComments(doc.data())
        });

        // Triggers when component is unmounted
        return () => {
            mounted.current = false;
            unsubscribe()
        };
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

        if (textInput.value == '') {
            textInput.placeholder = "Field can't be empty!"
        } else {
            textInput.placeholder = "Your thoughts..."

            const movieRef = doc(db, "movies", selectedMovie.title);
            setDoc(movieRef, { comment: arrayUnion(...[textInput.value]) }, { merge: true });
            textInput.value = ''
        }
    }

    function addPreviousComments(oldList) {
        const currentList = document.getElementById("commentList");
        currentList.innerHTML = '';

        for (let i = 0; i < oldList.comment.length; i++) {
            const newComment = document.createElement("li");
            newComment.innerHTML = oldList.comment[i];

            currentList.prepend(newComment)
        }
    }
}

export default CommentSection;