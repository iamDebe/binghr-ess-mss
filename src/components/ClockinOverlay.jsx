import React from 'react';
import {ReactComponent as ClockInIcon} from "@/assets/images/clockin.svg";
import {ReactComponent as MealTImeIcon} from "@/assets/images/mealtime.svg";
import {ReactComponent as MealEndIcon} from "@/assets/images/mealend.svg";

const ClockinOverlay = ({day}) => {
  return (

    <div className='overlay' 
        style={{backgroundColor: day.clocked === true ? "var(--grey-200)" : "var(--white)" }}
    >
        <div  className='clockin-wrapper type-body3'>
            <div className='action'>
                <ClockInIcon fill="var(--grey-400)"/>
                <span className="action-text calendar-overlay-title">ClockIn In</span>
            </div>
            <div className='time calendar-overlay-time'>09:01am</div>
        </div>
        <div className='clockin-wrapper type-body3'>
            <div className='action'>
                <MealTImeIcon />
                <span className="action-text calendar-overlay-title">Meal Time</span>
            </div>
            <div className='time calendar-overlay-time'>12:30pm</div>
        </div>
        <div className='clockin-wrapper type-body3'>
            <div className='action'>
                <MealEndIcon />
                <span className="action-text calendar-overlay-title">Meal End</span>
            </div>
            <div className='time calendar-overlay-time'>01:01pm</div>
        </div>
        <div className='clockin-wrapper type-body3'>
            <div className='action'>
                <ClockInIcon  fill="var(--grey-400)"/>
                <span className="action-text calendar-overlay-title">Clock Out</span>
            </div>
            <div className='time calendar-overlay-time'>05:20pm</div>
        </div>
    </div> 
    )
}

export default ClockinOverlay;