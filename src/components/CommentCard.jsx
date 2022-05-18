import { doc, setDoc, arrayUnion, onSnapshot, addDoc, updateDoc, collection, query, where, getDocs, getDoc, FieldValue } from "firebase/firestore";
import db from '../firebase/firebase';
import './css/commentCard.css';

const CommentCard = ({ list, movie }) => {

    // TODO:
    // Sort {list} before rendering it

    return (
        <div>
            {list && list.map((data, key) => (
                <li className="commentCard" key={key}>
                    <section className="commentRatingSection">
                        <h3>Rating: <span>{data[1]}</span></h3>
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

    async function handleVote(vote, comment, index) {
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