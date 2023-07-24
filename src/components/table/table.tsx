import styles from './table.module.scss'
import { observer } from "mobx-react-lite"
import { User } from '../../store/listinfo'

interface Props {
    data: User[]
}




const Table = observer((props: Props) => {

    const { data = [] } = props



    return (

        <table className={`${styles.mtable} table-lg border-collapse mt-5 `}>
            {/* head */}
            <thead className=" bg-black" >
                <tr className=" bg-black">
                    <th>ID</th>
                    <th>Заголовок</th>
                    <th>Описание</th>
                </tr>
            </thead>

            <tbody className=" bg-slate-50 ">
                {data.map((item) => (
                    <tr key={item.id} className={'hover'}>
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
