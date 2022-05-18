import { doc, setDoc, arrayUnion, onSnapshot, addDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import db from '../firebase/firebase';
import './css/commentCard.css';

const CommentCard = ({ list, movie }) => {

    return (
        <div>
            {list && list.map((data, key) => (
                <li className="commentCard" key={key}>
                    <section className="commentRatingSection">
                        <h3>Rating: <span>5</span></h3>
                        <button onClick={() => handleVote(1, data)}>+</button>
                        <button onClick={() => handleVote(-1, data)}>-</button>
                    </section>

                    <section className="commentRatingText">
                        <h3>{data}</h3>
                    </section>
                </li>
            ))}
        </div>
    )

    async function handleVote(vote, comment) {
        console.log(vote);
        console.log(comment);
        console.log(movie.original_title);

        // 1: Fetch current value from selected comment
        // 2: Combine old vote value with new vote value
        // 3: Replace the old vote value with the combined vote value
    }
}

export default CommentCard;