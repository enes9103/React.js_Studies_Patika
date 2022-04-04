// yard add formic diyerek kurulumu başlatıyoruz.
// yarn add yup diyerek kurabiliriz validasyon'u sağlayacağımız kütüphaneyi.


// import './App.css';
// import { Formik, Field, Form } from 'formik';


// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}

//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     > 
//     {/* onSubmit ile inputa girdiğimiz değerler neler ise submit ettiğimizde onları gösteriyor. */}

//       <Form> {/* Bu bölümde Form ve Field componentleri kullanılıyor. */}
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />
//         {/* Burda dikkat etmemiz gereken şey field kısmına name'i verirken yukarda yazdığımız key ne ise aynısını vermemiz gerekiyor yani firstName ise firstName gibi. Field bölümündeki id'yi silsekte çok bir şey değişmiyor. Burda hiçbir sey yapmadık ne setState yaptık, ne state tanımladık sadece formiğin bize vermiş olduğu tanımları kullandık ve formumuzu ortaya çıkarmış olduk.  */}

//         <br /><br />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <br /><br />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />

//         <br /><br />

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//     </div>
//   );
// }

// export default App;

// // yard add formic diyerek kurulumu başlatıyoruz.

// //-------------------------------------------------------------------------------------------------------------------

// // handleSubmit & handleChange

// // Biz formiğin bize vermiş olduğu form ve field componentlerini kullanmayalım doğrudan html'deki form ve input etiketlerini kullanalım. Çoğu zaman Form ve Field componentlerini kullanamıyoruz çünkü bir takım özelleştirmeler gerekiyor işte o gibi durumlarda aşğıdaki gibi yapabiliriz.
// import './App.css';
// import { Formik } from 'formik';


// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}

//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >

//       { // handleSubmit ile submit butonuna basınca console'da initialValues değerlerinin görünmesini sağladık, onChange ile girdiğimiz değerlerin console'da görünmesini sağladık.
//         ( { handleSubmit, handleChange }) => (
//         <form onSubmit={handleSubmit}> 
//         <label htmlFor="firstName">First Name</label>
//         <input name='firstName' onChange={handleChange} />

//         <br /><br />

//         <label htmlFor="lastName">Last Name</label>
//         <input name='lastName' onChange={handleChange} />

//         <br /><br />
//         {/* Burda artık event.target.value şeklinde ilerlememe gerek yok, handleChange ile işim görülüyor */}
//         <label htmlFor="email">Email</label>
//         <input name='email' onChange={handleChange} />

//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>
//         )
//       }
//     </Formik>
//     </div>
//   );
// }

// export default App;

//-------------------------------------------------------------------------------------------------------------------

// Radio - Checkbox - Dropdown

// Şimdide text input dışında kalan checkbox radio button veya dropdown ile nasıl çalışabilirim formic ile birlikte bunu öğrenmeye çalışacağız. Radio ile başlayabiliriz.

// import './App.css';
// import { Formik } from 'formik';


// function App() {
//   return (
//     <div className="App">
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           firstName: 'Mehmet',
//           lastName: 'Seven',
//           email: 'mehmetseven@gmail.com',
//           gender: "female", // ilk aşamada seçili gelmesi için yazdık.
//           hobies: [],
//           country: "Turkey",
//         }}

//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >

//         {
//           ({ handleSubmit, handleChange, values }) => (
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="firstName">First Name</label>
//               <input name='firstName' value={values.firstName} onChange={handleChange} /> 
//               {/* input'un içine values değerlerini atamasaydık inputlarda varsayılan değerler görünmezdi. */}

//               <br /><br />

//               <label htmlFor="lastName">Last Name</label>
//               <input name='lastName' value={values.lastName} onChange={handleChange} />

//               <br /><br />

//               <label htmlFor="email">Email</label>
//               <input name='email' value={values.email} onChange={handleChange} />

//               <br /><br />

//               <span>Male</span>
//               <input type="radio"
//                name='gender'
//                value="male"
//                onChange={handleChange} 
//                checked={values.gender === "male"} // male'i seçmesi için yaptık

//                />

//               <span>Female</span>
//               <input type="radio"
//                name='gender'
//                value="female"
//                onChange={handleChange}
//                checked={ values.gender === "female"}
//                />

//               <br /><br />

//               <div>
//               <input type="checkbox" name='hobies' value="Football" onChange={handleChange} />
//                 Football
                
//               </div>
//               <div>
//               <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} />
//                 Cinema
                
