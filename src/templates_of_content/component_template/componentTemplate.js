
import compstyles from './componentTemplate.module.css'

const   ComponentTemplate=(props)=>{
    
    const {label}=props;
    return (
        <div className={compstyles.card}>
            <div>
                {label}
            </div>
        </div>
    )
}

export default ComponentTemplate;