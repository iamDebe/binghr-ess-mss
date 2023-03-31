import { styled } from 'goober';
import React, { Fragment, useState } from 'react';
import Button from "@/components/button";
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";
import {ReactComponent as ClockInIcon} from "@/assets/images/clockin.svg";
import {ReactComponent as MealTImeIcon} from "@/assets/images/mealtime.svg";
import {ReactComponent as MealEndIcon} from "@/assets/images/mealend.svg";
import {ReactComponent as RemoveIcon} from "@/assets/images/remove.svg";
import { currentMonth, currentDate, calendarData } from '../utils/calenderData';

const Calender = ({}) => {

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = ()=>{
        setShowModal(!showModal);
    }
    
    
   
      
  return (
    <Container>
        <CalenderTitle>
            <p className='date-year'>{currentMonth[0].month} {currentMonth[0].year}</p>
            <CalenderControlsWrapper>
                <BackIcon  className="swipe"/>
                <div className='day-wrapper type-body3'>Today</div>
                <NextIcon className="swipe"/>
            </CalenderControlsWrapper>
        </CalenderTitle>
        <div className='line'></div>

        <CalenderMain>
            <li className='type-title3 weekdays'>Mon</li>
            <li className='type-title3 weekdays'>Tue</li>
            <li className='type-title3 weekdays'>Wed</li>
            <li className='type-title3 weekdays'>Tue</li>
            <li className='type-title3 weekdays'>Fri</li>
            <li className='type-title3 weekdays'>Sat</li>
            <li className='type-title3 weekdays'>Sun</li>

           
           
      

            {/* {  <div className='overlay' onClick={handleShowModal}>
                    <div>
                    <span className='action'><ClockInIcon  fill="var(--grey-400)"/>ClockIn In</span><span className=' type-body3 time'>09:01am</span>
                    </div>
                    <div>
                    <span className='action'><MealTImeIcon />Meal Time</span><span className=' type-body3 time'>12:30pm</span>
                    </div>
                    <div>
                    <span className='action'><MealEndIcon />Meal End</span><span className=' type-body3 time'>01:01pm</span>
                    </div>
                    <div>
                    <span className='action'><ClockInIcon  fill="var(--grey-400)"/>Clock Out</span><span className=' type-body3 time'>05:20pm</span>
                    </div>
                </div>
            } */}
           
            {  showModal && <div className='calculate-modal'>
                <div>
                    <CalculateWrapper>
                        <div className='date-wrapper'>
                            <div className='type-body3'>Wed, <span >1 Feb</span> - <span >Sun, </span><span >5 Feb</span></div>
                        </div>
                        <div className="icon-wrapper">
                            <RemoveIcon width={30} className="icon" />
                        </div>
                    </CalculateWrapper>
                   
                </div>
                <Button 
                    type="button"
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    className="submit-button"
                    padding=".5rem 1.2rem"
                    onClick={handleShowModal}
                >
                    Calculate
                </Button>
                </div>
            }
           
        </CalenderMain>


        
    </Container>
  )
}

export default Calender;

const Container = styled("div")`
    border: 2px solid var(--red-300);

    .line{
        display: flex;
        height: 2px;
        width: 96%;
        margin: .2rem auto;
        background-color: var(--red-200);
    }
`;

const CalenderTitle = styled("div")`
    display: flex;
    justify-content: space-between;
    padding: .5rem 1.2rem;

    p{
        align-self: center;
    }

    .day-wrapper{
        background-color: var(--red-100);
        border-radius: 1rem;
        padding: .5rem .8rem;
        margin: 0rem .5rem;
        color: var(--red-300);
        cursor: pointer;
    }
    .swipe{
        cursor: pointer;
    }

    
`;

const CalenderControlsWrapper = styled("div")`
    display: flex;
    align-self: center;

    div{
        align-self: center;
    }
    
`;
 
const CalenderMain = styled("div")`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(7, minmax(120px, 1fr));
        grid-template-rows: 40px;
        grid-auto-rows: 110px;
        overflow: auto;
        
        li, a{
            list-style: none;
            font
        }
        & .weekdays{
            border-bottom: 2px solid var(--red-400);
            text-align: center;
            margin: 1rem 0rem 0rem 0rem;
        }
        & .days{
                position: relative;
                border-bottom: 2px solid var(--grey-200);
                border-right: 2px solid var(--grey-200);
                text-align: center;
                line-height: 7rem;
                font-size: 2.5rem;
                color: var(--grey-200);
                font-weight: normal;
                cursor: pointer;

            &:nth-of-type(7n + 7) {
                border-right: 0;
              }
        }
        & .active {
            background-color: var(--grey-100);
        }
        .overlay {
            display: flex;
            gap: .6rem;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            top: 327px;
            background-color: var(--grey-200);
            height: 108px;
            width: 133.5px;

        div{
            display: flex;
            gap: .6rem;
            justify-content: space-around;
        }
        & .icon{
            align-self: center;
        }
        & .action{
            font-size: .65rem;
            display: flex;
            justify-content: start;
            gap: .2rem;
            color: var(--grey-400);
            cursor: pointer;

        }
        & .time{
            color: var(--grey-300);
            font-size: .65rem;
            cursor: pointer;
        }
    }
    .calculate-modal{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        top: 193px;
        right: 74px;
        background-color: white;
        padding: 1rem;
        border: 1px solid var(--grey-200);
        border-radius: .5rem;
        width: 18%;
        
    }
`;

const CalculateWrapper = styled("div")`
    display: flex;
    justify-content: center;
    gap: .8rem;
    & .icon-wrapper{
        display: flex;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        box-shadow: -2px 2px 2px 2px var(--grey-100);

        & .icon{
            align-self:center;
            justify-content:center;
            margin: 0 auto;
        }

    }
    .date-wrapper{
        align-self:center;
    }
`;



