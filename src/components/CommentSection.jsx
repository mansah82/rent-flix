import { doc, setDoc, arrayUnion, onSnapshot, addDoc, updateDoc, collection } from "firebase/firestore";
import { useEffect, useState, useRef } from 'react';
import { FaRegComments } from 'react-icons/fa'
import db from '../firebase/firebase';
import CommentCard from './CommentCard';
import './css/commentSection.css';

const CommentSection = ({ selectedMovie }) => {
    const mounted = useRef(false);
    const [oldComments, setOldComments] = useState();

    useEffect(() => {
        mounted.current = true;

        const unsubscribe = onSnapshot(doc(db, "movies", String(selectedMovie.id)), (doc) => {
            if (doc.data() == undefined) return
            loadOldCommentSection(doc.data())
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
                {oldComments ? (
                    <CommentCard list={oldComments} movie={selectedMovie} />
                ) : (
                    <p>Be the first to comment!</p>
                )}
            </section>
        </div>
    )

    async function createNewComment() {
        const textInput = document.getElementById('textInputField');
        let text = textInput.value.replace(/\s/g, "");

        if (text == '') {
            textInput.placeholder = "Field can't be empty!"
        } else {
            textInput.placeholder = "Your thoughts..."
            const movieRef = doc(db, "movies", String(selectedMovie.id));

            setDoc(movieRef, {
                [text]: { 'vote': 0 }
            }, { merge: true });
            textInput.value = ''
        }
    }

    function loadOldCommentSection(oldList) {
        let oldCommentList = [];

        for (let [key, name] of Object.entries(oldList)) {
            oldCommentList.push([key, name.vote])
        }

        setOldComments(oldCommentList);
    }
}

export default CommentSection;