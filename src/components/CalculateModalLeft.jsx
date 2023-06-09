import React from 'react';
import { styled } from 'goober';
import {ReactComponent as RemoveIcon} from "@/assets/images/remove.svg";
import Button from "@/components/button";
import { motion } from 'framer-motion';



const CalculateModalLeft = ({hideCalculateModal, weekIndex, dayIndex, clocked, show}) => {
   
  return (

    <motion.div
        initial={{y:-60, x:700, opacity:0}}
        animate={{y:-75, x:0, opacity:1}}
        exit={{ y:-60, x:700, opacity:0}}
        transition={{duration:1}}

    >
        <div className='calculate-modal-left'
           
        >
            <CalculateWrapper>
                <div className='date-wrapper'>
                    <div className='type-body3'>Wed, 1 Feb</div>
                </div>
                <div className="icon-wrapper" 
                    >
                    <RemoveIcon width={30} className="icon" onClick={()=>{
                    hideCalculateModal(weekIndex, dayIndex)
                    }}/>
                </div>
            </CalculateWrapper>
            <Button 
                type="button"
                bg="var(--lilac-400)"
                textcolor="var(--grey-25)"
                className="submit-button"
                width="--button-width"
                margin="0rem 0rem 0rem 0rem"
            >
                Calculate
            </Button>
        </div>

  
    </motion.div>
  )
}

export default CalculateModalLeft;


const CalculateWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    width: 100%;
    z-index: 10000;
    .icon-wrapper{
        display: flex;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: -2px 2px 2px 2px var(--grey-100);

        .icon{
            align-self:center;
            justify-content:center;
            margin: 0 auto;
        }

    }
    .date-wrapper{
        align-self:center;
    }

   
`;