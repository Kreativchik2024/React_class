import { useEffect, useState } from "react"
import axios from "axios"
import Header from "@components/UI/Header"
import Footer from "@components/UI/Footer"

import Image from "@components/image"
import animeImgUrl from "./images/2.png"
const API_URL = import.meta.env.VITE_API_URL
function App() {
  const [items, setItems] = useState([])
  const [tempText, setTempText] = useState("Hello Worrld!")
  const pClick = () => {
    console.log("нажали на р")
    setTempText(10)
  }

  useEffect(()=> {
    axios.get(`${API_URL}/items`)
    .then(response => setItems(response.data))
    .catch(error => console.error(error))
  },[])
    return (
      <>
      <p onClick = {pClick} onMouseEnter={()=>console.log("навели на р ")}>{tempText}</p>
      <Header text = "шапка старницыsss" title = "HELLO" />
      <h1>Список Вещей</h1>
      
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>:{item.description}
          </li>
        ))}
      </ul>
      
      <Image imageUrl={animeImgUrl} />
      <Footer />
      </>
    )
}

export default App
