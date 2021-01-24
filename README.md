# my-customhook-collection V-1.3.0

_Mi Colección especial de CustomHooks._
_Está versión incluye los siguientes hooks:_

- useMediaQuery

- useFetch

- useForm

- FirebaseHooks:

  - useOnSnapshotCollection

  - useOnSnapshotDoc

  - useFirebaseUser

## Instalación

_Con npm_

```js
$ npm install my-customhook-collection
```

## ¿Comó usarlos?

_La importación de cualquier hook se debe realizar de la siguiente manera:_

```js
import {/*nombre del hook*/} from 'my-customhook-collection';
```

### useMediaQuery

_CustomHook que imita el funcionamiento de los media queries de CSS._
_Ejemplo de uso:_


```js
import {useMediaQuery} from 'my-customhook-collection';

const App=()=>{
    const mediaQuery = useMediaQuery("(max-width: 460px)")
    <div>
    ¿El ancho de la pantalla es mayor a 460px?
    {mediaQuery?<p>No</p>:<p>Si</p>}
    </div>
}
export default App
```

### useFetch

_CustomHook para realizar peticiones http con el método fetch._
_Ejemplo de uso:_

```js
import {useFetch} from 'my-customhook-collection';

const App=()=>{
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    <div >
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <>
           <p>¡Petición realizada!</p>
          </>
        )}
    </div>
}
export default App
```

### useForm

_CustomHook para el manejo de formularios._
_Ejemplo de uso:_

```js
import {useForm} from 'my-customhook-collection';

const App=()=>{
    const [{name},handleInputChange, setValues] = useForm({
        name:""
    });
    <div >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={handleInputChange}
        />
    </div>
}
export default App
```

## Firebase CustomHooks

### useOnSnapshotCollection
_CustomHook para el manejo de datos en tiempo real de una colección en firestore, en donde cada vez que ocurra un cambio este hook retornará un array de objetos con el id y los datos que contenga cada documento de la colección._
_Ejemplo de uso:_

```js
/*Nombre del componente FirebaseConfig*/
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "########",
  authDomain: "########",
  projectId: "########",
  storageBucket: "########",
  messagingSenderId: "########",
  appId: "########",
  measurementId: "########"
});

export {firebase};
```

```js
import {firebase} from "./FirebaseConfig";
import {useOnSnapshotCollection} from 'my-customhook-collection';

const App=()=>{
    const db = firebase.firestore();
    const refColl = db.collection("TestCollection");
    const [Data] = useOnSnapshotCollection(refColl);
    <div >
    {Data&&Data.map(doc=><li key={doc.id}>{doc.id}</li>)}
    </div>
}
export default App
```

### useOnSnapshotDoc
_CustomHook para el manejo de datos en tiempo real de un documento en firestore, el hook retorna un objeto con los datos y el id del documento._
_Ejemplo de uso:_

```js
import {firebase} from "./FirebaseConfig";
import {useOnSnapshotDoc} from 'my-customhook-collection';

const App=()=>{
    const db = firebase.firestore();
    const refDoc = db.collection("TestCollection").doc("TestDoc");
    const [Data] = useOnSnapshotDoc(refColl);
    console.log({Data});
    return(
    <div>
      {Data.Id}
    </div>
    )
}
export default App
```

### useFirebaseUser
_CustomHook para el manejo de sesión y objeto de datos que proporciona la autenticación de usuarios en firebase, el hook retorna un array el cual contiene un objeto y un valor booleano, el objeto contiene la información del CurrentUser y el valor booleano representa si hay o no alguien logueado, si el valor booleano es false, el objeto con la información de usuario será null  :_
_Ejemplo de uso:_

```js
import {firebase} from "./FirebaseConfig";
import {useFirebaseUser} from 'my-customhook-collection';

const App=()=>{
    const [UserInfo,isOn] = useFirebaseUser(firebase);
    console.log({UserInfo,isOn});
    return(
    <div>
      {isOn?
      <p>{UserInfo.displayName} ha iniciado sesión<p>:
      <p>No hay nadie logueado</p>
      }
    </div>
    )
}
export default App
```

# Créditos
_Los CustomHooks publicados en esta dependencia fueron codificados gracias a:_

- **Alejandro García Anglada** - _Creador del CustomHook useMediaQuery_ - [Alejandro García Anglada](https://www.youtube.com/user/aganglada91)

- **Fernando Herrera** - _Profesor del curso "React: De cero a experto (Hooks y MERN)"_ - [Fernando Herrera](https://www.udemy.com/course/react-cero-experto/#instructor-1)

- **Codealo** - _Canal de youtube de donde se saco la idea de los hooks useOnSnapshotCollection y useOnSnapshotDoc_ - [Codealo](https://www.youtube.com/channel/UCLdBO2AVbCohANbEtEHn1CA/featured)
