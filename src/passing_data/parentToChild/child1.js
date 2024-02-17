import child1styles from './css_folders/child1.module.css'


const  Child1 =(props)=>{

    let {data}=props;

    console.log('name in the child1',data);

    return(
        <div className={child1styles.child}>
            child1 : {data}
        </div>
    ) 
}

export default Child1;