// Form Validasyonları 1

import { object, string, number, date, InferType, ref } from 'yup';

// initial values kısmında verdiğimiz keyler ne ise burdada onu vermeliyiz password ise burdada password böylece eşleşiyor.

const validations = object({
    email: string().email("Geçerli bir email girin").required("Zorunlu Alan"), // required(), demeseydik email kutusu boş olsa bile gönderirdi.
    password: string().min(5, "Parolanız en az 5 karekter olmalıdır.").required("Zorunlu Alan"),
    passwordConfirm: string().oneOf([ref("password")], "Parolalar uyuşmuyor").required("Zorunlu Alan"),
    
  });

  export default validations;

  // yukardaki şema ile inputlarımızın hangi kurallara tabi olduğunu belirleyebiliyoruz.


  