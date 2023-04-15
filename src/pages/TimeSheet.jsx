import React, { useState } from 'react';
import { styled } from "goober";
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button"
import {ReactComponent as WatchIcon} from "@/assets/images/watch.svg"
import Calender from '@/components/Calender';
import { desktopMidi } from '@/globalStyle';

const TimeSheet = ({setShowModal, showModal, handleShowModal}) => {

    const [currentBtnStyling, seturrentBtnStyling] = useState(0);

    const [weeks, setWeeks] = useState([]);

    const [currentRange, setCurrentRange] = useState([]);

    const buttonParams = [ 
           { bgColor: "var(--lilac-400)",
             btnText: "Clock In" 
            },
           { bgColor: " var(--orange-400)",
             btnText: " Meal In"
            },
           { bgColor: "var(--highblue)",
             btnText: "Meal Out"
            },
           { bgColor: "var(--lilac-400)",
             btnText: "Clock Out"
            }
          
    ]

    const handleBtnChange = ()=>{
            if(currentBtnStyling === (buttonParams.length - 1) ){
                seturrentBtnStyling(0)
            }else {
                seturrentBtnStyling((prevCurrentBtnStyling) => prevCurrentBtnStyling + 1 )

            }

    }
    

    const clickHandler = (day, index, ii)=>{
        if(typeof(day) != "string"){
           return clockIn(index, ii);
        };
    }

    const mouseUpHandler = (day, index, ii)=>{
        if(typeof(day) != "string"){
            endRange(index, ii)
        }else{
            alert("cannot select empty cell ")
        }
        return;
    }

    const mouseDownHandler = (day, index, ii)=>{
        if(typeof(day) != "string"){
            startRange(index, ii);
        }else{
            alert("cannot select empty cell ")
        }
        return;
    }

    const mouseOverHandler = (day, index, ii)=>{
        if(typeof(day) != "string"){
            showOverlay(index, ii)
        }
    }

    const hideCalculateModal =(outer, inner)=>{
        const newWeekData = [...weeks];
        newWeekData[outer][inner].showModal = false;
        setWeeks(newWeekData);
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
            showCalculateModal(outer, inner)
        }
    }
    
  return (

        <EssLayout >
            <FlexColumnWrapper>
                <Container>
                    <BtnWrapper>
                    <Button
                            bg={buttonParams[currentBtnStyling].bgColor}
                            textcolor="var(--grey-25)"
                            className="clockin-btn"
                            width="8.75rem"
                            iconcolor="var(--grey-25)"
                            leftIcon={<WatchIcon />}
                            onClick={handleBtnChange}
                        >
                        {buttonParams[currentBtnStyling].btnText}
                        </Button>
                        
                        <Button
                            bg="var(--white)"
                            textcolor="var(--lilac-400)"
                            className="submit-button"
                            padding=".5rem 1.2rem"
                            border="var(--lilac-400)"
                            onClick={handleShowModal}
                        >
                            Recalculate
                        </Button>
                    </ BtnWrapper>
                    <HourSelectWrapper>
                        <WeekWrapper>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Mon: <span className='type-body4'>0hrs</span></label>
                            </div>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Tue: <span className='type-body4'>0hrs</span></label>
                            </div>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Wed: <span className='type-body4'>0hrs</span></label>
                            </div>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Thu: <span className='type-body4'>0hrs</span></label>
                            </div>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Fri: <span className='type-body4'>0hrs</span></label>
                            </div>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Sat: <span className='type-body4'>0hrs</span></label>
                            </div>
                            <div className='wrapper'>
                                <label className='type-title4' htmlFor="">Sun: <span  className='type-bod43'>0hrs</span></label>
                            </div>
                            <TotalWrapper>
                                <div className='total-wrapper'>
                                    <label className='type-title4 total-label' htmlFor="">Total: <span  className='type-body4 total-span'>0hrs</span></label>
                                </div>
                            </TotalWrapper>
                        </WeekWrapper>
                        
                      </HourSelectWrapper>
                </Container>  
                <Calender 
                    setShowModal={setShowModal} 
                    showModal={showModal} 
                    handleShowModal={handleShowModal} 
                    clickHandler={clickHandler} 
                    doubleClickHandler={showCalculateModal} 
                    mouseUpHandler={mouseUpHandler} 
                    mouseDownHandler={mouseDownHandler} 
                    weeks={weeks} 
                    setWeeks={setWeeks} 
                    currentRange={currentRange} 
                    hideCalculateModal={hideCalculateModal}
                    mouseOverHandler={mouseOverHandler}
                    showOverlay={showOverlay}
                    mouseOutHandler={hideOverlay} 
                />  
            </FlexColumnWrapper>
        </EssLayout>
  )
}

export default TimeSheet;

const FlexColumnWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
`;
const Container = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: .5rem;
    width: 100%; 
`;
const BtnWrapper = styled("div")`
    display: flex;
    gap: .6rem;
`;
const HourSelectWrapper = styled("div")`
    display: flex;
    align-self: center;
    gap: 2rem;
    border: 1px solid var(--grey-100);
    border-radius: var(--br);
    padding: .3rem 1rem;
    .wrapper{
        background-color: var(--grey-100);
        padding: .3rem .25rem;
        border-radius: .3rem;
    }
    label{
        color: var(--grey-500);
    }
    span{
        color: var(--grey-300);
    }
`;

const WeekWrapper = styled("div")`
    display: flex;
    align-self: center;
    flex-wrap: wrap;
    gap: 1.2rem;

    .wrapper label{
        display: flex;
        justify-content: space-around;
    }
    ${desktopMidi}{
        .wrapper label{
           display: flex;
           justify-content: space-around;
        }
    }
`;
const TotalWrapper = styled("div")`
    display: flex;
    .total-wrapper {
        background-color: var(--red-400);
        align-self: center;
        padding: .4rem;
        border-radius: .3rem;
        label {
            display: flex;
            justify-content: space-around;
        }
    }
    .total-label, .total-span{
        color: var(--grey-50);
    }
    ${desktopMidi}{
        .total-wrapper label{
           display: flex;
           justify-content: space-around;
        }
    }
`;

