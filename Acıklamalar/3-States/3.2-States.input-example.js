// Input için State Tanımı Yapmak


// import {useState} from 'react'

// function InputExample() {

//     const [name, setName] = useState("Mehmet")
//     const [surname, setsurname] = useState("Seven")

//     const onChangeName = ((event) => {
//      setName(event.target.value)
//     })
    
//     const onChangesurname = ((event) => {
//      setsurname(event.target.value)
//     })
//     return (
//         <div>
//             Name 
//             <br />
//             <input value={name} onChange = {onChangeName}/>
//             {/* <input value={name} onChange = {(event) => setName(event.target.value)}/> */}

//             <br /> 
//             Surname 
//             <br />
//             <input value={surname} onChange = {onChangesurname}/>
            
//               <br /> <br />
//             {name} {surname}
//         </div>
//     )
// }

// export default InputExample

// Burda bizim bir input'umuz olacak bu input'un içine veri girilmeye başlandığında biz o ilgili veriyi state'imize de yazmaya çalışcaz.

// useState("Mehmet") diyerek varsayılana Mehmet'i atadığımda inputa Mehmet'ten başka bir şey yazamıyorum, çünkü state'imdeki ifade sabit. Yapmamız gereken şey input'a bir veri girildiğinde onchange olduğunda o input gidip o input'un içindeki datayı state'imede yazmamız gerekiyor. {(event) => setName(event.target.value)} onchange olayıyla alakalı detayları bana veren bir event var sonrasında o input'un içindeki değeri state'imize yazmak istiyorsak eventin altındaki targetın altındaki value değerini kullanmalıyız. Döndüğümüzde artık input'un içine istediğimiz şeyi yazabiliyoruzz. 

// illa bu fonksiyonu div'in içinde yazmak zorunda değiliz dışarda da yazabiliriz.

// Peki bizim onlarca inputumuz olursa ben her defasında her input için bir tane fonksiyon mu yazıcam bu oldukça zahmetli bir iş değil mi. Form işlemlerini yapacabileceğimiz bir kütüphane ile bu işlemleri yapmak oldukça kolay. Ama o kütüphanenin nasıl çalıştığını anlayabilmemiz için bunları bilmemizde önemli.

import {useState} from 'react'

function InputExample() {

    const [form, setForm] = useState({name: "", surname: ""});
    

    const onChangeInput = (e) => {
     setForm({...form, [e.target.name]: e.target.value})
    }
    
 // Burda birden fazla name surname stateleri yazmak yerine tek state'de hem name hemde surname inputunu gördük. Ayrıca bu sayede tek bir fonksiyon yazdık, aşağıdada vererek işi kurtardık. Bundan sonra formic isminde göreceğimiz kütüphane ile işimizi çok daha kolay bir şekilde yönetebilmeye başlıyoruz. Ama Kütüphanenin tam olarak ne yaptığını anlayabilmemiz için burdaki mantığı da anlamamız gerekiyor.
 
    return (
        <div>
            Name 
            <br />
            <input name="name" value={form.name} onChange = {onChangeInput}/>
            {/* <input value={name} onChange = {(event) => setName(event.target.value)}/> */}

            <br /> 
            Surname 
            <br />
            <input name="surname" value={form.surname} onChange = {onChangeInput}/>
            
            <br />
             {form.name} {form.surname}
        </div>
    )
}

export default InputExample