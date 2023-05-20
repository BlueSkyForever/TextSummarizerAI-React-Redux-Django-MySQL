import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { TextSummarizer } from "./pages/TextSummarizer";

const App = () => {
  
 
  return (
    <div>
      <section className="navbar">
        <nav className="flex justify-between items-center w-full pt-3 mb-10 mx-3">
          <div className="logo" style={{fontSize:"23px",fontWeight:"500"}}>↼SABS⇁</div>
          <div className="navbarlinks" style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
            <NavLink to="/summarizer" style={({isActive})=>{return isActive?{textDecoration: 'none',background:"#8a2435",color:'white',padding:"3px 10px", borderRadius:"15px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}:{ textDecoration: 'none', color:'blue' }}} className="nlinks">
              Summarizer
            </NavLink>
            <NavLink  to="/imagegenarator" style={({isActive})=>{return isActive?{textDecoration: 'none',background:"#8a2435",color:'white',padding:"3px 10px", borderRadius:"15px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}:{ textDecoration: 'none', color:'blue' }}} className="nlinks">
              Image Genarator
            </NavLink>
            <NavLink  to="/about" style={({isActive})=>{return isActive?{textDecoration: 'none',background:"#8a2435",color:'white',padding:"3px 10px", borderRadius:"15px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}:{ textDecoration: 'none', color:'blue' }}} className="nlinks">
              About
            </NavLink>
          </div>
          <button type='button' onClick={()=>{window.open('https://github.com/Shisui-Genjutsu')}} className='btn btn-outline-dark btn-sm'>Github</button>          
        </nav>
      </section>

      <div className="routes">
      <Routes>
          <Route path='/summarizer' element={<TextSummarizer/>}></Route>
      </Routes>
      </div>

    </div>
  )
}

export default App