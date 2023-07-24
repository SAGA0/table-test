import Input from '../components/input/input'
import Table from '../components/table/table'
import './sass/index.scss'
import styles from '../components/input/input.module.scss'
import Pagination from '../components/navlist/pagination'
import { useStore } from '../store/store'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

function App() {

    const { userStore } = useStore()

    useEffect(() => {
        userStore.fetchData()
    }, [])

    return (
        <div className={styles.container}>

            <Input />
            <Table data={userStore.data} />
            <button className="btn btn-ghost absolute left-40 mt-5" onClick={() => userStore.prevStep()}>Назад</button>
            <button className="btn btn-ghost absolute right-40 mt-5" onClick={() => userStore.nextStep()}>Далее</button>
            <Pagination allData={userStore.allData} page={userStore.page} />




        </div >
    )
}

export default observer(App)
