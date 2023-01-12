import axios from "axios"

export const request = async () => {
    let dataRequest
    
    dataRequest = {
        likesPost: await (await axios.get(`http://localhost:4000/likes`)).data
    }
    
    return dataRequest
}

export const lika = ({likes, p}) => {
    console.log(likes, p.id)

   const likeNumber =  likes?.find((post) => (post.id === p.id ))

   return likeNumber?.totalLikes
}