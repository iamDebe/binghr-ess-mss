import React, { useState } from 'react'
import EssLayout from "@/components/EssLayout";
import TopBarWithSearch from "@/components/TopBarWithSearch";
import Button from "@/components/button";
import { ButtonWrapper } from '@/pages/MyPay';
import {ReactComponent as WatchIcon} from "@/assets/images/watch.svg";
import TimeoffCalender from '@/components/TimeoffCalender';





const MyTimeOff = () => {

  const [showCalender, setShowCalender] = useState(false)
  const handleShowCalender = ()=>{
    setShowCalender(!showCalender)
}
  return (
    <>
        <EssLayout>
          <TopBarWithSearch />
          <ButtonWrapper>
            <Button 
              type="button"
              bg="var(--lilac-400)"
              textcolor="var(--grey-25)"
              className="submit-button"
              margin="3rem 0rem"
              padding=".5rem 1.2rem"
              rightIcon={<WatchIcon  fill="white" />}
              onClick={handleShowCalender}
            >
              Request Timeoff
            </Button>
          </ButtonWrapper>
          {showCalender && <TimeoffCalender />}
        </EssLayout>
    </>
  )
}

export default MyTimeOff