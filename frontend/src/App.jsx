import { useEffect, useState } from "react"
import axios from "axios"
import Header from "@components/UI/Header"
import Footer from "@components/UI/Footer"
const API_URL = import.meta.env.VITE_API_URL
function App() {
  const [items, setItems] = useState([])

  useEffect(()=> {
    axios.get(`${API_URL}/items`)
    .then(response => setItems(response.data))
    .catch(error => console.error(error))
  },[])
    return (
      <>
      <Header text = "шапка старницыsss" title = "HELLO" />
      <h1>Список Вещей</h1>
      
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>:{item.description}
          </li>
        ))}
      </ul>
      <Header text = "А что это тут происходит" title = "HELLO" />
      <Footer />
      </>
    )
}

export default App
