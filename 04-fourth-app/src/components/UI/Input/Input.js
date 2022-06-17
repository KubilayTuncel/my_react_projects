import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // Buraya yerlestirmis oldugumuy useRef ve useEffect eger email kismina birsey yazilmadan password kismina gecerse kullanici,
  //Email input kismi uyari hali gecsin ve rengi warning rengini alsin diye yapildi.
  //Bu yüzden yukarida tanimladigimiz inputRef kismini asagida input icerisinde ref degeri olarak  verdik ve useEffect'le
  //uyari islemini aktif hale getirmis olduk.
  //useEffect kullarak sadece email icin yaptigimiz effect i activate  diye tanimladigimiz bir method'a cevirdik
  //Bu sayede ayni uyariyi password kisminda da alabildik. Bunun icin Login.js 'te if statement ile bu islemi calisir hale getirdik.
  //Burada kullanilan useImp. anotation ise activate fonk. use Effect te oldugu gibi calismasini saglamak oldu. 
  //Ayrica bu islem ile web sitesinde Login tusuna bastigimizda ilk olrak mail Input kismmina yönlendiriyor
  //Daha sonra da ayni islem password icin gecerli oluyor.
  //Ayrica class'in basinda React.forwardRef anatation ekledik.
  const inputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
    const activate = ()=>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return{
            focus : activate
        }
    })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
