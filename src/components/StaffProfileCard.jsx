import React from 'react'
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import Button from "@/components/button"


const StaffProfileCard = () => {
  return (
    <CardWrapper>
        <div className='card-img'><ProfilePhoto /></div>
        <div className='card-body'>
            <div className='card-body'><h5>lorem:</h5><p className='card-credentials'>lorem</p></div>
            <div className='card-body'><h5>lorem:</h5><p className='card-credentials'>lorem</p></div>
            <div className='card-body'><h5>lorem:</h5><p className='card-credentials'>lorem</p></div>
            <div className='card-body'><h5>lorem:</h5><p className='card-credentials'>lorem</p></div>
            <div className='card-body'><h5>lorem:</h5><p className='card-credentials'>lorem</p></div>
        </div>
        <Button />
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
`;