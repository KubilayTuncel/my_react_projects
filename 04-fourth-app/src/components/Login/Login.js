import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
//useState inputlardaki degisimi yapmamizi ve degisimlerde ki if condition'lari kontrol etmemizi sagliyor
//sadece useState kullanarak ismizi halledebiliyoruz
//Ama daha sade bir kod yazimi icin useReducer kullanilabilir ayrica bu ksim useState te set islemleri icin kullaniliyor
//Ama formValid icin useEffect kullanilmasi gerek
//kisacasi useSate=useReducer+useEffect diyebiliriz. ama useState ile useEffect beraber de kullanilabiliyor

const emailReducer = (state, action) => {
  if (action.type === "User_Input") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "User_Input") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  }
  if (action.type === "Input_Blur") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log("Effect runneing");

    return () => {
      console.log("EFFEct cleanup");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  //yukardaki const degerlerini vermemizin sebebi gecerli username ve password u girdigikten sonra useEffect in calismayi birakmasini sagliyoruz.

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Check validity!!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("cleanup!");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({ type: "User_Input", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({ type: "User_Input", val: event.target.value });
    //setFormIsValid(event.target.value.trim().length > 7 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "Input_Blur" });
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 7);
    dispatchPassword({ type: "Input_Blur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus()

    } else {
      passwordInputRef.current.focus()
    }
  };

  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
