import { useParams } from "react-router-dom"
import styled from "styled-components"

import HashtagBox from "../components/Timeline-components/Hashtag-box"
import Header from "../components/Header-components/Header"


export default function HashtagPage() {
    const {hashtag} = useParams()

    return (
        <Container>
            <Header />
            <div className="content">
                <div className="timeLineContainer">
                    <h2>#{hashtag}</h2>

                    <div className="timeLine">
                        
                    </div>
                </div>
                <div className="sideBar">
                    <HashtagBox />
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: blueviolet;

    .content{
        width: 100%;
        display: flex;
        justify-content: center;

        .timeLineContainer{
            width: 600px;
            height: 200vw;
            background-color: rebeccapurple;

            h2{
                font-size: 43px;
                font-weight: bold;
                margin: 40px 0;
                background-color: aqua;
            }

            .timeLine{
                width: 100%;
                background-color: red;
            }
        }

        .sideBar{
            margin-top: 123px;
            background-color: antiquewhite;
            margin-left: 24px;
        }
    }
`