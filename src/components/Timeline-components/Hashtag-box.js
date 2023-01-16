import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function HashtagBox(){
    const navigate = useNavigate()
    const trends = ["javascript", "react", "react-native", "material","web-dev", "mobile", "css", "html", "node", "sql"]
    
    return(
        <Container>
            <h3>trending</h3>
            <div>
               {trends.map((trend,i) => (
                 <p key={i} onClick={() => navigate(`/hashtag/${trend}`)}>#{trend}</p>
               ))}
            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 301px;
    height: 406px;
    margin-left: 30px;
    background-color: #171717;
    border-radius: 16px;
    padding-bottom: 8px;
    font-weight: bold;
    font-size: 27px;
    text-align: left;
    color: #FFFFFF;

    div{
        border-top: 1px solid #484848;
        width: 100%;
        padding-top: 10px;
    }

    h3{
        margin-left: 16px;    
        padding-top: 12px;
        margin-bottom: 10px;
        }
    p{
        font-size: 19px;
        font-weight: bold;
        margin-left: 16px;
        margin-top: 8px;    
        cursor: pointer;
    }

`