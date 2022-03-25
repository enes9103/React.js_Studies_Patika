import {useState, useEffect} from 'react'

const initialFormValues = { fullName: "", phone_Number: ""} // Tüm girilen input değerlerini aşağıda tek tek yazmamak için initialFormValues değerine atadık.



function Form({addContact, contacts}) { // Forma birden fazla isim eklenmesini sağladık. 

    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts]) // Contact değişmisse input'un içini boşalt diyoruz.

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
     }

    const onSubmit = ((e) => {
        e.preventDefault()

        if (form.fullName === "" || form.phone_Number === "") {
            return false;
        }

        addContact([...contacts, form]) // Forma birden fazla isim eklenmesini sağladık. 
        
        // setForm(initialFormValues); // Set form işlemini onSubmitte değilde yan etkileri kullanarak yapmak istiyorsak

        // setForm({fullName: "", phone_Number: ""}) // İsim ve numarayı ekledikten sonra tekrar placeholder gözükmesi için yaptık.

        // setForm(initialFormValues) // setForm işlemini onSubmitte yapmak istemiyorsak bunu yan etkileri kullanarak yapmak istiyorssak. o zaman useEffect olusturarak yapalım.


     })

     
    return (
        <form onSubmit={onSubmit}>

        <div>
        <input 
        name="fullName" 
        placeholder="Full Name" 
        value={form.fullName}
        onChange={onChangeInput}
        />
        </div>
        
        <div>
        <input 
        name="phone_Number" 
        placeholder="Phone Number" 
        value={form.phone_Number}
        onChange={onChangeInput}
        />
        </div>

        <div className="btn">
            <button> Add</button>
        </div>

        </form>
    )
}

export default Form

// </form> etiketinin varsayılan bir davranışı var formun gideceği bir endpoint olur veri oraya gider veya ordan veri çeker. Dolayısıyla burda bir sayfa yenilenme işlemi olur. Bizim varsayılan işlemi submit işlemi yapıldığında durdurmamız lazım. Onuda preverntDefault komutuyla durdurabiliriz.


// Burdaki kayıtları bir state'e eklemek gerekiyor ki list componentinde onları listeleyebilelim ben eğer kullanıcı kayıtlarını bu form componenti içindeki bir state'de tutarsam bu state'i list componentine nasıl taşıcam.

// O yüzden biz o state'i yani kullanıcıların ekleneceği state'i eğer bu contacts componentinde tutarsam ve bu state'e ekleme yapılcak olan fonksiyonu Form componentine geçersem problem kalmayacak.