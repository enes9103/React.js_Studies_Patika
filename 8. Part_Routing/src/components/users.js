import { useState, useEffect } from "react";
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import axios from "axios"; // fetching işlemi yapmak için axios'u kurduk. // "yarn add axios" diyerek
import User from "./User"; // import işlemini artık app.js de değil users.js'de yaptık burda çağırdığımız için artık.


function Users() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([]);
    const { path, url } = useRouteMatch();

    console.log(path, url);
    
   useEffect(() => {
   axios("https://jsonplaceholder.typicode.com/users")
   .then((res) => setUsers(res.data)) // gelen cevabı data olarak atadık.
   .finally(() => setLoading(false)); // işlem bitince loading'in durması için yazdık.
    }, [] )
    return (
        <div>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            <ul>
                
                {users.map((user) => (
                    <li key={user.id}>
                       {/* <Link to={`/user/${user.id}`}>{user.name}</Link> */}
                       <NavLink activeClassName="active" to={`${url}/${user.id}`}>{user.name}</NavLink> {/*Biz burda url'i dinamik olarak alarak yazdırdık o anki url neyse onu alıp arkasına id'yi eklettirdik.*/}
                    </li>
                ))}
                
    {/* <li><Link to="/user/1">User1</Link> </li> Link'e tıklandığı anda user1 adındaki kullanıcıya gider */}
                
            </ul>

            <Switch>
                <Route exact path={path}>
                <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}/> {/* user componentini yazdırdık */}
            </Switch>
        </div>
    )
}

export default Users

                    
                    