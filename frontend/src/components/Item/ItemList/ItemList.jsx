import { useEffect, useState } from "react"
import axios from "axios"
import './style.css'
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
        <div>
        < h1 > Список Вещей</h1 >

            
                {items.map(item => (
                    <div key={item.id} className="item">
                        <strong>{item.name}</strong>:{item.description}
                        <div>{item.isAvailable ? ' В наличии ' : ' нет в наличии'}</div>
                    </div>
                ))}
            
            </div>
    </>
)

} 
else {
    return (
        <div className = "item">
            <h3>Вещей нет</h3>
        </div>
    )
}
}
export default ItemList