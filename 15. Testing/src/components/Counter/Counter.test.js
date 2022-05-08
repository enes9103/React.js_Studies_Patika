import { render, screen } from "@testing-library/react"; // render ile herhangi bir componenti render edebilirim screen ile o an domda olan herhangi bir nesneyi yakalayabilirim.
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count; // Her birinin describe içinde kullanılması gerektiği için describe içinde let ile tanımladım.

  beforeEach(() => {
    console.log("Her testten önce bir defa çalışacağım");
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0"); // ilk etapta counter 0 olacağı için 0 yazan tanımı seç dedik
  });

  beforeAll(() => {
    console.log("İlk başta bir defa çalışacağım");
  });

  afterEach(() => {
    console.log("Her testten sonra bir defa çalışacağım");
  });

  afterAll(() => {
    console.log("Tüm testlerden sonra bir defa çalışacağım");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1"); // O olan count değeri tıklandıktan sonra 1 olsun dedik.
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});

// burda it( "increase btn") bir açıklama test patladığında hangi testin patladığını o açıklama sayesinde görüyoruz. Bunu test( "increase btn") şeklinde de yazabiliriz.

// Öncelikle butonu seçmemiz lazım. getByText'in içine butonun içinde ne yazıyorsa onu yazarız yani Increase. Sonrasında bu buton üzerinde işlem yaptırmamız gerekiyor. UserEvent adında import ettiğimiz tanım ile tıklattıracağız userEvent.click(increaseBtn); şeklinde. Sonrasında ise butona tıklattıktan sonra ne bekliyorsam onu yazacağız.

// testleri daha derli toplu yazmak için describe ifadesi içine alabiliriz. Bu ifadeyi kullanınca bir takım yeni yetenekler kazanıyruz. Mesela describe'ın içindeki tüm testler için her bir test çalışmadan önce veya çalıştıktan sonra şunları yap diyebiliriz. beforeEach(()) ile.

// beforeEach describe ifadesini kullandığımız zaman birden fazla test yazabiliyoruz, bu noktada ilk test edilecek kısımdan önce beforeEach'i çalıştır işte en yukarda tanımladığımız increaseBtn, decreaseBtn, count'u tanımla yani doldur sonra alttaki increase btn'yi çalıştır diyoruz increase btn bittikten sonra tekrar beforeEach'i çalıştır sonra ikinci testi çalıştır diyoruz. Eğer üçüncü bir test olsaydı önce beforeEach'i çalıştıracak sonra da üçüncü test kodu neyse onu çalıştıracaktı.

// Burda beforeEach gibi beforeAll adında da bir tanım var bu da tüm testlerden önce bir defaya mahsus çalışıyor ve sonra çalışmıyor.

// afterAll var bu da her şeyden sonra bir kere çalışır.

// Mesela backend için beforeEach'de bir kayıt ekliyorsak afterEach'de onu kaldırabiliriz. Frontend içinde geçerli beforeEach'de eklenen bir şeyi afterEach'de kaldırabiliyoruz.
