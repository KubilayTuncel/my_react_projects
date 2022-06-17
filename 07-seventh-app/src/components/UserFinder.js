import { Fragment, Component } from "react";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundry";
import classes from "./UserFinder.module.css";

import Users from "./Users";

class UserFinder extends Component {
  //class sistemiyle calistigimiz zaman gerekli degiskenleri const. icinde bir kere state altinda tanimladiktan sonra
  //useState ya da useEffect icin methodlar olusturuoyruz.
  //bu kisimda componentDidUpdate methodu useEffect yerine, searchChangeHandler da ise direk olarak boolen oldugu icin useState i
  //kullandik. Bu yüzden yukarida tanimladigimiz useState ve UseEffect anatotion lari sildik.
  //users-context js'inden context'leri tasimak icin normalde useContext anotation'i kullaniyorduk.
  //Ama class formatinda static olarak contextType olarak tanimladik ve DUMMY_USERS kisimlarini this.context.users olarak degistirdik.

  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  // bu method ise sadece bir eferligine gerekli reqquest i cagirmmizi sagliyor. Öncesinde bunu const. icinde yazdigimizda her defasinda
  //Listeyi request etmis oluyorduk.
  componentDidMount() {
    //Send http request
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
