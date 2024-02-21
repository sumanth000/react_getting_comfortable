
import compstyles from './componentTemplate.module.css'
import { forwardRef } from 'react';
const   ComponentTemplate=(props)=>{
    
    const {label,ref}=props;
    return (
        <div ref={ref} className={compstyles.card}>
            <div>
                {label}
            </div>
        </div>
    )
};

export default ComponentTemplate;