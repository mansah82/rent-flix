import { doc, setDoc, arrayUnion, onSnapshot, addDoc, updateDoc, collection, query, where, getDocs, getDoc, FieldValue } from "firebase/firestore";
import { useEffect } from "react";
import db from '../firebase/firebase';
import './css/commentCard.css';

const CommentCard = ({ list, movie }) => {
    let sortedList = list.sort((a, b) => { return b[1] - a[1] })

    return (
        <div>
            {sortedList && sortedList.map((data, key) => (
                <li className="commentCard" key={key}>
                    <section className="commentRatingSection">
                        <p id="commentRatingText">Rating: <span>{data[1]}</span></p>
                        <button onClick={() => handleVote(1, data, key)}>+</button>
                        <button onClick={() => handleVote(-1, data, key)}>-</button>
                    </section>

                    <section className="commentRatingText">
                        <h3>{data[0]}</h3>
                    </section>
                </li>
            ))}
        </div>
    )

    async function handleVote(vote, comment) {
        const voteRef = doc(db, "movies", String(movie.id), String(comment[0]), String(comment[1]));
        const docRef = doc(db, "movies", String(movie.id));

        const oldVote = await getDoc(voteRef)
        const newVote = +vote + +oldVote.id

        updateDoc(docRef, {
            [String(comment[0])]: { 'vote': newVote }
        })
    }
}

export default CommentCard;