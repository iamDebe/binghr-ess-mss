import React from 'react';
import Button from "@/components/button";
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';


const StaffProfileCard = () => {
  return (
    <CardWrapper>
        <div className='card-img'><ProfilePhoto /> </div>
        <div className='card-body'>
            <div><h5 className='card-title' >Employee ID:</h5><p className='card-details'>UT/2016/0929</p></div>
            <div><h5 className='card-title' >Employee First Name:</h5><p className='card-details'>Mojo</p></div>
            <div><h5 className='card-title' >Employee Last Name:</h5><p className='card-details'>Face</p></div>
            <div><h5 className='card-title' >Employee Status:</h5><p className='card-details'>Active</p></div>
            <div><h5 className='card-title' >Email:</h5><p className='card-details'>mojoface@gmail.com</p></div>
            <div><h5 className='card-title' >Contact Number:</h5><p className='card-details'>+123 5676 943</p></div>
        </div>

        <Button />

    </CardWrapper>
  )
}

export default StaffProfileCard;

const CardWrapper = styled("div")`

`;

