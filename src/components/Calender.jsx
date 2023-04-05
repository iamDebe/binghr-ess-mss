import { styled } from 'goober';
import React, { Fragment, useEffect, useState } from 'react';
import Button from "@/components/button";
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";
import {ReactComponent as ClockInIcon} from "@/assets/images/clockin.svg";
import {ReactComponent as MealTImeIcon} from "@/assets/images/mealtime.svg";
import {ReactComponent as MealEndIcon} from "@/assets/images/mealend.svg";
import {ReactComponent as RemoveIcon} from "@/assets/images/remove.svg";

import {desktopMidi} from "@/globalStyle";
import { desktop } from '../globalStyle';

const Calender = () => {

    const [showModal, setShowModal] = useState(false)
    const [weeks, setWeeks] = useState([])
    const [currentMonth, setCurrentMonth] = useState(0)
    const [thisMonth, setThisMonth] = useState("")
    const handleShowModal = ()=>{
        setShowModal(!showModal);
    }
    
    const generateCalender = ()=>{
        
        // Get the current date
        const currentDate = new Date();
        
        // Set the start date to 1 year ago from today
        const startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());

        // Set the end date to 1 year ahead from today
        const endDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
        
        // Loop through each month between the start and end dates
        for (let month = startDate.getMonth()+currentMonth; month <= endDate.getMonth()+currentMonth; month++) {
           
            // Create a new date object for the current month
            const thisMonth = new Date(currentDate.getFullYear(), month, 1);
        
            // Get the number of days in the current month
            const numDaysInMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0).getDate();
        
            // set the month and year header
            setThisMonth(thisMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))
           
            // Calculate the day of the week for the first day of the month
            const firstDayOfWeek = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1).getDay();
        
            // Calculate the number of blank days to add before the first day of the month
            const numBlankDays = (firstDayOfWeek + 6) % 7;
        
            // Create an array of empty spaces for the blank days
            const blankDays = new Array(numBlankDays).fill('  ');


            new Array(numBlankDays).fill('  ');

            
            

            // 
            
        
            // Create an array of days for the current month
            const monthDays = [...Array(numDaysInMonth).keys()].map(dd => { return{
                day:dd+1,
                clocked:false,
                clockedData:{}
            }});

            
            // Combine the arrays of blank days and month days
            const allDays = [...blankDays, ...monthDays];
        
            // Split the days into rows of 7
            const rows = allDays.reduce((rows, day, index) => {
            if (index % 7 === 0) {
                rows.push(allDays.slice(index, index + 7));
            }

            
            setWeeks(rows);
            
            return rows;
            }, []);
        
        }

    }

    const mm = ""

  

    const updateClockInState =(outer, inner)=>{
       
       const newWeekData = [...weeks];
       newWeekData[outer][inner].clocked = true;
       setWeeks(newWeekData);
      
    }

    useEffect(()=>{
        generateCalender();
    },[currentMonth])

    useEffect(()=>{
        console.log(weeks)
    },[weeks])
      
  return (
    <Container>
        <CalenderTitle>
            <p className='date-year type-title2'>{thisMonth !== "" && thisMonth}</p>
            <CalenderControlsWrapper>
                <BackIcon  className="swipe" onClick={()=>{
                    setCurrentMonth((prevCurrentMonth)=> prevCurrentMonth-1)}
                    }/>
                <div className='day-wrapper type-body3' onClick={()=>setCurrentMonth(0)}>Today</div>
                <NextIcon className="swipe" onClick={()=>{
                    setCurrentMonth((prevCurrentMonth)=> prevCurrentMonth+1)}
                    }/>
            </CalenderControlsWrapper>
        </CalenderTitle>
        <div className='line'></div>

        <CalenderMain>
            <div className='weekday-wrapper'>

                <li className='type-title3 weekdays'>Mon</li>
                <li className='type-title3 weekdays'>Tue</li>
                <li className='type-title3 weekdays'>Wed</li>
                <li className='type-title3 weekdays'>Tue</li>
                <li className='type-title3 weekdays'>Fri</li>
                <li className='type-title3 weekdays'>Sat</li>
                <li className='type-title3 weekdays'>Sun</li>
            </div>

          
            
           {weeks.map((row, index)=>{
               
                return (
                <div className='days-wrapper ' key={index}>
                    
                    {row.map((day, ii)=>(

                        <li key={ii} className='days type-body5' 
                            onClick={()=>{
                            updateClockInState(index, ii)
                        }}>
                        {day.day} {day.clocked==true ? 
                            <div className='overlay' onClick={handleShowModal} >
                                <div  className='clockin-wrapper type-body3'>
                                    <span className='action'><ClockInIcon  fill="var(--grey-400)"/>ClockIn In</span>
                                    <span className='time'>09:01am</span>
                                </div>
                                <div className='clockin-wrapper type-body3'>
                                    <span className='action'><MealTImeIcon />Meal Time</span>
                                    <span className='time'>12:30pm</span>
                                </div>
                                <div className='clockin-wrapper type-body3'>
                                    <span className='action'><MealEndIcon />Meal End</span>
                                    <span className='time'>01:01pm</span>
                                </div>
                                <div className='clockin-wrapper type-body3'>
                                    <span className='action'><ClockInIcon  fill="var(--grey-400)"/>Clock Out</span>
                                    <span className='time'>05:20pm</span>
                                </div>
                            </div> 
                        : ""  }
                        </li>
                    ))}
                    
                </div >
                ) 
           })} 
           
            {  showModal && <div className='calculate-modal'>
                        
                        <CalculateWrapper>
                            <div className='date-wrapper'>
                                <div className='type-body3'>Wed, <span >1 Feb</span> - <span >Sun, </span><span >5 Feb</span></div>
                            </div>
                            <div className="icon-wrapper">
                                <RemoveIcon width={30} className="icon" />
                            </div>
                        </CalculateWrapper>
                        <Button 
                            type="button"
                            bg="var(--lilac-400)"
                            textcolor="var(--grey-25)"
                            className="submit-button"
                            onClick={handleShowModal}
                            width="--button-width"
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

const CalenderTitle = styled("div")`
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

const CalenderControlsWrapper = styled("div")`
    display: flex;
    align-self: center;

    div{
        align-self: center;
    }
    
`;
 
const CalenderMain = styled("div")`


   
    
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
        
        & .days{
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
        }
    }
        
        li{
            list-style: none;
        }
        & .weekdays{
            text-align: center;
            margin: 1rem 0rem 0rem 0rem;
            color: var(--grey-500);
        }
       
        & .active {
            background-color: var(--grey-100);
        }
        .overlay {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: absolute;
            top: 0;
            background-color: var(--grey-200);
            height: 100%;
            width: 100%;


            & .clockin-wrapper{
                display: flex;
                flex-wrap: wrap;
                gap:.625rem;
                justify-content: space-around;

                ${desktopMidi}{
                    gap: 0px;
                }
            }
            & .icon{
                align-self: center;
            }
            & .action{
                display: flex;
                gap: .5rem;
                font-size: .65rem;
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
            border-radius: var(--br);

            ${desktop}{
                width: 20%;
            }

            @media screen and (max-width: 780px){
                width: 30%;
            }
            @media screen and (max-width: 542px){
                width: 50%;
            }
            
        }
`;

const CalculateWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    width: 100%;
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

