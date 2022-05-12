import { useEffect, useState } from 'react';
import './css/commentSection.css';
import { FaRegComments } from 'react-icons/fa'

const CommentSection = ({ selectedMovie }) => {
    useEffect(() => {
        appendFirestoreData(selectedMovie)
    }, [])

    return (
        <div id='commentSection'>
            <section id='commentInputContainer'>
                <form>
                    <input type='text' placeholder='Your thoughts...' id='textInputField' />
                    <button type='button' onClick={() => createNewComment()}>Send<FaRegComments /></button>
                </form>
            </section>

            <section>
                <ul id='commentList'>
                </ul>
            </section>
        </div>
    )

    function createNewComment() {
        const textInput = document.getElementById('textInputField');

        if (textInput.value == '') {
            textInput.placeholder = "Field can't be empty!"
        } else {
            textInput.placeholder = "Your thoughts..."

            // Create new list item
            const newText = document.createElement("li");
            newText.innerHTML = textInput.value

            // Push new item to list
            document.getElementById("commentList").prepend(newText)
            textInput.value = ''
        }
    }

    function appendFirestoreData(selectedMovie) {
        console.log('Movie id to fetch chat from:', selectedMovie.id);
        // Todo
    }
}

export default CommentSection;