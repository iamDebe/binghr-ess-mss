import React, { Fragment, useEffect, useState } from 'react';
import { styled } from 'goober';
import Button from "@/components/button";
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";
import {ReactComponent as RemoveIcon} from "@/assets/images/remove.svg";
import SelectField from '@/components/forms/SelectField';
import TextAreaField from '@/components/forms/TextAreaField';
import {desktopMidi} from "@/globalStyle";

const timeOfReason = ["Select Time of Reason", "Sick Leave", "Vacation", "Honey Moon"];


const TimeoffCalender = () => {
 
    const [showModal, setShowModal] = useState(false);
    const [weeks, setWeeks] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [thisMonth, setThisMonth] = useState("");
    const [toggleActive, setToggleActive] = useState(true);
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
        
            // Create an array of days for the current month
            const monthDays = [...Array(numDaysInMonth).keys()].map(dd => { return{
                day:dd+1,
                clocked:false,
                isActive: false,
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

    const highlightTimeoffRange =(outer, inner)=>{
        const newWeekData = [...weeks];
        newWeekData[outer][inner].isActive = newWeekData[outer][inner].isActive === true ? false: true;
        setWeeks(newWeekData);
        setToggleActive(!toggleActive)

    }

    useEffect(()=>{
        generateCalender();
    },[currentMonth])

    useEffect(()=>{
    },[weeks])
      
  return (
    <Container>
        <CalenderTitle>
            <p className='date-year'>{thisMonth !== "" && thisMonth}</p>
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

                        <li key={ii} className={`days type-body5` }
                            onClick={()=>{
                                highlightTimeoffRange(index, ii)
                            }}>
                            {day.day} {day.isActive ? 
                                <div className="active" onClick={handleShowModal}>
                                </div> 
                            : ""  }
                        </li>
                    ))}
                    
                </div >
                ) 
           })} 
           
            {showModal && <div className='reason-modal'>
                <div>
                    <CalculateWrapper>
                        <div className='date-wrapper'>
                           <h5 className='type-title2'>Time of Reason</h5>
                        </div>
                        <div className="icon-wrapper"  onClick={handleShowModal}>
                            <RemoveIcon width={30} className="icon" />
                        </div>
                    </CalculateWrapper>
                   
                </div>
                <p className='type-title3 reason-month'>{thisMonth}</p>
               <SelectField label="Reason" placeholder="hello">
                {timeOfReason.map((title) => (
                            <option key={title} value={title}>
                            {title}
                            </option>
                        ))}
                </SelectField>
                <TextAreaField  label="Description" placeholder="Type here..." rows={5} cols={30} />
                <Button 
                    type="button"
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    className="submit-button"
                    padding=".5rem 1.2rem"
                    margin="0rem 0rem 1rem 0rem"
                    onClick={handleShowModal}
                >
                    Request Approval
                </Button>
                </div>
            }
           
        </CalenderMain>
       

        
    </Container>
  )
}

export default TimeoffCalender






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

${desktopMidi}{
    margin-top: 2rem;
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
        border-radius: var(--br);
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
                padding: 2.5rem 0rem;
                text-align: center;
                color: var(--grey-200);
                cursor: pointer;
                width: 100%;

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
            position: absolute;
            top: 0;
            background-color: var(--grey-50);
            opacity: .8;
            height: 100%;
            width: 100%;
        }
        
        .reason-modal{
            position: absolute;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            top: 193px;
            right: 74px;
            background-color: white;
            padding: 1.5rem;
            border: 1px solid var(--grey-200);
            border-radius: var(--br);
            width: 18%;
            
            
        }
        & .reason-month{
            color: var(--grey-300);
        }
`;

const CalculateWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    & .icon-wrapper{
        display: flex;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        box-shadow: -2px 2px 2px 2px var(--grey-100);
        cursor: pointer;

        & .icon{
            align-self:center;
            justify-content:center;
            margin: 0 auto;
        }

    }
    h5{
        color: var(--grey-400);
    }
   
    .date-wrapper{
        align-self:center;
    }
   
`;

