import React, { useState } from 'react'
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button";
import {ReactComponent as WatchIcon} from "@/assets/images/watch.svg";
import TimeoffCalender from '@/components/TimeoffCalender'
import { styled } from 'goober';





const MyTimeOff = () => {

  const [showCalender, setShowCalender] = useState(false)
  const handleShowCalender = ()=>{
    setShowCalender(!showCalender)
}
  return (
    <>
        <EssLayout>
            <ButtonWrapper>
              <Button 
                type="button"
                bg="var(--lilac-400)"
                textcolor="var(--grey-25)"
                className="submit-button"
                margin="3rem 0rem"
                padding="1rem"
                rightIcon={<WatchIcon  fill="white" />}
                onClick={handleShowCalender}
                width="--button-width"
              >
                Request Timeoff
              </Button>
            </ButtonWrapper>
          {showCalender && <TimeoffCalender />}
        </EssLayout>
    </>
  )
}

export default MyTimeOff;

const ButtonWrapper = styled("div")`
    width: 20%;
`;
