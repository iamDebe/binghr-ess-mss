import React from 'react'
import { ReactComponent as ProfilePhoto } from "@/assets/images/profile-img.svg";
import Button from "@/components/button"
import { styled } from 'goober';


const StaffProfileCard = () => {
  return (
    <CardWrapper>
        <div className='card-img'><ProfilePhoto /></div>
        <div className='card-body'>
            <div className='card-title type-title3'><p>Employee ID:</p><p className='card-credentials type-title4'>UT/2016/0929</p></div>
            <div className='card-title type-title3'><p>Employee First Name:</p><p className='card-credentials type-title4'>Mojo</p></div>
            <div className='card-title type-title3'><p>Employee Last Name:</p><p className='card-credentials type-title4'>Face</p></div>
            <div className='card-title type-title3'><p>Employee Status:</p><p className='card-credentials type-title4'>Active</p></div>
            <div className='card-title type-title3'><p>Email:</p><p className='card-credentials type-title4'>mojoface@gmail.com</p></div>
            <div className='card-title type-title3'><p>Contact Number:</p><p className='card-credentials type-title4'>+234678898</p></div>
        </div>
        <Button 
          border="var(--highblue)"
          bg="var(--white)"
          width="11rem"
          textcolor="var(--highblue)"
          className="btn"
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
    gap: 1.5rem;
    padding: 1rem;

    .card-img{
      display:flex;
      justify-conten: center;
      border:2px solid blue;
    }
    .card-title{
      display: flex;
    }

    .card-credentials{
      color: var(--grey-400);
    }

    .card-body{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      border: 2px solid red;
    }

    .btn{
      align-self: center;
    }
`;