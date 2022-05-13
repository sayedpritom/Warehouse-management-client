import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import UpdateItem from './components/UpdateItem/UpdateItem';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddNewItem from './components/AddNewItem/AddNewItem';
import MyItems from './components/MyItems/MyItems';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        } />
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        } />
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        } />
        <Route path="/addNewItem" element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
