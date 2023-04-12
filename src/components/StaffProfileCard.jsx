import React from 'react'
import { ReactComponent as ProfilePhoto } from "@/assets/images/profile-img.svg";
import Button from "@/components/button"
import { styled } from 'goober';


const StaffProfileCard = () => {
  return (
    <CardWrapper>
        <div className='card-img'><ProfilePhoto /></div>
        <div className='card-body'>
            <div className='type-title3 card-text'><p className='card-title '>Employee ID:</p><p className='card-credentials type-title4'> UT/2016/0929</p></div>
            <div className='type-title3 card-text'><p className='card-title '>Employee First Name:</p><p className='card-credentials type-title4'> Mojo</p></div>
            <div className='type-title3 card-text'><p className='card-title '>Employee Last Name:</p><p className='card-credentials type-title4'> Face</p></div>
            <div className='type-title3 card-text'><p className='card-title '>Employee Status:</p><p className='card-credentials type-title4'>Active</p></div>
            <div className='type-title3 card-text'><p className='card-title '>Email:</p><p className='card-credentials type-title4'> mojoface@gmail.com</p></div>
            <div className='type-title3 card-text'><p className='card-title '>Contact Number:</p><p className='card-credentials type-title4'> +234678898</p></div>
        </div>
        <Button 
          border="var(--highblue)"
          bg="var(--white)"
          width="11rem"
          textcolor="var(--highblue)"
          className="btn"
          margin="0rem 0rem 1rem 0rem"
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
    border-radius: .5rem;

    .card-img{
      display:flex;
      justify-content: center;
      border: .5px solid var(--grey-100);

    }
    .card-title{
      color:var(--grey-500);
    }

    .card-credentials{
      color: var(--grey-400);
      margin-left: .3rem;
    }

    .card-body{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
    }
    .card-text{
      display: flex;
    }

    .btn{
      align-self: center;
    }
`;