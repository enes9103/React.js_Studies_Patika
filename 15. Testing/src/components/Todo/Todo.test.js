import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo Testleri", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />); // Hangi componentin testini yazacaksak onu render ediyoruz.

    button = screen.getByText("Add"); // Butona bir sürü şey ile erişebiliriz id, placeholder vs.
    input = screen.getByLabelText("Text"); // Butona ve inputa eriştik.
  });
  test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i); // Burda varsayılan itemlar yani item ile başlayanlar ekranda gözüküyor mu kontrol ettik.

    expect(items.length).toEqual(3); // 3 tane varsayılan item olmalı dedik.
  });

  test("Buton ve input dökümanda olmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
    // inputu doldur
    const name = "Mehmet";
    userEvent.type(input, name);

    // butona tıkla
    userEvent.click(button);

    // assertion (kontrol kısmı)

    expect(screen.getByText(name)).toBeInTheDocument(); // yukarda yazdığımız "Mehmet" ismi dökümanda olmalı dedik.
  });

  // yukardaki "Mehmet" ismini inputa userEvent.type() methoduyla ekledik bu method bizden 2 tane parametre alacak 1. hangi inputa yazacaksın ikincisi ne yazacaksın (input, )
});

//create-react-app ile oluşturulmuş bir uygulamada yazılan testleri çalıştırmak için "yarn test" kullanılır
