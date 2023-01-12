import axios from "axios"

const config = {
    headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjczNTIzOTI4LCJleHAiOjE2NzM2MTAzMjh9.vmhIkwkevj6B_96M0DRxTVVFrsbaNNVPUcXx1hwX-GQ` },
};


export const request = async () => {
    let dataRequest

    try{
        dataRequest = {
            likesPost: await (await axios.get(`http://localhost:4000/likes`)).data,
            isLiked: await (await axios.post(`http://localhost:4000/isliked`, config)).data
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