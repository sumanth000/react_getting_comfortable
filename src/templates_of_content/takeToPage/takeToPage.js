

import takeToPageStyles from './takeToPage.module.css'
let TakeToPage=(props)=>{

    let {label,url}=props;


    let navigate=()=>{
        console.log('url ',{url})
        window.location.href= decodeURIComponent(url);
    }

    return(
        <div>
            <div className={takeToPageStyles.content}  onClick={navigate}>GO TO {label}</div>
        </div>
    )
}

export default TakeToPage;