import 'material-icons/iconfont/material-icons.css';
import styles from './input.module.scss'

const Input = () => {


    return (
        <div className={styles.main}>

            <input type="Поиск" placeholder="Type here" className={` ${styles.minput} max-w-xs w-96`} />
            <span className='material-icons-outlined'>search</span>


        </div>

    )
}

export default Input
