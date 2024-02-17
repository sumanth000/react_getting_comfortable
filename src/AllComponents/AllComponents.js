import FirstComponent from "../combining_components/FirstComponent";
import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';
import SecondComponent from "../combining_components/SecondComponent";
import ContentBar from "../contentBar/ContentsBar"
import './AllComponents.css'
import CombinedComponent from "../combining_components/CombinedComponent";
import Parent1 from "../passing_data/parentToChild/parent1";
import Parent2 from "../passing_data/childToParent/parent2";
 const AllComponents=()=>{




   return (

     <div className="mainbody">
       <div className="leftdiv">
         <ContentBar></ContentBar>
       </div>

       

       <Router>
         <Routes>
           <Route path="/first" element={<FirstComponent />} />
           <Route path="/second" element={<SecondComponent />} />
           <Route path="/combined" element={<CombinedComponent />} />
           <Route path="/parentToChild" element={<Parent1 />} />
           <Route path="/childToParent" element={<Parent2 />} />



         </Routes>
       </Router>

     </div>
     
    )
}
export default AllComponents;