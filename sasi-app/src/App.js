import {BrowserRouter,Routes,Route} from "react-router-dom"
import Update from "./Updateuser"
import Add from "./AddNewuser"
import Delete from "./Deleteuser"
import List from "./Listuser"

const App=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/update/:acc_number" element={<Update/>}/>
                <Route path="/delete" element={<Delete/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App