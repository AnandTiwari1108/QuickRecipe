import './App.css'
export const Recipe = (props) => {
    return(
        <>
        <div className='box'>
            <h1 >{props.title}</h1>
            <ol>
                {(props.ing).map(ingredients=>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Calories : {props.calories}</p>
            <img src={props.image} alt=''/>
        </div>
        </>
    );
}
