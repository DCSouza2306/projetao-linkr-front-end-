import styled from "styled-components"
import { IoIosArrowDown} from "react-icons/io"
import { useState } from "react"

export default function Header() {
    const [showLoggoutBox, setShowLoggoutBox] = useState(false)
    
    function toggleLogout(){
        setShowLoggoutBox(!showLoggoutBox)
        console.log("OI")
    }
    
    return (
        <Container showLoggoutBox={showLoggoutBox}>
            <h1>linkr</h1>
            <div>
                <IoIosArrowDown className="arrowIcon" onClick={() => toggleLogout()}/>
                <img src="https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000" />
                <div className="logoutBox">
                    Logout
                </div>
            </div>
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #151515;
    
    div{
        display: flex;
        align-items: center;
        position: relative;
    }

    .logoutBox{
        width: 140px;
        height: 72px;
        background-color: #171717;
        position: absolute;
        top: 62px;
        right: 0px;
        font-size: 17px;
        font-weight: bold;
        color: #FFFFFF;
        display: ${props => props.showLoggoutBox === false ? "none" : "flex"};
        align-items: center;
        justify-content: center;
        border-radius: 0 0 0 20px;
    }

    .arrowIcon{
        height: 30px;
        width: 30px;
        color: #FFFFFF;
        margin-top: 16px;
        margin-right: 8px;
        cursor: pointer;
    }

    h1{
        font-size: 49px;
        font-weight: bold;
        color: #FFFFFF;
        margin-left: 32px;
    }
    
    img{
        width: 53px;
        height: 53px;
        border-radius: 30000px;
        margin-right: 32px;
        object-fit: fill;
    }
`