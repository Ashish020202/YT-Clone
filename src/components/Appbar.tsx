import { Searchbar } from "./Searchbar"



export const Appbar = () => {
  return (
    <div className="flex justify-between pt-3">
      <div className="flex ml-6 h-8 font-semibold sm:mr-2"><img src="yt.png" alt="" />  YouTube</div>
      <div><Searchbar /></div>
      <div>Logout</div>
    </div>
  )
}

export default Appbar
