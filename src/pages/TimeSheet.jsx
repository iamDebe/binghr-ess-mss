import React from 'react'
import { styled } from "goober";
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button"
import TopBarWithSearch from '@/components/TopBarWithSearch';
import {ReactComponent as WatchIcon} from "@/assets/images/watch.svg"
import { ButtonWrapper } from './MyPay';




const TimeSheet = () => {


  return (
    <>
        <EssLayout >
            <TopBarWithSearch />
                <BtnWrapper>
                    <Button 
                        type="button"
                        bg="var(--lilac-400)"
                        textcolor="var(--grey-25)"
                        className="submit-button"
                        margin="3rem 0rem"
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
                        margin="3rem 0rem"
                        padding=".5rem 1.2rem"
                        border="var(--lilac-400)"
                    >
                        Recalculate
                    </Button>
                </ BtnWrapper>
                <HourSelectWrapper>
                    
                </HourSelectWrapper>
        </EssLayout>
    </>
  )
}

export default TimeSheet;

const BtnWrapper = styled("div")`
    display: flex;
    gap: .8rem;
`;

const HourSelectWrapper = styled("div")`
    border: 1px solid var(--grey-100);
    padding: .3rem 1rem;
`;