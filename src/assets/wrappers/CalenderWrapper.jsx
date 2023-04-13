import React from "react";
import { styled } from "goober";
import { tablet, desktopMidi } from "@/globalStyle";


const CalenderWrapper = () => {
  return (
    <div>CalenderWrapper</div>
  )
}

export default CalenderWrapper;


export const Container = styled("div")`
    border: 1px solid var(--red-300);
    border-radius: var(--br);
    .line{
        display: flex;
        height: 2px;
        width: 96%;
        margin: .2rem auto;
        background-color: var(--red-200);
    }
`;
export const CalenderTitle = styled("div")`
    display: flex;
    justify-content: space-between;
    padding: .5rem 1.2rem;
    .date-year{
        color: var(--grey-500);
        @media screen and (max-width: 480px){
            font-size: .8rem;
        }
    }
    p{
        align-self: center;
    }
    .day-wrapper{
        background-color: var(--red-100);
        border-radius: 25px;
        padding: .5rem .8rem;
        margin: 0rem .5rem;
        color: var(--red-300);
        cursor: pointer;
    }
    .swipe{
        cursor: pointer;
        @media screen and (max-width: 480px){
        }
    }
`;
export const CalenderControlsWrapper = styled("div")`
    display: flex;
    align-self: center;
    div{
        align-self: center;
    }
`;
export const CalenderMain = styled("div")`
    .weekday-wrapper{
        display:flex;
        justify-content: space-around;
        border-bottom: 1px solid var(--red-400);
        padding: 0rem 0rem 1rem 0rem;
        width: 100%;
    }
    .days-wrapper{
        display:flex;
        justify-content: space-evenly;
        width: 100%;
        .days {
            position: relative;
            border-bottom: 1px solid var(--grey-200);
            border-right: 1px solid var(--grey-200);
            text-align: center;
            color: var(--grey-200);
            cursor: pointer;
            width: 100%;
            padding: 1.5rem 0rem;
            font-size: 1.5rem;
            &:nth-of-type(7n + 7) {
                border-right: 0;
            }

            .calculate-modal-right{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                position: absolute;
                top: 0px;
                left: 101%;
                background-color: var(--white);
                padding: .4rem;
                border: 1px solid var(--grey-200);
                border-radius: var(--br);
                width: 100%;

                @media screen and (max-width: 1160px){
                    top: -100px;
                    left: 0%;
                    width: 150%;

                }
                @media screen and (max-width: 930px){
                    top: -100px;
                    left: 0%;
                    width: 200%;

                }
                @media screen and (max-width: 420px){
                    top: -100px;
                    left: -105%;
                    width: 310%;
                }
               
            }
            .calculate-modal-left{
                position: absolute;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                top: 0px;
                right: 100%;
                background-color: var(--white);
                padding: .4rem;
                border: 1px solid var(--grey-200);
                border-radius: var(--br);
                width: 100%;
                @media screen and (max-width: 1160px){
                    top: 0px;
                    right: 100%;
                    width: 150%;
                }
                @media screen and (max-width: 930px){
                    top: 0px;
                    right: 100%;
                    width: 200%;
                }
                @media screen and (max-width: 420px){
                    top: 0px;
                    right: 100%;
                    width: 310%;
                }
              
            }
        }
    }
        
    li{
        list-style: none;
    }
    .weekdays{
        text-align: center;
        margin: 1rem 0rem 0rem 0rem;
        color: var(--grey-500);
    }
    .active {
        position: absolute;
        top: 0;
        background-color: var(--grey-100);
        opacity: .8;
        height: 100%;
        width: 100%;
    }
    .overlay {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        top: -.4px;
        background-color: var(--white);
        justify-content: center;
        gap: 10px;
        margin: 0.5px;
        height: 99%;
        width: 99.5%;
        .clockin-wrapper{
            display: flex;
            flex-wrap: wrap;
            gap:.625rem;
            justify-content: space-around;
            ${desktopMidi}{
                gap: 0px;
            }
        }
        .icon{
            align-self: center;
        }
        .action{
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: .65rem;
            color: var(--grey-400);
            cursor: pointer;
            .action-text {
                ${tablet}  {
                    display: none;
                }
            }
        }
        .time{
            color: var(--grey-300);
            cursor: pointer;
        }
    }
    
   
`;