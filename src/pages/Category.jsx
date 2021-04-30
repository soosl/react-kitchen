import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';

const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const { goBack } = useHistory();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
};

export { Category };
