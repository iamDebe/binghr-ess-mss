import { styled } from 'goober';
import React, { useEffect, useState } from 'react';
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";
import { tablet, desktopMidi, desktop } from "@/globalStyle";
import CalculateModalRight from '@/components/CalculateModalRight';
import CalculateModalLeft from '@/components/CalculateModalLeft';
import ClockinOverlay from '@/components/ClockinOverlay';
import { mobile } from '@/globalStyle';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileExtraSmall, mobileSmall } from '../globalStyle';

const Calender = () => {
    
  
    const [weeks, setWeeks] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [thisMonth, setThisMonth] = useState("");
    
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
            const blankDays = new Array(numBlankDays).fill('');

            // Create an array of days for the current month
            const monthDays = [...Array(numDaysInMonth).keys()].map(dd => { return{
                day:dd+1,
                clocked:false,
                showModal: false,
                showOverlay: false,
                clockedData:{}
            }});

            // Combine the arrays of blank days and month days
            const allDays = [...blankDays, ...monthDays];
            
            // Split the days into rows of 7
            const rows = allDays.reduce((rows, day, index) => {
               
            if (index % 7 === 0) {
                const eachWeek = allDays.slice(index, index + 7)

                if(eachWeek.length < 7){
                    const numberOfDaysLeft = (7 - eachWeek.length)
                    for (let i = 0; i < numberOfDaysLeft; i++) {
                        eachWeek.push("")
                    }
                }
                rows.push(eachWeek);
            }

            setWeeks(rows);
            
            return rows;
            }, []);
        
        }

    }

    const clockIn =(outer, inner)=>{
       const newWeekData = [...weeks];
       if(newWeekData[outer][inner].clocked === false){
            newWeekData[outer][inner].clocked = true;
            // newWeekData[outer][inner].showModal = true;
        }else{
            newWeekData[outer][inner].clocked = false;
           
        }
       
       setWeeks(newWeekData);
    }

    // const selectClockedRange = (outer, inner) => {
    //     const newWeekData = [...weeks];
    //     newWeekData[outer].forEach((day, dayIndex)=>{
    //         if(day.clocked === true && dayIndex <= inner){
    //             newWeekData[outer][dayIndex].selected 
    //         }
    //     })
    // }

    const showCalculateModal = (outer, inner) => {
        const newWeekData = [...weeks];
        newWeekData.forEach(week => {
            week.forEach(day=>{
                if(day !== ""){
                    day.showModal=false
                }
                
            })
        });

        newWeekData[outer][inner].showModal = true;
        setWeeks(newWeekData);
    }

    const hideCalculateModal =(outer, inner)=>{
       const newWeekData = [...weeks];
       newWeekData[outer][inner].showModal = false;
       setWeeks(newWeekData);
    }
    const showOverlay =(outer, inner)=>{
       const newWeekData = [...weeks];
       newWeekData[outer][inner].showOverlay = true;
       setWeeks(newWeekData);
    }
    const hideOverlay =(outer, inner)=>{
       const newWeekData = [...weeks];
       if(newWeekData[outer][inner].clocked === false){
           newWeekData[outer][inner].showOverlay = false;
           setWeeks(newWeekData);
        }
    }

    useEffect(()=>{
        generateCalender();
    },[currentMonth])

    useEffect(()=>{
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
                                onClick={(event)=>{
                                    switch (event.detail) {
                                        case 1: {
                                            if(typeof(day) != "string"){
                                                clockIn(index, ii)
                                            };
                                          break;
                                        }
                                        case 2: {
                                          showCalculateModal(index, ii)
                                          break;
                                        }
                                        
                                        default: {
                                          break;
                                        }
                                      }
                                    
                                   
                                }}
                                onMouseOver={()=>{
                                    if(typeof(day) != "string"){
                                        showOverlay(index, ii)
                                    }
                                }}
                                onMouseOut={()=>{hideOverlay(index, ii)}}
                            >
                                {day.day}  {day.showOverlay === true &&
                                        <ClockinOverlay  day={day} />
                                } 
                                <AnimatePresence>
                                    { (day.clocked === true && day.showModal === true) ? 
                                    <>
                                        {ii !== row.length - 1 ?
                                             <motion.div
                                             key="box"
                                            
                                         >
                                             <CalculateModalRight  
                                                 hideCalculateModal={hideCalculateModal} 
                                                 weekIndex = {index} 
                                                 dayIndex={ii} 
                                                 clocked={day.clocked} 
                                                 show={day.showModal}  
                                             />
                                         </motion.div>

                                         :
                                            <motion.div
                                            key="box"
                                           
                                            >
                                            
                                                <CalculateModalLeft  
                                                    hideCalculateModal={hideCalculateModal} 
                                                    weekIndex = {index} 
                                                    dayIndex={ii} 
                                                    clocked={day.clocked} 
                                                    show={day.showModal}  
                                                />
                                            </motion.div>
                                         
                                         }
                                       
                                       
                                    </>
                                    : ''
                                    }
                                </AnimatePresence>
                            </li>
                        ))}
                    </div >
                ) 
           })} 
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
        background-color: var(--grey-100);
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
    .calculate-modal-right{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        top: 0px;
        left: 136px;
        background-color: var(--white);
        padding: .4rem;
        border: 1px solid var(--grey-200);
        border-radius: var(--br);
        z-index: 100;
        ${desktop}{
            width: 100%;
        }
        ${desktopMidi}{
            width: 150%;
        }
        ${tablet}{
            width: 150%;
        }
        ${mobile}{
            width: 200%;
        }

        ${mobileSmall}{
            width: 300%;
        }
        ${mobileExtraSmall}{
            width: 400%;
        }
        
        
    }
    .calculate-modal-left{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        top: 0px;
        right: 136px;
        background-color: var(--white);
        padding: .4rem;
        border: 1px solid var(--grey-200);
        border-radius: var(--br);
        z-index: 100;
        ${desktop}{
            width: 100%;
        }
        ${desktopMidi}{
            width: 150%;
        }
        ${tablet}{
            width: 150%;
        }
        ${mobile}{
            width: 200%;
        }

        ${mobileSmall}{
            width: 300%;
        }
        ${mobileExtraSmall}{
            width: 400%;
        }
        
        
    }
`;



