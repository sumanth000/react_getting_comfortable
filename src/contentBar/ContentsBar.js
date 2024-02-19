import { Link } from "react-router-dom"
import './ContentsBar.css'

export default function ContentBar(){
    const goToPage = (path) => {
        window.location.href = path;
      };
    
      return (
        <div className="bodyContentsBar" >

          <div className="ContainerContentsBar" >
          <button className="ContentButton"  onClick={() => goToPage('/syllabus')}>SYLLABUS</button>
            <button  className="ContentButton"onClick={() => goToPage('/first')}>FIRST COMPNENT</button>
            <button className="ContentButton" onClick={() => goToPage('/combined')}>COMBINED COMPONENT</button>
            <button className="ContentButton"  onClick={() => goToPage('/parentToChild')}>PARENT TO CHILD</button>
            <button className="ContentButton"  onClick={() => goToPage('/childToParent')}>CHILD TO PARENT</button>
            <button className="ContentButton"  onClick={() => goToPage('/RoutingTechniques')}>Routing Techniques</button>



          </div>



        </div>
      );
}