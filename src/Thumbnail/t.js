import './t.css'
const Thumbnail = (props) =>{
    const{thumbnail,selectImg} =props
    const{ThumbnailId,thumbnailUrl} = thumbnail

    const clickImg=()=>{
        selectImg(ThumbnailId)
    }
   
    return (
        <div>
                <li >
                   <button onClick={clickImg} >
                   <img src={thumbnailUrl} alt={thumbnailUrl} onClick={clickImg} />
                   </button>
                </li>
        </div>
    )
}
export default Thumbnail