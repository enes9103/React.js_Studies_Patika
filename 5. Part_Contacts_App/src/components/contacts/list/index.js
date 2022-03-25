import {useState} from 'react'

function List( {contacts}) { // {contacts} ile components index'den gönderdiğimiz contacts hook'unu aldık ve listelicez onu.

    const [filterText, setFilterText] = useState("")

    // Önce Contact'ı filtreleyip sonra listelenmiş sonuçları maplememiz gerekiyor.
     // Burda dikkat etmemiz gereken şey ismini de yazsa telefonunu da yazsa bunu kullanıcıya göstermemiz gerekiyor.
     // Burda item'in keyleri phone_number ve fullName'dir. Some() burda herhangi biri şarta uyuyorsa true dönmesini sağlıyor.
    const filtered = contacts.filter((item) => {
return Object.keys(item).some((key) => {
    return item[key] // bunu item.fullName gibi düşünebiliriz.
    .toString()
    .toLowerCase() // Arama yaparken küçük büyük harf problemi yaşamamk adına hepsini küçük harfe çevirdik.
    .includes(filterText.toLocaleLowerCase()) // FilterText aradğımız değerin içinde var mı yok mu anlamak için.
})
    })

    console.log("filtered", filtered);
    return (
        <div>
          {/* Filtreleme */}
            <input placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
           <ul className="list">
               {filtered.map((contact, i) => (
                   <li key={i}>
                       <span>{contact.fullName}</span>
                       <span>{contact.phone_Number}</span>
                   </li>
                   ))} 
           </ul>

           <p>
              Total Contacts ({filtered.length})
           </p>
        </div>
    )
}

// en son filtered'ı mapleyerek ekrana yazdırdım.
export default List

// Her map kullandığımızda indis numarasını kullanmayı unutma. Listeleme elemanının en dışındaki elemana vermek suretiyle.