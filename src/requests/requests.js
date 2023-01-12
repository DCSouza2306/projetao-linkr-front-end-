import axios from "axios"



export const request = async ({config}) => {
    let dataRequest

    try{
        dataRequest = {
            likesPost: await (await axios.get(`http://localhost:4000/likes`)).data,
            isLiked: await (await axios.post(`http://localhost:4000/isliked`, {},config)).data
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

export const isLiked = ({listIsLiked,p}) => {
    const myLike = listIsLiked?.find((likes) => ((likes.userid === 7 && likes.postid === p.id )))
    
    if(myLike){
        return true
    } else{
        return false
    }
}