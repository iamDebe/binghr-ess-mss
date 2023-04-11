import React from 'react'
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import Button from "@/components/button"
import { styled } from 'goober';


const StaffProfileCard = () => {
  return (
    <CardWrapper>
        <div className='card-img'><ProfilePhoto /></div>
        <div className='card-body'>
            <div className='card-title type-title3'><h5>Employee ID:</h5><p className='card-credentials'>UT/2016/0929</p></div>
            <div className='card-title type-title3'><h5>Employee First Name</h5><p className='card-credentials'>Mojo</p></div>
            <div className='card-title type-title3'><h5>Employee Last Name:</h5><p className='card-credentials'>Face</p></div>
            <div className='card-title type-title3'><h5>Employee Status:</h5><p className='card-credentials'>Active</p></div>
            <div className='card-title type-title3'><h5>Email:</h5><p className='card-credentials'>mojoface@gmail.com</p></div>
            <div className='card-title type-title3'><h5>Contact Number:</h5><p className='card-credentials'>+234678898</p></div>
        </div>
        <Button 
          border="var(--highblue)"
          bg="var(--white)"
        >
          View Profile
        </Button>
    </CardWrapper>
  )
}

export default StaffProfileCard;

const CardWrapper = styled("div")`
    background-color: var(--white);
    border: 1px solid var(--grey-200);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .card-title{
      display: flex;
    }
`;