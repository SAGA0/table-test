import 'material-icons/iconfont/material-icons.css';
import styles from './input.module.scss'
import { useStore } from '../../store/store';

const Input = () => {


    const { userStore } = useStore()



    return (
        <div className={styles.main}>

            <input type="Поиск" placeholder="Ввод..." className={` ${styles.minput} max-w-xs w-96`} onChange={userStore.filterChange} />
            <span className='material-icons-outlined'>search</span>


        </div>

    )
}

export default Input
