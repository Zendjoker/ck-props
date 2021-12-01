import './App.css';
import { Profile } from './profil/Profile';

function App() {
  
  return (
    
  <div className="App">
    <Profile 
    fullName = "Adam Azzouz" 
    Bio = "this is my bio " 
    Profession = "Full Stack Developper" >
      <img src ="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" alt="Profil picture" ></img>
    </Profile>
  </div>
  );
}

export default App;
