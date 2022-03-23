import {useState, useEffect} from 'react'


function Counter() {

  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Mehmet");

 useEffect (() => {
    console.log("Component mount edildi!")

   const interval = setInterval (() => {
        setNumber((n) => n + 1)
        }, 1000)

    return () => clearInterval(interval)
    // yukardaki return işlemini yaptığımızda component'in unmount edildiği anı yakalayabiliyoruz. 
  }, [])

  // Bu component unMount edildiği anda bizim setInterval'i durdurmamız gerekiyor.
  // clearInterval Intervali durdurmak için kullanacağımız komut javascriptte.

  // Artık toggle counter'a bastığımda hata vermiyor.

  // Bunu nerelerde kullanabiliriz, mesela bir componentimiz var ve o component mount edildiği anda bir websoket bağlantısı başlatıyor fakat o componenti kapattığımız andada websoket bağlantısını eğer kapatmassak sürekli arka planda dom'a yazmaya çalışacaktır ve yine console'da uyarıları alırız, veya bu tip interval işlemlerinde kullanabiliriz. Biz componenti unmount ettikten sonra o componenti tekrardan güncellemeye çalışacak ne varsa o işlemleri durdurmamız gerekiyor özetle.

  useEffect (() => {
    console.log("number state güncellendi")
  }, [number])

    return ( 
    <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>

    <hr />

    <h1>{name}</h1>
    <button onClick={() => setName("Mete")}>Click</button>

    </div>


  );
}

export default Counter
