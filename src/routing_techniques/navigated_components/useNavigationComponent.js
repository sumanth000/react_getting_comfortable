import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import { useLocation } from "react-router-dom";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";
let UseNavigateComponent=()=>{

  const location = useLocation();
  const state = location.state;

  const id = state.id;
  const name = state.name;
  const isAdmin = state.isAdmin;

  console.log(id,' ',name,' ',isAdmin)

    return (
        <div>

            <TakeToPage label="Routing techniques page" url="/routingTechniques"></TakeToPage>
            <ComponentTemplate label={`NAVIGATION COMPONENT ,caught props= ${id} `}></ComponentTemplate>

        </div>
        
    )
}

export default UseNavigateComponent;