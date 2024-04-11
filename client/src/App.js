import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null|true;
  console.log("isLoggedIn: ",isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to={'/sign_in'} />
  }else if(isLoggedIn && ['/sign_in','/sign_up'].includes(window.location.pathname|true)){
    // alert("Redirecting")
    return <Navigate to={'/'}/>
  }
  return children
}

function App() {
  return (
    <div className="App bg-[#edf3fc] h-screen flex justify-center items-center">
      <Routes>
        <Route path='/' element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}></Route>
        <Route path='/sign_up' element={<ProtectedRoute>
          <Form isSignUp={true} />
        </ProtectedRoute>}></Route>
        <Route path='/sign_in' element={<ProtectedRoute>
          <Form isSignUp={false} />
        </ProtectedRoute>}></Route>
      </Routes>
    </div>

  );
}

export default App;
