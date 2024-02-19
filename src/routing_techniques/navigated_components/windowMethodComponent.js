
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
let  WindowMethodComponent=()=>{
    return (
        <div>

          <TakeToPage label="Routing techniques page" url="/routingTechniques"></TakeToPage>

          <ComponentTemplate label="window.location.href='/path' COMPONENT"></ComponentTemplate>
        </div>
    )
}

export default WindowMethodComponent;