//               </div>
//               <div>
//               <input type="checkbox" name='hobies' value="Photography" onChange={handleChange} />
//                 Photography
                
//               </div>

//               <br /> <br />

//               <select name="country" onChange={handleChange} value={values.country}>
//                 <option value="turkey">Turkey</option>
//                 <option value="england">England</option>
//                 <option value="usa">USA</option>
//               </select>
//               <br /><br />

//               <button type="submit">Submit</button>
//               <br /><br />

//               {JSON.stringify(values)} {/* Tüm formun verilerini göstermesi için*/}
//             </form>
//           )
//         }
//       </Formik>
//     </div>
//   );
// }

// export default App;


//-------------------------------------------------------------------------------------------------------------------

// useFormic

// Kodumuzu daha güzel ve temiz hale getirmek için neler yapabiliriz onlara bakmaya çalışcaz. Ben useFormic'i kullanırsam içerde yaptığım handleChange ve handleSubmit gibi callback işlemlerinden kurtulabilirim, çünkü bu işlemler useFormic hook'unun içinde var.

// Aşağıda render yani return kısmını biraz daha sadeleştirdik yani componentimiz daha okunabilir hale geldi.

// import './App.css';
// import { useFormik  } from 'formik';


// function App() {

//   const {handleSubmit, handleChange, values} = useFormik({
//     initialValues: {
//       firstName: 'Mehmet',
//       lastName: 'Seven',
//       email: 'mehmetseven@gmail.com',
//       gender: "female", 
//       hobies: [],
//       country: "Turkey",
//     },
//     onSubmit: values => {
//       console.log(values);
//     },
//   });

//   return (
//     <div className="App">
//       <h1>Sign Up</h1>

//             <form onSubmit={handleSubmit}>
//               <label htmlFor="firstName">First Name</label>
//               <input name='firstName' value={values.firstName} onChange={handleChange} /> 
//               {/* input'un içine values değerlerini atamasaydık inputlarda varsayılan değerler görünmezdi. */}

//               <br /><br />

//               <label htmlFor="lastName">Last Name</label>
//               <input name='lastName' value={values.lastName} onChange={handleChange} />

//               <br /><br />

//               <label htmlFor="email">Email</label>
//               <input name='email' value={values.email} onChange={handleChange} />

//               <br /><br />

//               <span>Male</span>
//               <input type="radio"
//                name='gender'
//                value="male"
//                onChange={handleChange} 
//                checked={values.gender === "male"} // male'i seçmesi için yaptık

//                />

//               <span>Female</span>
//               <input type="radio"
//                name='gender'
//                value="female"
//                onChange={handleChange}
//                checked={ values.gender === "female"}
//                />

//               <br /><br />

//               <div>
//               <input type="checkbox" name='hobies' value="Football" onChange={handleChange} />
//                 Football
                
//               </div>
//               <div>
//               <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} />
//                 Cinema
                
//               </div>
//               <div>
//               <input type="checkbox" name='hobies' value="Photography" onChange={handleChange} />
//                 Photography
                
//               </div>

//               <br /> <br />

//               <select name="country" onChange={handleChange} value={values.country}>
//                 <option value="turkey">Turkey</option>
//                 <option value="england">England</option>
//                 <option value="usa">USA</option>
//               </select>
//               <br /><br />

//               <button type="submit">Submit</button>
//               <br /><br />

//               {JSON.stringify(values)} {/* Tüm formun verilerini göstermesi için*/}
//             </form>
//           )
//     </div>
//   );
// }

// export default App;
//-------------------------------------------------------------------------------------------------------------------

// Form Validation 1

// Daha net bir şekilde anlayabilmemiz için formu basitleştircez bunları azaltırsak daha net bir şekilde anlayabilez.

// Emailin doldurulup doldurulmadığını veya gerçekten bir email olarak yazılıp yazılmadığını kontrol edicez. Aynı zamanda parola girildi mi? girildiyse kaç karekterli olmalıdır gibi kurallar koyabilirizz. 

//Parolanın onay inputunda da yukarda girilen parola ile aynı mı değil mi onun kontrolünü yapıcaz. Validasyon işlemlerini yup.js ile ypıyoruz. Bu kütüphaneyi tüm framework ve vanilla javascriptde de kullanabiliriz. Benzer şekilde backend projelerimiz de de kullanabiliriz.

// yarn add yup diyerek kurabiliriz validasyon'u sağlayacağımız kütüphaneyi.

import './App.css';
import Signup from './components/signup'

function App() {

  return (
    <div className="App">
   
   <Signup/>

    </div>
  );
}

export default App;


