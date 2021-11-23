import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { changeName } from "../../store/modules/actions";
import "./style.css"

const InputName = () => {

    const [newName, setNewName] = useState("")
    const {name} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(changeName(newName))
        setNewName("")
      }

    return(
        <div>
            <h1>Name: <h3>{name}</h3></h1>
            <input type="text" value={newName} onChange={(evt) => setNewName(evt.target.value)}/>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default InputName