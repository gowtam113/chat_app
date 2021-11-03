import styled from "styled-components";

const Wrap=styled.div`
    color: white;
    padding: 2.5px 8px;
    height: 35px;
    border-left: 1px solid white;
    width: 38px;
    float: right;


    &:hover {
        cursor: pointer;
        background-color: #007bff;
        -ms-transform: scale(1.02); /* IE 9 */
        transform: scale(1.02);
    }
`;

export default function SendBtnIcon(){
    return <Wrap>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon bi bi-cursor-fill" viewBox="0 0 16 16">
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
        </svg>
    </Wrap>;
}