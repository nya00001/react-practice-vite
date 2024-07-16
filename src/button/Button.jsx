
import styles from './Button.module.css'

function Button () {

    let count = 0;

    const handleClick = (e) => e.target.textContent = 'Clicked';
    const handleClick3 = (user) => {
        if(count <3) {
            count++;
            console.log(`${user} clicked me! ${count} times`);
    } else {
        console.log(`${user} stop clicking me!`);
    }
    };

    const handleClick2 = () => 
        console.log(`${user} stop clicking me!`);

    return (

        <button className={styles.button} onDoubleClick={(e) => handleClick(e)}>
            Click Me 
        </button>
    );
}
export default Button