import { Outlet } from "react-router-dom";
import { useState, createContext, Provider } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ThemeContext = createContext("");

function App() {
  let [thm, setThm] = useState(false);

  return (
    <ThemeContext.Provider value={{ thm, setThm }}>
      <div className="App" data-theme={thm ? "coffee" : "autumn"}>
        <div className="flex flex-col justify-between max-w-6xl mx-auto md:min-h-screen">
          
            <Header />
            <Outlet />
            <Footer />
        </div>
            <ToastContainer  
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
