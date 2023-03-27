import React, {useState } from "react";
import { styled } from "goober";
import EssLayout from "@/components/EssLayout";
import SearchField from "../components/forms/SearchField";
import Button from "../components/button"
import DoughnutChart from "../components/chart/DoughnutChart";
import TextField from "../components/forms/TextField";
import PayrollTable from "../components/PayrollTable";
import DoughnutChartYear from "../components/chart/DoughnutChartYear";
import DoughnutChartTaxes from "../components/chart/DoughnutChartTaxes";
import DoughnutChartBenefit from "../components/chart/DoughnutChartBenefit";
import DoughnutChartPensions from "../components/chart/DoughnutChartPensions";



const MyPay = () => {
    const [showProfileSettings, setShowProfileSettings] = useState(false);
    const [showPayroll, setShowPayroll] = useState(false);
    const [showAccountStatement, setShowAccountStatement] = useState(false);
    const handleShowProfile = ()=>{
        setShowProfileSettings(!showProfileSettings)
    }
    const handleShowPayrollStatement = ()=>{
        setShowPayroll(!showPayroll)
        setShowAccountStatement(false)

    }
    const handleShowAccountStatement = ()=>{
        setShowAccountStatement(!showAccountStatement)
      

    }

    return (  
        <>
           <EssLayout>
                <TopBarWrapper>
                    <ProxySearchWrapper>
                        <img src="/images/proxy.svg" alt="" />
                        <img src="/images/arrow-bottom.svg" alt="" />
                    </ProxySearchWrapper>
                    <SearchFieldWrapper>
                        <SearchField 
                            id="search"
                            type="search"
                            placeholder="search"
                        />
                    </SearchFieldWrapper>    
                    <IconsWrapper>
                        <img src="/images/bell.svg" alt="notification" />
                        <img src="/images/sms-notification.svg" alt="notification" />
                    </IconsWrapper>
                    <ProfileSettingsWrapper>
                        <MyProfileWrapper>
                            <div className="img-wrapper"><img src="/images/ProfilePhoto.svg" alt="" /></div>
                            <div >
                                <a href="#" onClick={handleShowProfile}>
                                    Employee
                                </a>
                            </div>
                            <div onClick={handleShowProfile}><img src="/images/arrow-bottom.svg" alt="" /></div>
                        </MyProfileWrapper>
                        <DropdownWrapper>
                            {showProfileSettings && <ul className="dropdown-menu">
                                <DropdownItemsWrapper>
                                    <img src="/images/user.svg" alt="" />
                                    <li><a className="dropdown-item" href="#"> My Profile</a></li>
                                </DropdownItemsWrapper>
                                <DropdownItemsWrapper>
                                    <img src="/images/programming-arrow.svg" alt="" />
                                    <li><a className="dropdown-item" href="#"> Proxy</a></li>
                                </DropdownItemsWrapper>
                                <DropdownItemsWrapper>
                                    <img src="/images/logout.svg" alt="" />
                                    <li><a className="dropdown-item" href="#"> Logout</a></li>
                                </DropdownItemsWrapper>
                            </ul> }
                        </DropdownWrapper>
                    </ProfileSettingsWrapper>
                </TopBarWrapper>
                <ButtonWrapper>
                    <Button  
                        type="button"
                        onClick={handleShowPayrollStatement}
                        bg="var(--lilac-400)"
                        textcolor="var(--grey-25)"
                        className="submit-button"
                        margin="3rem 0rem"
                    >
                        View Payroll Statement
                    </Button>
                { showPayroll &&
                    <>
                        <TextFieldWrapper>
                            <TextField 
                                id="selectMonth"
                                label="Year/Month"
                                type="date"
                                placeholder="Select Month/Year"
                            />
                        </TextFieldWrapper>
                        <Button  
                            type="button"
                            onClick={handleShowAccountStatement}
                            bg="var(--white)"
                            textcolor="var(--lilac-400)"
                            className="submit-button"
                            margin="3rem 0rem"
                            padding="0.625rem 3rem"
                            border="var(--lilac-400)"
                        >
                            Enter
                        </Button>
                    </>
                    }
                </ButtonWrapper>
                <ChartAndPayrollWrapper>
                    <ChartWrapper>
                        <DoughnutChart />
                        <SecondaryChartsWrapper>
                            <DoughnutChartYear />
                            <DoughnutChartTaxes />
                            <DoughnutChartBenefit />
                            <DoughnutChartPensions />
                        </SecondaryChartsWrapper>
                        
                    </ChartWrapper>
                    {showAccountStatement && 
                        <PayrollTableWrapper>
                            <PayrollTable />
                        </PayrollTableWrapper>
                    }
                </ChartAndPayrollWrapper>
           </EssLayout>
        </>
    );
       
}
 
export default MyPay;

const TopBarWrapper = styled("div")`
  display: flex;
  border: 0.5px solid var(--grey-200);
  padding: 0.5rem 1.625rem 0.5rem 1.625rem;
  border-radius: 0.5rem;
  width: 100%;
`;
const ProxySearchWrapper = styled("div")`
    display: flex;
    margin-right: 10rem;
`;
const SearchFieldWrapper = styled("div")`
    display: flex;
    align-self: center;
    margin: 0rem 1rem 0rem 10rem;
`;
const TextFieldWrapper = styled("div")`
    align-self: center;
    margin: .5rem 2rem 0rem 1rem;
    width: 30%;
`;
const IconsWrapper = styled("div")`
    display: flex;
    justify-content: center;
        img{
            padding: 0rem .2rem;
        }
`;
const MyProfileWrapper = styled("div")`
    display: flex;
    align-items: center;
    align-self: center;
    background: transparent;
    padding: .2rem;
    margin-left: 2rem;
    border: 2px solid transparent;
    border-radius: .5rem;
   .img-wrapper {
        border: 2px solid transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;

    img{
        height:100%;
        width: 100%;
        border-radius: 50%;
    } 
   }
   a {
        margin: 0 .8rem;
        font-size: 12px;
   }
    
`;
const DropdownWrapper = styled("div")`
    position: absolute;
    top: 60px;
    left: 35px;
   ul{
    border: 1px solid var(--grey-100);
    list-style: none;
    font-size: 12px;
    padding: .4rem 1rem;
    border-radius: .5rem;
} 
li{
    padding: .5rem .5rem;
    width: 100%
}
`;
const DropdownItemsWrapper = styled("div")`
    display: flex;
`;
const ProfileSettingsWrapper = styled("div")`
   position: relative;
   display: flex;
   flex-direction: column;
`;
const ChartWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem;
    border: 1px solid var(--grey-200);
    border-radius: .5rem;
    width: 50%;
    height: fit-content;
`;
const SecondaryChartsWrapper = styled("div")`
    align-self: center;
    width: 50%;
`;
const PayrollTableWrapper = styled("div")`
    padding: 1rem;
    border: 1px solid var(--grey-200);
    border-radius: .5rem;
    margin: 0rem 0rem 0rem 1.5rem;
    width: 80%;
`;
const ChartAndPayrollWrapper = styled("div")`
    display: flex;
`;
const ButtonWrapper = styled("div")`
    display: flex;
`;

