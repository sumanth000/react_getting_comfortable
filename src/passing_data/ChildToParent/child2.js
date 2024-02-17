import child1styles from './css_folders/child2.module.css'


const  Child2=(props)=>{

    let {setName}=props;


    return(
        <div className={child1styles.child}>
              <div className={child1styles.text}>child2</div>  
            <input className={child1styles.input}onChange={(e)=>setName(e.target.value)} placeholder='ENTER HI'></input>
        </div>
    ) 
}

export default Child2;