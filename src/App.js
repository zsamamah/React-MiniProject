import AddItem from "./Components/todoList/AddItem";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Expense from "./Components/expenseTracker/Expense";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todo' element={<AddItem/>}/>
      <Route path='/expense' element={<Expense/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    {/* <AddItem/> */}
    </>
  );
}

export default App;