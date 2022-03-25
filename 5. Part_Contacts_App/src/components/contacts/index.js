// Bu dosya contact componentimizi çağırdığımızda kullanacağımız dosyamız.

import {useState, useEffect} from 'react'

import List from "./list";
import Form from "./Form";
import "./styles.css";
function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName: "Bill Gates",
            phone_Number: "+1-202-555-0149"
        }, {
            fullName: "Mahmut Tuncer",
            phone_Number: "05333333333"
        }
    ])

    useEffect(() => {
console.log(contacts)
    }, [contacts]) // form submit edildiğinde yapılan ekleme işlemini bize bildircek bu sayede. Yani contacts değiştiği anda loglanacak.


    return (
        
        <div id="container">
            <h1>Contacts</h1>
           <List contacts={contacts}/>  
           <Form addContact={setContacts} contacts={contacts}  />  
        </div>
    )
}
 // Forma birden fazla isim eklenmesini sağladık.
export default Contacts

// // Dikkat!!! list dizininin altında olusturdugumuz index dosyasını app.js'e eklemedik direk contact componentine yani buraya ekledik contact list contact'ın alt dizini olduğu için.

// <List contacts={contacts}/> ile eklenen kayıtları prop olarak list'e gönderdik