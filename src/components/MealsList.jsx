import { Meal } from './Meal';
const MealsList = (props) => {
    const { meals } = props;
    return (
        <div className='catalog-list'>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
};

export { MealsList };
