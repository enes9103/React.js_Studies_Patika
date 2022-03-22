// function User(props) {
//     // console.log(props); // consolda çalıitırdığımızda console'da göndermiş olduğumuz propertyi görürüz.
//     return(
// <h1>
//   {
//       props.isLoggedIn ? `${props.name} ${props.surName}` : "Giriş Yapmadınız"
//   }

// </h1>
    
//     )
// }

// export default User

//  app.js'den gönderdiğimiz name parametresini {props.name} şeklinde kullanabiliriz. süslü parantez kullandığımıza dikkat et

// Yukaridaki gibi her defasında props yazmak yerine props'un bir obje olduğunu ve altında name surName ve isLoggedIn olduğunu biliyorum.

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {
//     friends.map((friend) => ( 
//     <div>{friend}</div>
//     ))}
// </>
    
//     )
// }

// export default User

// map işlemini yaparken yani listeleme işlemini yaparken döngüler içersinde return ettiğimiz ifadelerin performans kaybı yaşanmadan listelenmesi için bizden react bir key prob'u isiyor. Bu key prop'u dediğimiz şeyde aslında benzersiz bir ifade. Yani döngü içersinde return ettiğiniz jsx'in en dışındaki elemente benzersiz bir key prob'u tanımlamanız gerekiyor bu map her döndüğünde index veriyor ya bize bu index O'dan başlayıp kaç eleman varsa ora kadar saymaya devam ediyor. 



// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {
//     friends.map((friend, index) => ( 
//     <div key={index}>
//         {index} - {friend.name}
//     </div>
//     ))}
// </>
    
//     )
// }

// export default User

// Bunu index adında bir key verdik div içine ve uyarı kaayboldu. Bunu çalıştırdığımız her döngü listelemesinde mutlaka en dıştaki elemana vermemiz gerekecek. Bu illa bu index olmak zorunda değil bizim array'imizin altında yani friends gibi benzersiz bir ifade varsa biz onu da kullanabiliriz.

// Biz aşağıda index'i silip benzersiz ifade olan Id'yi koyabiliriz.

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {
//     friends.map((friend, index) => ( 
//     <div key={friend.id}>{friend.name}
//     </div>
//     ))}
// </>
    
//     )
// }

// export default User


// // Bazen return deyip alttaki gibi de yazdırabilirler
// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>


//     {friends.map((friend) => {
//     // const x = friend.id + 2; böyle bir şey kullanacaksak bu yapıyı return şeklinde kullanabiliriz.
//      return <div key={friend.id}>{friend.name}</div>
//     })}
// </>
    
//     )
// }

// export default User;

//--------------------------------------------------------------------------------------------------------------------

// Prop Types.

// Componentlere gönderdiğimiz property'lerin tiplerini belirleyebileceğimiz bir araç var ismi prop types bunu öğreneceğiz.

// import PropTypes from "prop-types"

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>


//     {friends.map((friend) => {
    
//      return <div key={friend.id}>{friend.name}</div>
//     })}
// </>
    
//     )
// }

// User.propTypes = {
//     name: PropTypes.string,
//     surName: PropTypes.string,
//     isLoggedIn: PropTypes.bool,
//     age: PropTypes.number,
//     friends: PropTypes.array
// }

// export default User;

// app.js'den name string surName string isLoggedIn boolen age number friends ise array olarak gönderiliyor, bu yazıcağımız componentleri sadece biz kullanmıcaz arkadaşlarımız kullanabilir veya bu componentleri tüm dünya ile paylaşabiliriz ve tüm insanlık bunu kullanabilir. Dolayısıyla biz hangi property'de hangi veri tipini aldığımızı kabul ettiğimizi componentte belirtmemiz lazım. Bunun içinde ihtiyacımız olan şey proptypes tanımı yapmamız gereken şey de proptypes'ı import ettikten sonra componentin ismi.prop types yazmalıyız.

//--------------------------------------------------------------------------------------------------------------------

// Prop Types: isRequired

// Prop tiplerini yazarken zorunlu olanlarıda belirtebiliyoruz. Tek yapmamız gereken tipin ismini yazdıktan sonra isRequired yazmak. Ben app.js dosyasından bunu silsem hata verir undefined diye.

// import PropTypes from "prop-types"

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>


//     {friends && friends.map((friend) => {
    
//      return <div key={friend.id}>{friend.name}</div>
//     })}
    
// </>
    
//     )
// }

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     surName: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.isRequired,
//     age: PropTypes.number.isRequired,
//     friends: PropTypes.array
// }

// export default User;

// friends varsa onu göster diyoruz {friends && friends.map((friend) => { diyerek.

//--------------------------------------------------------------------------------------------------------------------

// Prop Types: oneOfType
// Bir property'de birden fazla veri tipinin gönderilmesine imkan tanımak için one of type adında bir tanımımız daha var. Mesela biz age ile herhangi bir matematiksel işlem yapmayacaksak hem string hemde number kabul edebiliriz bunu da proptypes ile yapıyoruz.

// import PropTypes from "prop-types"

// function User({name, surName, isLoggedIn, age, friends}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>


//     {friends && friends.map((friend) => {
    
//      return <div key={friend.id}>{friend.name}</div>
//     })}
    
// </>
    
//     )
// }

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     surName: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.isRequired,
//     age: PropTypes.oneOfType([
//         PropTypes.number, PropTypes.string
//     ]).isRequired,
//     friends: PropTypes.array
// }

// export default User;

// Yani biz oneOfType'ı kullanınca hem string olarak hemde Number olarak tanımladığım için 2 türlü de yazsam app.jsdeki ilgili yere hata almıyorum. Zorunlu kılmak için ise parantezlerin sonuna isRequired tanımını girmek yeterli olacaktır.

//--------------------------------------------------------------------------------------------------------------------

//Prop Types: shape


// import PropTypes from "prop-types"

// function User({name, surName, isLoggedIn, age, friends, address}) {
    
//     return(
// <>
// <h1>{ isLoggedIn ? `${name} ${surName} (${age})` : "Giriş Yapmadınız"}</h1>

// {address.title} {address.zip}

// <br/>
// <br/>

//     {friends && friends.map((friend) => {
    
//      return <div key={friend.id}>{friend.name}</div>
//     })}
    
// </>
    
//     )
// }

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     surName: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     age: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     friends: PropTypes.array,
//     address: PropTypes.shape({
//         title: PropTypes.string,
//         zip: PropTypes.number,  
//     })
// }

// export default User;

//--------------------------------------------------------------------------------------------------------------------


// Default Props

// Herhangi bir tanım yapılmamış bir prop'a varsayılan bir değerde verebiliyoruz.

// import PropTypes from "prop-types"

// function User({name, surName, isLoggedIn, age, friends, address}) {

//     if(!isLoggedIn) {  
//     return <div>Giriş Yapmadınız </div>
//         }
//     // Girmeden kontrol yapıp isLoggedIn'in girilip girilmediğini kontrol edip geri dönüş yapmak istiyorsak yukardaki gibi yaparız.
//     return(
// <>
// <h1>{ `${name} ${surName} (${age})` }</h1>

// {address.title} {address.zip}

// <br/>
// <br/>

//     {friends && friends.map((friend) => {
    
//      return <div key={friend.id}>{friend.name}</div>
//     })}
    
// </>
    
//     )
// }

// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     surName: PropTypes.string.isRequired,
//     isLoggedIn: PropTypes.bool.isRequired,
//     age: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     friends: PropTypes.array,
//     address: PropTypes.shape({
//         title: PropTypes.string,
//         zip: PropTypes.number,  
//     })
// }

// User.defaultProps = {
//     name: "İsimsiz",
//     isLoggedIn: false,
    
// }

// export default User;

// Yukarda User.defaultProps diyerek isLoggedIn gönderilmemişse varsayılan olarak false atadık. Yani biz isLoggedIn'i kaldırdığımızda App.js'den varsayılan olarak false olacak ve ekranda Giriş yapmadınız yazısı görünecek.

// app.js'den prop gönderilirse hiç bir şekilde default props'daki değerine bakılmıyor. Eğer gönderilmemişse default propstan karşılanıyor.


//--------------------------------------------------------------------------------------------------------------------

// Bölüm Sonu Kazanımları

// Bu bölümde componentler üzerinde props kavramının var olduğunu ve bunun ne işe yaradığını konuştuk. Bizim User isminde bir component'imiz var ve biz bu user'a aynı HTML'de olduğu gibi bir etiketimiz olur HTML'DE <div> gibi biz bu div'de bir parametre geçebiliyoruz. className gibi Id gibi peki biz yazdığımız bu componentlerede bu parametreleri geçip öyle kullanabilir miyiz diye sorduk ve karşımıza props kavramı çıktı. Yazdığımız componente herhangi bir parametre geçebiliyoruz. Daha sonra app.js'den göndermiş olduğumuz prop'u User componentimizde alıp kullanıyoruz.

// Süslü parantezler içinde componenti olusturduğumuz sayfaya propsların ismini yazarak alabiliriz. Sonra herhangi bir yerde kullanabiliriz. Bu göndermmiş olduğumuz propların veri türleri string number boolen array obje her şey olabilir. Ama dikkat edilmesi gereken şey mesela boolean göndereceksek veya number göndereceksek number ve boolean'ı süslü parantezlerin içine almamız gerekiyor.Benzer şey string dışıdndaki her şey için gerekli. ilgili yerdeki title ve zip kısmınıda süslü parantezin içine aldığımızı UNUTMA!!!

// Array'i kullanırken direk map'leyip kullanıyoruz. Map yaptığımızda da karşımıza key denen bir kavram çıktı. Bu ne işe yarıyor React'de bir component içersinde bir render işlemi yapıyorsak bir listeyi tek tek dönüp onu render ediyorsak burda her döngüdeki en dıştaki elemanı key adında bir prop geçmemiz gerekiyor. Bu liste elemanlarımızın React tarafından birbirinden ayrıştırılması izole edilmesi ve bunların en performanslı şekilde render edilmesi için gerekli bir durum. Bunu vermediğimiz zaman console'da uyarı aldığımızı görüyoruz. Bu önemli bir kavram. Mutlaka aklımızda kalmalı.

// Sonrasında React'in react developer tools adında bir geliştirici aracı olduğunu konuştuk. Bununla yazmış olduğumuz componentleri hiyerarşik olarak görüntüleyebiliyorduk.

// Sonrasında propetypes konusuna geldik. Bir componentte göndermiş olduğumuz propertyleri veri türlerine göre ayarlayabiliyorduk. Yani şu property'nin veri türü şu olmalı diyebiliyorduk. veya bu property mutlaka gönderilmek zorundadır gibi tanımlar yapabiliyorduk. Bunu yapabilmek içinde ihtiyacımız olan şey prop-types tanımı onu import ettikten sonra component-ismimiz.Proptype dedikten sonra içerde aldığımız ne kadar prop varsa onların hepsinin tip tanımlarını yapabiliyoruz. Bu neden gerekli bizim yazdığımız componenti sadece biz kullanmıcaz belki dünyanın öbür tarafından herhangi biri kullanacak. Dolayısıyla bizim yazdığımız componentlerde alınan parametreleri bir şekilde onlara söylememiz lazım onlarda buralara düzgün parametreleri kolaylıkla düzgün geçebilsinler. Ayrıca bu bizim içinde gerekli bir sey yarın bir gün component üzerinde neler yaptgımı direl olarak neyin neye ihtiyacı oldugunu tek bakısta görebiliyorum. 

// Burda PropeTypes tanımı import ettiğimiz ifadeden geliyor DİKKAT!!! name: PropeTypes.string.isRequired derse name prop'u zorunludur yani App.js'den gönderilmezse proplem çıkar demek. boolean yerine bool yazıyoruz ona da dikkat. 

// age kısmında oneOfType diye bir tanım kullandık bu da bir prop'u farklı veri türlerinde belirtmek istediğimiz zamanlarda kullanabiliriz yani mesela bir sayı hem string hem de number olabiliyorsa oneOfType'ı kullanabiliriz. İki veri türünü de kabul ediyorum hata vermiyorum demek bu. 

// friends prop'u array olarak tanımlanmış ama zorunlu değil girilmeyebilir. Yani biz friends'i girmeseydik hata vermez normalde ama friendsde map kullanıldığı için map'den kaynaklı bir hata oluyor DİKKAT!!!.

// adress prop'unda shape key word'ü gözümüze takılıyor burda ne demişiz burası bir obje olacak ve bu obje içinde title ve zip tanımları olacak demişiz ve title'ın veri türü string iken zip'in veri türü number  olmalı demişiz.

// Sonrasında default props konusuna baktık. Bu da eğer herhangi bir prop'a bir veri girilmediyse boş geçildiyse ona var sayılan olarak bir seyler atamak istiyorsak o zaman kullanabileceğimiz bir tanım. Eğer zorunlu olarak işaretlenmiş bir alan prop olarak gönderilmediyse çağrıldığında burda verdiğimiz default props'u kullanırak çalıştırır. Yani kullanıcı prop'u girmedi diye bunu girmek zorundasın demez, eğer aşağıda default prop verirsek.





