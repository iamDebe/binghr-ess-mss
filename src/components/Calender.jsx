import { styled } from 'goober';
import React, { Children } from 'react';
import {ReactComponent as NextIcon} from "@/assets/images/next.svg";
import {ReactComponent as BackIcon} from "@/assets/images/back.svg";

const Calender = ({}) => {
  return (
    <Container>
        <CalenderTitle>
            <p className='date-year'>February 2023</p>
            <CalenderControlsWrapper>
                <BackIcon  className="swipe"/>
                <div className='day-wrapper type-body3'>Today</div>
                <NextIcon className="swipe"/>
            </CalenderControlsWrapper>
        </CalenderTitle>
        <div className='line'></div>

        <CalenderMain>
       
            {/* <div className=''>
                <ul className='calender-head'>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Tue</li>
                    <li>Fri</li>
                    <li>Sat</li>
                    <li>Sun</li>
                </ul>
            </div>
           <div className=''>
                <ul className='calender-body'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                </ul>
            </div>  */}

            <table>
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                </tbody>
            </table>
        </CalenderMain>
        
    </Container>
  )
}

export default Calender;

const Container = styled("div")`
    border: 2px solid var(--red-300);

    .line{
        display: flex;
        height: 2px;
        width: 96%;
        margin: .2rem auto;
        background-color: var(--red-200);
    }
`;

const CalenderTitle = styled("div")`
    display: flex;
    justify-content: space-between;
    padding: .5rem 1.2rem;

    p{
        align-self: center;
    }

    .day-wrapper{
        background-color: var(--red-100);
        border-radius: 1rem;
        padding: .5rem .8rem;
        margin: 0rem .5rem;
        color: var(--red-300);
        cursor: pointer;
    }
    .swipe{
        cursor: pointer;
    }

    
`;

const CalenderControlsWrapper = styled("div")`
    display: flex;
    align-self: center;

    div{
        align-self: center;
    }
    
`;
 
const CalenderMain = styled("div")`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    & ul{
        list-style: none;
        display: flex;
        gap:  6rem;
        border: 1px solid blue;
        width: fit-content;
    }

    & .calender-body li{
        font-size: 1.5rem;
        border-right: 1px solid;

        
    }
    table{
        table-layout: fixed;
        border: 2px solid red
        border-collapse: collapse;
        column-count: 3;
        column-rule: inset 2px #33f;
        
    }

    th{
        padding: 15px 30px;
        column-rule: 3;
    }
`;


