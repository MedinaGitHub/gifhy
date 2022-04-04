import {createContext} from 'react'

const Context = createContext({
    name:'este valor de aquí es visible para quienes intentan consumir el contexto pero no están dentro del wrapper del provider',
    suscribeteAlCanal: true
})

export default Context