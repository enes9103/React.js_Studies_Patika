// Form Validasyonları 1

// import React from 'react'
// import { useFormik  } from 'formik';
// import validations from './validations';

// function Signup() {

//     const {handleSubmit, handleChange, values} = useFormik({
//         initialValues: {
//          email: '',
//          password: "",
//          passwordConfirm: "",
    
//         },
//         onSubmit: values => {
//           console.log(values);
//         },
//         validationSchema: validations, // validationSchema ismiyle import etseydik doğrudan da kullanabilirdik.
//       });

//     return (
//         <div>
//                <h1>Sign Up</h1>

//             <form onSubmit={handleSubmit}>

//               <label>Email</label>
//               <input name='email' value={values.email} onChange={handleChange} />

//               <br /><br />

//               <label>Password</label>
//               <input name='password' value={values.password} onChange={handleChange} />

//               <br /><br />

//               <label>Confirm Password</label>
//               <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} />

//               <br /><br />

             

//               <button type="submit">Submit</button>
//               <br /><br />

//               {JSON.stringify(values)} 
//             </form>
//           )
//         </div>
//     )
// }

// export default Signup

//-------------------------------------------------------------------------------------------------------------------

// Form Validasyonları 2
// Şimdi de hata mesajlarının gösterilme işlemlerini yapmaya çalışcaz.

import React from 'react'
import { useFormik  } from 'formik';
import validations from './validations';

function Signup() {

    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
         email: '',
         password: "",
         passwordConfirm: "",
    
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema: validations, // validationSchema ismiyle import etseydik doğrudan da kullanabilirdik.
      });

      

    return (
        <div>
               <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

              <label>Email</label>
              <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
              {errors.email && touched.email && (<div className='error'>{errors.email}</div>)} {/* yani email hata veriyorsa ve o inputtan hata verildiği halde başka bir inputa geçilmişsse  ekranda error yazısını göster dedik. */} 
              {/* onBlur={handleBlur} ise bir inputtan ayrıldığı anda hata vermesi için ekledik. */}

              <br /><br />

              <label>Password</label>
              <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
              {errors.password && touched.password && (<div className='error'>{errors.password}</div>)}

              <br /><br />

              <label>Confirm Password</label>
              <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />
              {errors.passwordConfirm && touched.passwordConfirm && (<div className='error'>{errors.passwordConfirm}</div>)}

              <br /><br />

             

              <button type="submit">Submit</button>
              <br /><br />

              {JSON.stringify(values)} 
            </form>
          )
        </div>
    )
}

export default Signup


// Bölüm Sonu Kazanımları

// Biz state yapısını kullanarak form yapısını olusturabiliriz ama daha fazla kod yazıyoruz ve daha karmaşık oluyor. Aynı işi daha kısa sürede yapabilecekken çok daha uzun sürebiliyor bu yüzden formik yapısını kullanmaya çalışıyoruz.

// initial values: formun içinde olucak her bir inputu temsilen bulunan bir state nesnesi gibi düşünebiliriz. Biz normalde formiği kullanmasaydık yukarda bir tane state'imiz olacaktı orada useState deyip firstName lastName ve emaili tanımlayacaktık. Veya tek bir state'de form objesi adı altında bunları toplayabilirdik.

// Formik'in altındaki form nesnesi bize onChange ve onBlur gibi eventleri tek tek yazmamıza gerek kalmıyordu sadece name'i vermemiz ve o name'inde initial values'deki key ile uyuşuyor olması yeterliydi inputa atama yapılabilmesi için.

// Daha sonra Form ve Field etiketlerini kullanmadan normal HTML etiketlerini yaparak nasıl yapabiliriz diye konuştuk, ve Formik etiketi yerinede useFormik hookunu kullandık amacımız ise return ettiğimiz jsx kısmını biraz daha temiz tutabilmek.

// Formik kullanınca biraz daha fazla iş yapmış ve JSX çirkinleşiyor, o yüzden yukarda hook olarak tanımlayıp aşağıda kullanabiliyoruz.

// Formik altındaki Field etiketini kullanmadığımızda onun yerine HTML'in native etiketi olan input'u kullandığımızda bizim onChange, onBlur ve value tanımlarını yapmamız gerekiyor.

// checkbox, dropbox vs vardı bunlar içinde yukarda state'imizi tanımlarken initial value değğeri olarak atamak yeterli.

// useFormik altına handleChange, handleSubmit ve handleBlur gibi tanımları görüyoruz. form submit edildiğinde çalışmsı için form içindeki onSubmit etiketine handleSubmiti yazmamız gerekiyor.

// handleBlur üzerine tıkladığımız inputtan ayrıldığımız anda ayrıldığını bilmemiz için gereken tanım.

// values: o anda state'de ne varsa onu alabilmemiz için gereken tanım.

// Eğer bir hata varsa validasyonla alakalı onları yakalayabildiğimiz objeye erors 

// touched: daha önce o inputa focus olunmus mu yani tıklanmıs mı onu tutan ifade.

// Formik bir Form yönetim aracıdır, karmaşık formları basitçe hazırlamamızı sağlar.
// Formik kullanıldığında her form elemanı için ayrı ayrı state atama işleminin yapılması gerekmez. Formik bu işlemi otomatik olarak yapar.
    