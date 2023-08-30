export function VideoCard(props:any){
    return <div className="p-3">
        
      <div>
        <img className="rounded-xl" src={props.thumbnail} alt="" />
      </div>
    
      <div className="grid grid-cols-12 pt-2">
          <div className="col-span-1 ">
            <div className=" w-12 h-7" >
             <img className="rounded-full" src={props.image} alt="" />
            </div>
          </div>
          <div className="col-span-11 pl-7 ">
            <div>
              {props.title}
            </div>
            <div className="col-span-11 text-gray-400">
               {props.author}
            </div>
            <div className="col-span-11 text-gray-400">
              {props.views} . {props.timestamp}
            </div>
          </div>
        </div>
        </div>
    
}