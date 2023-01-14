import axios from "axios"
import { URL_BASE } from "../constants/url"



export const request = async ({config}) => {
    let dataRequest

    try{
        dataRequest = {
            likesPost: await (await axios.get(`${URL_BASE}/likes`)).data,
            isLiked: await (await axios.post(`${URL_BASE}/isliked`, {},config)).data
        }
    }catch(error){
        console.log(error)
    }
    
    return dataRequest
}

export const lika = ({likes, p}) => {
   const likeNumber =  likes?.find((post) => (post.id === p.id ))

   return likeNumber?.totalLikes
}

export const isLiked = ({listIsLiked,p, userId}) => {
    const myLike = listIsLiked?.find((likes) => ((likes.userid === userId && likes.postid === p.id )))
    
    if(myLike){
        return true
    } else{
        return false
    }
}