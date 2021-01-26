import {useState} from "react"

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"login"}>Login:</label>
                <input id={"login"} name={"login"} type={"text"} />
            </div>
            <div>
                <label htmlFor={"password"}>Password:</label>
                <input id={"password"} name={"password"} type={"password"} />
            </div>
            <button type={"submit"}>Submit</button>
        </form>
    )
}

export default Login