import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function HashtagBox(){
    const navigate = useNavigate()
    const trends = ["javascript", "react", "react-native", "material","web-dev", "mobile", "css", "html", "node", "sql"]
    
    return(
        <Container>
            <h3>trending</h3>
            <div>
               {trends.map((trend) => (
                 <p onClick={() => navigate(`/hashtag/${trend}`)}>#{trend}</p>
               ))}
            </div>

        </Container>
    )
}

const Container = styled.div`
    width: 300px;
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
    }

    h3{
        margin-left: 16px;    
        padding-top: 12px;
        }
    p{
        font-size: 19px;
        font-weight: bold;
        margin-left: 16px;    
        cursor: pointer;
    }

`