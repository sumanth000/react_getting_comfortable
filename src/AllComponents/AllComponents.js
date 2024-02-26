import FirstComponent from "../combining_components/FirstComponent";
import { BrowserRouter as Router, Routes, Route, Switch, Link, useLocation } from 'react-router-dom';
import SecondComponent from "../combining_components/SecondComponent";
import ContentBar from "../contentBar/ContentsBar"
import './AllComponents.css'
import CombinedComponent from "../combining_components/CombinedComponent";
import Parent1 from "../passing_data/parentToChild/parent1";
import Parent2 from "../passing_data/childToParent/parent2";
import { useEffect, useState } from "react";
import Syllabus from "../syllabus/Syllabus";
import RoutingTechniques from "../routing_techniques/routingTechniques";
import WindowMethodComponent from "../routing_techniques/navigated_components/windowMethodComponent";
import UseNavigateComponent from "../routing_techniques/navigated_components/useNavigationComponent";
import UseStateComponent from "../Hooks/useState/useStateComponent";
import Hooks from "../Hooks/Hooks";
import UseEffectComponent from "../Hooks/useEffect/useEffectComponent";
import UseContextComponent from "../Hooks/useContext/useContextComponent";
import UseRefComponent from "../Hooks/useRef/useRefComponent";
import CustomHookComponent from "../Hooks/customHook/customHookComponent";
import ReduxComponent from "../redux/redux";
import ToCheckRedux from "../redux/toCheckRedux";
// import { storeFunction } from "../redux/store";
// import { Provider } from "react-redux";
// import store from './redux/reduxStore';
import storage from 'redux-persist/lib/storage'
import UseContextToCheck from "../Hooks/useContext/useContextToCheck";
const Mainbody = () => {


  const location = useLocation();
  const hideContentBarPaths = ['/first', '/second', '/combined', '/parentToChild', '/childToParent'];
  const showContentBarPaths = ['/syllabus'];
  console.log('im in the path', location.pathname);
  const shouldShowContentBar = !hideContentBarPaths.includes(location.pathname);
  useEffect(() => {
    // This code runs when the component mounts
    console.log('Component mounted');

    // The return function here acts as componentWillUnmount
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {


    // storeFunction();
  }, []);


  return (



    <div className="mainbody">
      <div className="leftdiv">
        {/* {shouldShowContentBar&&  <ContentBar></ContentBar>} */}
        <ContentBar></ContentBar>
      </div>


      <Routes>
        <Route path="/first" element={<FirstComponent />} />
        <Route path="/second" element={<SecondComponent />} />
        <Route path="/combined" element={<CombinedComponent />} />
        <Route path="/parentToChild" element={<Parent1 />} />
        <Route path="/childToParent" element={<Parent2 />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/routingTechniques" element={<RoutingTechniques />} />
        <Route path="/useNavigateComponent" element={<UseNavigateComponent />} />
        <Route path="/windowMethodComponent" element={<WindowMethodComponent />} />
        <Route path="/useNavigateComponent" element={<UseNavigateComponent />} />
        <Route path="/useStateComponent" element={<UseStateComponent />} />
        <Route path="/useEffectComponent" element={<UseEffectComponent />} />
        <Route path="/useContextComponent" element={<UseContextComponent />} />
        <Route path="/useContextToCheck" element={<UseContextToCheck />} />

        <Route path="/useRefComponent" element={<UseRefComponent />} />
        <Route path="/customHookComponent" element={<CustomHookComponent />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/reduxComponent" element={<ReduxComponent />} />
        <Route path="/toCheckRedux" element={<ToCheckRedux />} />
      </Routes>
    </div>

  )
}

const AllComponents = () => {
  return (
    
    <Router>
      <Mainbody />
    </Router>
   
    
  );
};

export default AllComponents;