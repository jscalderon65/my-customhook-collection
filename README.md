# my-customhook-collection

_Mi Colección especial de CustomHooks._
_Está versión incluye los siguientes hooks:_

*useMediaQuery

*useFetch

*useForm

## Instalación

_Con nmp_

```
$ npm install my-customhook-collection
```

## ¿Comó usarlos?

_La importación de cualquier hook se debe realizar de la siguiente manera_

```
import {/*nombre del hook*/} from 'my-customhook-collection';
```

### useMediaQuery

_CustomHook que imita el funcionamiento de los media queries de CSS._
_Ejemplo de uso:_


```
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

```
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

```
import {useForm} from 'my-customhook-collection';

const App=()=>{
    const [{name},handleInputChange] = useForm({
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

## Créditos

_Los CustomHooks publicados en esta dependencia fueron codificados gracias a:_

- **Alejandro García Anglada** - _Creador del CustomHook useMediaQuery_ - [Alejandro García Anglada](https://www.youtube.com/user/aganglada91)

- **Fernando Herrera** - _Profesor del curso "React: De cero a experto (Hooks y MERN)"_ - [Fernando Herrera](https://www.udemy.com/course/react-cero-experto/#instructor-1)
