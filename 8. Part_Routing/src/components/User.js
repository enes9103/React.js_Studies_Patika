import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import  axios from "axios";


function User() {
const { id } = useParams() // useParams hook'unu aldık. // useParams hookunu kullanarak o id'yi veya gönderdiğimiz parametrenin ismi neyse onu karşılayıp hemen altında da kullanabiliyoruz.

const [loading, setLoading] = useState(true);

const [user, setUser] = useState({});

useEffect(() => {
   axios(`https://jsonplaceholder.typicode.com/users/${id}`) 
   .then((res) => setUser(res.data))
   .finally(() => setLoading(false))
}, [id]) // Burası normalde component sadece mount olduğu an çalışıyor, ama burasının id değiştiği anda da çalışması lazım o yüzden dependency kısmına id'yi yazdık.
    return (
        <div>
           <h1>User Detail</h1>
           {loading && <div> Loading...</div>} {/* loading çalışıyorkenen yani yükleniyork loading yazısını göster */}
           {!loading && <code>{JSON.stringify(user)}</code>} {/* loading yazısı yoksa json olarak gösterdik user'ı */} 
           <br /> 
           <br />
           <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
           
        </div> 
    )
}

export default User
