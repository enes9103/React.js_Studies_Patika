import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"; // link yerine NavLink'i kullandık.

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
// import User from "./components/User";

function App() {
  return (
    
      <Router>
      <div>
        <nav> {/* Bu kısım Home About ve Users kısımlarının aayarlandğı kısım*/}
          <ul>
            <li>
              <NavLink 

              // activeStyle={{backgroundColor: "black", color: "#fff"}} 
              to="/" exact activeClassName='active'>Home</NavLink>
              {/* <a href="">Home</a> biz buraya html tag'ini kullanıp bir Home yazsaydık sayfa yenileirdi yani komple gider baştan gelirdi. Bu yüzden a tag'i yerine Link tag'ini kullanıyoruz çünkü sayfanın yenilenmesini istemiyoruz, sadece content'in değişmesini istiyoruz. exact tanımını arka planın renginin sürekli siyah olmasını engellemek için verdik.*/} 
            </li>
            <li>
              <NavLink 
              // activeStyle={{backgroundColor: "black", color: "#fff"}}
              to="/about" activeClassName='active'>About</NavLink>
            </li>
            <li>

              <NavLink 
              // activeStyle={{backgroundColor: "black", color: "#fff"}} 
              to="/users" activeClassName='active'>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>              {/*Switch bölümünün çalışma mantığı normal switch ile aynı hangisiyle eşleşiyorsa onu çalıştırıyor, aşağıyı daha kolay anlaşılması için düzenledik.   */}
          
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} /> 
           <Route path="/users" component={Users} /> {/* Eğer end point users ise component olarak users'ı çalıştır dedik.*/}
           {/* <Route path="/" component={Home} /> biz bunu alta değilde üste yazmak istiyorsak exact adında bir property'miz var exact yazarsak o sorundan kurtulmuş oluyoruz.*/}

           {/* <Route path="/user/:id" component={User} /> */}
           
          
            
        </Switch>
      </div>
    </Router>
    
  );
}

// Biz alttaki fonksiyonlar için ayrı bir component oluşturalım.
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;


