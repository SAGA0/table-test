import styles from './table.module.scss'
import { observer } from "mobx-react-lite"
import { User } from '../../store/listinfo'
import { useStore } from '../../store/store'

interface Props {
    data: User[]
}




const Table = observer((props: Props) => {


    const { userStore } = useStore()
    const { data = [] } = props



    return (

        <table className={`${styles.mtable} table-sm border-collapse mt-5 `}>
            <thead className=" bg-gray-700" >
                <tr className=" bg-gray-700">
                    <th onClick={() => userStore.sortData('id')}>ID</th>
                    <th onClick={() => userStore.sortData('title')}>Заголовок</th>
                    <th onClick={() => userStore.sortData('body')}>Описание</th>
                </tr>
            </thead>

            <tbody className=" bg-slate-50 ">
                {data
                    .filter(item =>
                        Object.values(item)
                            .join('')
                            .toLowerCase()
                            .includes(userStore.filterText.toLowerCase())
                    )
                    .map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}

            </tbody>
        </table>
    )
})

export default Table
