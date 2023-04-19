
import React, { useEffect, useState } from 'react';
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";
import CalculateModalRight from '@/components/CalculateModalRight';
import CalculateModalLeft from '@/components/CalculateModalLeft';
import ClockinOverlay from '@/components/ClockinOverlay';
import { CalenderMain, Container, CalenderTitle, CalenderControlsWrapper } from '@/assets/wrappers/CalenderWrapper';
import { AnimatePresence } from 'framer-motion';
import { generateCalender } from '@/utils/calendar';


    const Calender = ({
      clickHandler, 
      doubleClickHandler, 
      mouseUpHandler, 
      mouseDownHandler, 
      currentRange, 
      weeks, 
      setWeeks, 
      hideCalculateModal,
      mouseOverHandler,
      mouseOutHandler
    }) => {
    
    const [currentMonth, setCurrentMonth] = useState(0);

    const [thisMonth, setThisMonth] = useState("");
    
    useEffect(()=>{
        const getMonth = generateCalender(currentMonth)
        setWeeks(getMonth.weeks);
        setThisMonth(getMonth.thisCurrentMonth)
    },[currentMonth]);

    useEffect(()=>{
        const getMonth = generateCalender(currentMonth)
        setWeeks(getMonth.weeks);
        setThisMonth(getMonth.thisCurrentMonth)
    },[]);
    
      
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
                                            clickHandler(day, index, ii)
                                          break;
                                        }
                                        case 2: {
                                          doubleClickHandler(index, ii)
                                          break;
                                        }
                                        
                                        default: {
                                          break;
                                        }
                                      }
                                   
                                  }}
                                onMouseOver={()=>mouseOverHandler(day, index, ii)}
                                onMouseOut={()=>{mouseOutHandler(index, ii)}}
                                onMouseDown={()=>mouseDownHandler(day, index, ii)}
                                onMouseUp={()=>mouseUpHandler(day, index, ii)}
                            >
                                {day.day}  {day.showOverlay === true &&
                                        <ClockinOverlay  day={day} />
                                } 
                                <AnimatePresence > 
                                    { (day.showModal === true) ? 
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




