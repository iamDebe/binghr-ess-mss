import React from 'react'
import { styled } from "goober";
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button"
import TopBarWithSearch from '@/components/TopBarWithSearch';
import {ReactComponent as WatchIcon} from "@/assets/images/watch.svg"
import Calender from '@/components/Calender';
import { desktopMidi, tablet } from '@/globalStyle';

const TimeSheet = ({setShowModal, showModal, handleShowModal}) => {


  return (
    <>
        <EssLayout >
            <TopBarWithSearch />
            <FlexColumnWrapper>
                <Container>
                    <BtnWrapper>
                        <Button 
                            type="button"
                            bg="var(--lilac-400)"
                            textcolor="var(--grey-25)"
                            className="submit-button"
                            padding=".5rem 1.2rem"
                            leftIcon={<WatchIcon  fill="white" />}
                        >
                            Clock In
                        </Button>
                        <Button  
                            type="button"
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
                <Calender setShowModal={setShowModal} showModal={showModal} handleShowModal={handleShowModal}/>  
            </FlexColumnWrapper>

        </EssLayout>
    </>
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

    ${desktopMidi}{
       
    }


    & .wrapper{
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

    & .wrapper label{
        display: flex;
        justify-content: space-around;
     }

    ${desktopMidi}{
        & .wrapper label{
           display: flex;
           justify-content: space-around;
        }
    }
`;

const TotalWrapper = styled("div")`
    display: flex;
    & .total-wrapper{
        background-color: var(--red-400);
        align-self: center;
        padding: .4rem;
        border-radius: .3rem;
    }
    & .total-wrapper label{
        display: flex;
        justify-content: space-around;
     }
    & .total-label, .total-span{
        color: var(--grey-50);
    }
    ${desktopMidi}{
        & .total-wrapper label{
           display: flex;
           justify-content: space-around;
        }
    }
`;

