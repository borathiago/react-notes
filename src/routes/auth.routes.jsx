import { Routes,Route,Navigate } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppAuth() {
    const user = localStorage.getItem('@notes:user')
    return(
        <Routes>
            <Route path="/" element={<SignIn></SignIn>}></Route>
            <Route path="/register" element={<SignUp></SignUp>}></Route>
            {!user&&<Route path="*" element={<Navigate to="/"></Navigate>}></Route>}
        </Routes>
    )
}