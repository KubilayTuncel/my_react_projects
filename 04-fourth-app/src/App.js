import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";


function App() {
  //bu kismi yoruma almamizin sebebi AuthContext class'ini olusturdugumuz icin artik tüm contextler bu class'tan geliyor
  //bu yüzden index.js te de AuthContext conponent'ini App iceride olacak sekilde olusturmaliyiz.
  //Ayrica yukarida bulunan useState ve useEffect anotation'lari sildik.
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext)

  return (
    //Bu kisimda ise AuthContext'i yoruma aldik ve React:fragment'i tekrar yazdik.
    //useContext ekledigimiz icin parametrelerin basina ctx ekledik
    //son olrakta handler kisimlari artik AuthContext js te oldugu icin main iverisindeki Home ve Login kisimlarindaki handlerlaru sildik.
    // <AuthContext.Provider value={{
    //   isLoggedIn:isLoggedIn,
    //   onLogout: loginHandler
    // }}>
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login  />}
        {ctx.isLoggedIn && <Home  />}
      </main>
    </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
