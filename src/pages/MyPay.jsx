import React, {useState } from "react";
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button"
import DoughnutChart from "@/components/chart/DoughnutChart";
import TextField from "@/components/forms/TextField";
import PayrollTable from "@/components/PayrollTable";
import DoughnutChartYear from "@/components/chart/DoughnutChartYear";
import DoughnutChartTaxes from "@/components/chart/DoughnutChartTaxes";
import DoughnutChartBenefit from "@/components/chart/DoughnutChartBenefit";
import DoughnutChartPensions from "@/components/chart/DoughnutChartPensions";
import { ReactComponent as CalenderIcon } from "@/assets/images/calendar.svg";
import TopBarWithSearch from "@/components/TopBarWithSearch";
import { ButtonWrapper, ChartAndPayrollWrapper, ChartWrapper, SecondaryChartsWrapper, TextFieldWrapper, PayrollTableWrapper } from "@/assets/wrappers/TopBarWithSearchWrapper";

const MyPay = () => {
    const [showPayroll, setShowPayroll] = useState(false);
    const [showAccountStatement, setShowAccountStatement] = useState(false);
    const handleShowPayrollStatement = ()=>{
<<<<<<< HEAD
        setShowPayroll(!showPayroll)
        setShowAccountStatement(false)
=======
        setShowPayroll(!showPayroll);
        setShowAccountStatement(false);
>>>>>>> 803c53b5aedcf0250dec9d0fd1b3ccab15595d4a
    }
    const handleShowAccountStatement = ()=>{
        setShowAccountStatement(!showAccountStatement);
    }

    return (  
        <>
           <EssLayout>
<<<<<<< HEAD
                <TopBarWithSearch />
=======
                <TopBarWrapper>
                    <ProxySearchWrapper>
                        <ProxyIcon width={50} />
                        <DropdownIcon  />
                    </ProxySearchWrapper>
                    <SearchFieldWrapper>
                        <SearchField 
                            id="search"
                            type="search"
                            placeholder="search"
                            // icon={<CalenderIcon className="input-icon icon" />}
                        />
                    </SearchFieldWrapper>    
                    <IconsWrapper>
                        <NotificationIcon  />
                        <SmsNotificationIcon />
                    </IconsWrapper>
                    <ProfileSettingsWrapper>
                        <MyProfileWrapper>
                            <div className="img-wrapper"><ProfilePhoto /></div>
                            <div >
                                <a href="#" onClick={handleShowProfile}>
                                    Employee
                                </a>
                            </div>
                            <div onClick={handleShowProfile}><DropdownIcon /></div>
                        </MyProfileWrapper>
                        <DropdownWrapper>
                            {showProfileSettings && <ul className="dropdown-menu">
                                <DropdownItemsWrapper>
                                    <UserIcon  className="dropdown-icon" />
                                    <li><Link className="dropdown-item" to="/ess/profile"> My Profile</Link></li>
                                </DropdownItemsWrapper>
                                <DropdownItemsWrapper>
                                    <ProgrammingIcon  className="dropdown-icon" />
                                    <li><a className="dropdown-item" href="#"> Proxy</a></li>
                                </DropdownItemsWrapper>
                                <DropdownItemsWrapper>
                                    <LogoutIcon  className="dropdown-icon" />
                                    <li><a className="dropdown-item logout" href="#"> Logout</a></li>
                                </DropdownItemsWrapper>
                            </ul> }
                        </DropdownWrapper>
                    </ProfileSettingsWrapper>
                </TopBarWrapper>
>>>>>>> 803c53b5aedcf0250dec9d0fd1b3ccab15595d4a
                <ButtonWrapper>
                    <Button  
                        type="button"
                        onClick={handleShowPayrollStatement}
                        bg="var(--lilac-400)"
                        textcolor="var(--grey-25)"
                        margin="3rem 0rem"
                        width="11.75rem"
                    >
                        View Payroll Statement
                    </Button>
                {showPayroll &&
                    <>
                        <TextFieldWrapper>
                            <TextField 
                                id="selectMonth"
                                label="Year/Month"
                                type="date"
                                placeholder="Select Month/Year"
                                icon={<CalenderIcon  className="input-icon icon" />}

                            />
                        </TextFieldWrapper>
                        <Button  
                            type="button"
                            onClick={handleShowAccountStatement}
                            bg="var(--white)"
                            textcolor="var(--lilac-400)"
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

<<<<<<< HEAD

=======
const TopBarWrapper = styled("div")`
  display: flex;
  border: 0.5px solid var(--grey-200);
  padding: 0.5rem 1.625rem 0.5rem 1.625rem;
  border-radius: 0.5rem;

  ${mobile}{
    flex-wrap: wrap;
    gap: .5rem;
  }
`;
const ProxySearchWrapper = styled("div")`
    display: flex;
    align-self: center;
    margin-right: 10rem;
    ${tablet}{
        margin-right: 0rem;
    }
    ${mobile}{
        margin-right: 0rem;
    }
`;
const SearchFieldWrapper = styled("div")`
    display: flex;
    align-self: center;
    margin: 0rem 1rem 0rem 10rem;
    ${tablet} {
        margin: 0rem 1rem 0rem 5rem;
    }
    ${mobile} {
        margin: 0rem 1rem 0rem 2rem;
    }
    
`;
const TextFieldWrapper = styled("div")`
    align-self: center;
    margin: .5rem 2rem 0rem 1rem;
    width: 30%;
`;
const IconsWrapper = styled("div")`
    display: flex;
    align-self: center;
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
    border-radius: .5rem;
    .img-wrapper {
        border: 2px solid transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        img {
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
    width: 100%;
    ul {
        background-color: white;
        border: 1px solid var(--grey-100);
        list-style: none;
        font-size: 12px;
        padding: .4rem 1rem;
        border-radius: .5rem;
    } 
    li {
        padding: .5rem .5rem;
        width: 100%
    }
    &.logout{
        color: #EB5757;
    }
`;
const DropdownItemsWrapper = styled("div")`
    display: flex;
    justify-content: start;
    & .dropdown-icon{
        margin-top: .3rem;
    }
`;
const ProfileSettingsWrapper = styled("div")`
   position: relative;
   margin-left: 2rem;
   ${mobile}{
     justify-content: end;
   }
`;
const ChartWrapper = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem;
    border: 1px solid var(--grey-200);
    border-radius: .5rem;
    width: 45%;
    height: fit-content;

    ${desktopMidi} {
        flex-wrap: nowrap;
        width: 50%;
    }
    ${tablet} {
        flex-wrap: nowrap;
        justify-content: space-evenly;
        width: 80%;
    }
    ${mobile} {
        flex-wrap: nowrap;
        justify-content: space-evenly;
        width: 100%;
    }
`;
const SecondaryChartsWrapper = styled("div")`
    align-self: center;
    width: 50%;
`;
const PayrollTableWrapper = styled("div")`
    padding: .3rem;
    border: 1px solid var(--grey-200);
    border-radius: .5rem;
    width: 55%;
    ${desktopMidi} {
        flex-wrap: nowrap;
        margin: 0rem;
    }
    ${tablet} {
        flex-wrap: nowrap;
        width: 100%;
        margin: 0rem;
    }
`;
const ChartAndPayrollWrapper = styled("div")`
    display: flex;
    gap: 1rem;
    ${tablet} {
        flex-wrap: wrap;
    }
`;
const ButtonWrapper = styled("div")`
    display: flex;
`;
>>>>>>> 803c53b5aedcf0250dec9d0fd1b3ccab15595d4a
