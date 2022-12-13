import classes from './Error.module.css';

const Error = () => (
    <div className={classes.error}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
    </div>
)

export default Error;