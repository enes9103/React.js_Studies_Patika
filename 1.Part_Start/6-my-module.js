export default name => {
    // console.log("Hello " + name)
    console.log(`Hello ${name}`)
} // Tek bir parametre varsa paranteze ihtiyaç yok.


// const topla = (a,b) =>  a + b;
// const cıkar = (a,b) =>  a - b;

// export { hello, topla, cıkar};


 const topla = (a,b) =>  a + b;
 const cıkar = (a,b) =>  a - b;
 const text = "Text"
 const user = {
    name: "Oguzhan",
    surName: "Duran",
}

 const users = [{
    name: "Oguzhan",
    surName: "Duran",
}, {
    name: "Doğan",
    surName: "Kaplan"
}]

export {topla, cıkar, text, user, users}
// export default hello; // Bunu direk yukarda da gösterebiliriz

// Yani ECMA Script 6 ile beraber bir module yazmak bu kadar kolay artık.