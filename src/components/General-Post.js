import styled from "styled-components"
import { AiOutlineHeart } from "react-icons/ai"

export default function GeneralPost() {
    return (
        <Container>

            <div className="post">
                <div className="headerPost">
                    <div className="leftSide">
                        <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" />
                        <AiOutlineHeart className="iconHeart" />
                    </div>
                    <div className="rightSide">
                        <p className="name">Juvenal Juvênico</p>
                        <p className="a">Lorem Ipsum is simply dummy text of the printing and typesettinLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PagLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.eMaker including versions of Lorem Ipsum.g industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="linkEmbed">
                    <iframe src="https://www.devmedia.com.br/html-iframe/43515" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
 border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    background-color: #171717;
    color: #FFFFFF;

  
    .headerPost{
        display: flex;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        position: absolute;
        top: 16px;
    }

    
    .iconHeart{
        width: 30px;
        height: 30px;
        color: #FFFFFF;
        margin-top: 8px;
        cursor: pointer;
        position: absolute;
        top: 72px;
    }
    .leftSide{
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

   .rightSide{
        width: 85%;
        margin-top: 16px;
        margin-left: 8px;
        overflow-wrap: break-word;
      
        
       
        .a{
           margin-top: 8px;
        }
   }

   .linkEmbed{
    display: flex;
    justify-content: center;

   }

   iframe{
        width: 90%;
        height: 80%;
        margin-top: 8px;
        margin-bottom: 16px;
   }

`