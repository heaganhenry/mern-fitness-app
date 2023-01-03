import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, reps, weight };

        const response = await fetch('api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setError(null);
            setTitle('');
            setReps('');
            setWeight('');
            console.log('Workout added');
            setEmptyFields([]);
            dispatch({ type: 'CREATE_WORKOUT', payload: json });
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={emptyFields.includes('title') ? 'empty' : ''}
            />

            <label>Reps:</label>
            <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className={emptyFields.includes('reps') ? 'empty' : ''}
            />

            <label>Weight (lbs):</label>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={emptyFields.includes('weight') ? 'empty' : ''}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;