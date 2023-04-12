
import React, { useEffect, useState } from 'react';
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";
import CalculateModalRight from '@/components/CalculateModalRight';
import CalculateModalLeft from '@/components/CalculateModalLeft';
import ClockinOverlay from '@/components/ClockinOverlay';
import { 
    CalenderMain, 
    Container, 
    CalenderTitle, 
    CalenderControlsWrapper 
} from '@/assets/wrappers/CalenderWrapper';
import { AnimatePresence } from 'framer-motion';


const Calender = () => {
    
  
    const [weeks, setWeeks] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [thisMonth, setThisMonth] = useState("");

    const [currentRange, setCurrentRange] = useState([])
    
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
            let startOfFirstDayOfTheMonthUnix = (Math.floor(thisMonth.setUTCHours(0,0,0,0) ) / 1000) + 86400
            let endOfFirstDayOfTheMonthUnix = (Math.floor(thisMonth.setUTCHours(23,59,59) ) / 1000) + 86400
        
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
            const monthDays = [...Array(numDaysInMonth).keys()].map(dd => { 
                const dayObject = {
                    day:dd+1,
                    clocked:false,
                    showModal: false,
                    showOverlay: false,
                    clockedData:{},
                    dayStart: startOfFirstDayOfTheMonthUnix,
                    dayEnd: endOfFirstDayOfTheMonthUnix
                }
                startOfFirstDayOfTheMonthUnix = startOfFirstDayOfTheMonthUnix + 86400
                endOfFirstDayOfTheMonthUnix = endOfFirstDayOfTheMonthUnix + 86400
                return dayObject
            });

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
        }else{
            newWeekData[outer][inner].clocked = false;
           
        }
       
       setWeeks(newWeekData);
    }
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

    const startRange = (outer, inner)=>{
        const startingPoint = weeks[outer][inner].dayStart
        const newRange = []
        newRange.push(startingPoint)
        setCurrentRange(newRange)
    }

    const endRange = (outer, inner)=>{
        const endingPoint = weeks[outer][inner].dayEnd
        const newRange = [...currentRange]
        newRange.push(endingPoint)
        const diff = newRange[1] - newRange[0];
        setCurrentRange(newRange);
        if(diff > 86400 ){
            const newWeekData = [...weeks];
            newWeekData[outer][inner].showModal = true;
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
                            <li key={ii} 
                                className = {
                                    (day.dayStart >= currentRange[0] && day.dayEnd <= currentRange[1]) ? 
                                    "days type-body5 active": 
                                    "days type-body5" 
                                } 
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
                                onMouseDown={()=>{
                                    if(typeof(day) != "string"){
                                        startRange(index, ii)
                                    }else{
                                        alert("cannot select empty cell ")
                                    }
                                }}
                                onMouseUp={()=>{
                                    if(typeof(day) != "string"){
                                        endRange(index, ii)
                                        
                                    }else{
                                        alert("cannot select empty cell ")
                                    }
                                }}
                            >
                                {day.day}  {day.showOverlay === true &&
                                        <ClockinOverlay  day={day} />
                                } 
                                <AnimatePresence > 
                                    { (day.clocked === true && day.showModal === true) ? 
                                    <div>
                                        {ii !== row.length - 1 ? 
                                            
                                            <CalculateModalRight  
                                                hideCalculateModal={hideCalculateModal} 
                                                weekIndex = {index} 
                                                dayIndex={ii} 
                                                clocked={day.clocked} 
                                                show={day.showModal}  
                                            />

                                         : 
                                            <CalculateModalLeft  
                                                hideCalculateModal={hideCalculateModal} 
                                                weekIndex = {index} 
                                                dayIndex={ii} 
                                                clocked={day.clocked} 
                                                show={day.showModal}  
                                            />  
                                          
                                         
                                         } 
                                    </div>

                                     : 
                                     
                                     ''
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




