
const Lists = ({classname, lists}) =>{

    return(
          <ul className={classname}>
                {lists.map( (list, index) => (
                    <li key={index} href={list.link} className={list.class}>{list.label}</li>
                ))}
          </ul>
            
    )

}

export default Lists