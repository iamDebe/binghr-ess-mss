import React, { useEffect, useState } from "react";
import { styled } from 'goober';
import  { mobile, tabletSmall } from"@/globalStyle"
import store from "@/services/store";
import { useSnapshot } from "valtio";
import TextField from "@/components/forms/TextField";
import { ReactComponent as GlobeIcon } from "@/assets/images/globe.svg";
import { ReactComponent as DropdownIcon } from "@/assets/images/dropdown-icon.svg";
import { ReactComponent as NotificationIcon } from "@/assets/images/bell.svg";
import { ReactComponent as SmsNotificationIcon } from "@/assets/images/sms-notification.svg";
import { ReactComponent as ProfilePhoto } from "@/assets/images/profile-img.svg";
import { ReactComponent as UserIcon } from "@/assets/images/user.svg";
import { ReactComponent as ProgrammingIcon } from "@/assets/images/programming-arrow.svg";
import { ReactComponent as LogoutIcon } from "@/assets/images/logout.svg";
import { ReactComponent as SearchIcon } from "@/assets/images/search.svg";

const TopBarWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid var(--grey-200);
  padding: 0.5rem 1.625rem;
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2.5rem;
  ${mobile} {
    padding: 0;
    border: none;
  }
`;
const ChangeLanguageWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  ${tabletSmall} {
    display: none;
  }
`;
const RightHandSideWrapper = styled("div")  `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-wrap: nowrap;
  width: 100%;
  .icons-group {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  ${tabletSmall} {
    justify-content: space-between;
  }
`;
const IconsWrapper = styled("div")`
  display: flex;
  align-self: center;
  gap: 10px;
  justify-content: space-between;
  @media screen and (max-width: 574px){
    gap: 5px;
  }   
`;
const MyProfileWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  .img-wrapper {
    border: 2px solid transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    svg, img {
      height:100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  .employee-name {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
  }
  @media screen and (max-width: 574px){
    display: none;
  }  
`;
const DropdownWrapper = styled("div")`
  position: absolute;
  top: 50px;
  width: 8.75rem;
  z-index: 1;
  ul {
    background-color: var(--white);
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
  .logout{
    color: var(--red);
  }
`;
const DropdownItemsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: start;
`;
const ProfileSettingsWrapper = styled("div")`
  position: relative;
  ${mobile} {
    display: none;
  }
`;

const TopBar = () => {
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const snapshot = useSnapshot(store);
  const personalInfo = snapshot?.personalInformation;
  const [userAvatarUrl, setUserAvatarUrl] = useState("")
  
  const handleShowProfile = ()=>{
      setShowProfileSettings(!showProfileSettings)
  }

  useEffect(() => {
    setUserAvatarUrl(personalInfo?.avatar)
  }, [personalInfo?.avatar]);

  return (
    <TopBarWrapper>
      <ChangeLanguageWrapper>
        <GlobeIcon />
        <DropdownIcon  />
      </ChangeLanguageWrapper>
      <RightHandSideWrapper>
        <TextField
          id="search"
          type="search"
          placeholder="Search"
          marginbottom="0"
          padding="0.5rem 1rem 0.5rem 2.4rem"
          icon={<SearchIcon stroke="#E3E3E3" className="input-icon left-icon" />}
          width="265px"
        />
        <div className="icons-group">
          <IconsWrapper>
            <NotificationIcon  />
            <SmsNotificationIcon />
          </IconsWrapper>
          <ProfileSettingsWrapper>
            <MyProfileWrapper  onClick={handleShowProfile}>
              <div className="img-wrapper">
                {userAvatarUrl ? (
                  <img src={userAvatarUrl} alt="" />
                ) : (
                  <ProfilePhoto />
                )}
              </div>
              <p className="employee-name">
                {personalInfo?.lastname ? personalInfo?.lastname : "Employee"}
              </p>
              <DropdownIcon />
            </MyProfileWrapper>
            <DropdownWrapper>
              {showProfileSettings && 
                <ul className="dropdown-menu">
                  <DropdownItemsWrapper>
                    <UserIcon className="dropdown-icon" />
                    <li><a className="dropdown-item" href="#"> My Profile</a></li>
                  </DropdownItemsWrapper>
                  <DropdownItemsWrapper>
                    <ProgrammingIcon className="dropdown-icon" />
                    <li><a className="dropdown-item" href="#"> Proxy</a></li>
                  </DropdownItemsWrapper>
                  <DropdownItemsWrapper>
                    <LogoutIcon className="dropdown-icon" stroke="var(--red)" />
                    <li><a className="dropdown-item logout" href="#"> Logout</a></li>
                  </DropdownItemsWrapper>
                </ul>
              }
            </DropdownWrapper>
          </ProfileSettingsWrapper>
        </div>
        
      </RightHandSideWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
