function EditBanner({list , id}){
  return(
    <div className="edit-banner">
      <h2>Media</h2>
      <p>Photos</p>
      <div className="edit">
        {list.map((item)=>{
          if(item.Id == id){
            return(
              <img src={item.image}/>
            )
          }
        })}
        <button>Change Edit</button>
      </div>
      
    </div>
  )
}
export default EditBanner;