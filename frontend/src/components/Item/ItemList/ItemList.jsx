import { useEffect, useState } from "react"
import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL

const ItemList = () => {
    const [items, setItems] = useState([])


    useEffect(() => {
        axios.get(`${API_URL}/items`)
            .then(response => setItems(response.data))
            .catch(error => console.error(error))
    }, [])
    if (items.length > 0) {
    return (
        <>
        < h1 > Список Вещей</h1 >

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>:{item.description}
                    </li>
                ))}
            </ul>
    </>
)

} 
else {
    return (
        <div className = "Items">
            <h3>Вещей нет</h3>
        </div>
    )
}
}
export default ItemList