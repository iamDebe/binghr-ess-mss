import React, { useEffect, useState } from "react";
import { styled } from 'goober';
import  { mobile } from"@/globalStyle"
import store from "@/services/store";
import { useSnapshot } from "valtio";
import SearchField from "@/components/forms/SearchField";
import { ReactComponent as ProxyIcon } from "@/assets/images/proxy.svg";
import { ReactComponent as DropdownIcon } from "@/assets/images/arrow-bottom.svg";
import { ReactComponent as NotificationIcon } from "@/assets/images/bell.svg";
import { ReactComponent as SmsNotificationIcon } from "@/assets/images/sms-notification.svg";
import { ReactComponent as ProfilePhoto } from "@/assets/images/profile-img.svg";
import { ReactComponent as UserIcon } from "@/assets/images/user.svg";
import { ReactComponent as ProgrammingIcon } from "@/assets/images/programming-arrow.svg";
import { ReactComponent as LogoutIcon } from "@/assets/images/logout.svg";

const TopBarWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid var(--grey-200);
  padding: 0.5rem 1.625rem;
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 574px){
    padding: 0rem;
    border: none;
    gap: 40px;
  }
`;
const ProxySearchWrapper = styled("div")`
  display: flex;
  align-self: center;
  flex: .5;

  @media screen and (max-width: 1028px){
    flex: .5;
  }

  @media screen and (max-width: 976px){
    display:none;
  }
`;
const RightHandSideWrapper = styled("div")  `
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: nowrap;
  flex: 1;
  ${mobile} {
    justify-content: space-between;
  }
`;
const SearchFieldWrapper = styled("div")`
  display: flex;
  align-self: center;
  width: 45%;
  @media screen and (max-width: 567px){
    width: 35%;
    flex: .8;
  }
  @media screen and (max-width: 574px){
    flex: .8;
  }
`;
const IconsWrapper = styled("div")`
  display: flex;
  align-self: center;
  gap: 10px;
  justify-content: space-between;
  @media screen and (max-width: 574px){
    gap:10px;
    margin-left: auto;
  }    
`;
const MyProfileWrapper = styled("div")`
  display: flex;
  align-items: center;
  align-self: center;
  background: transparent;
  padding: .2rem;
  border-radius: .5rem;
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
  a {
    margin: 0 .8rem;
    font-size: 12px;
    @media screen and (max-width: 375px) {
      font-size: 12px;
    }
  }
  .drop-down-icon{
    @media screen and (max-width: 866px) {
      display: none;
    }
    @media screen and (max-width: 766px) {
      display: block;
    }
  }
  @media screen and (max-width: 574px){
    display: none;
  }  
`;
const DropdownWrapper = styled("div")`
  position: absolute;
  top: 60px;
  left: 35px;
  width: 100%;
  z-index: 1;
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
  margin-left: 2rem;
  ${mobile}{
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
      <ProxySearchWrapper>
        <ProxyIcon width={50} />
        <DropdownIcon  />
      </ProxySearchWrapper>
      <RightHandSideWrapper>
        <SearchFieldWrapper>
          <SearchField 
            id="search"
            type="search"
            placeholder="search"
          />
        </SearchFieldWrapper>
        <IconsWrapper>
          <NotificationIcon  />
          <SmsNotificationIcon />
        </IconsWrapper>
        <ProfileSettingsWrapper>
          <MyProfileWrapper>
            <div className="img-wrapper">
              {userAvatarUrl ? (
                <img src={userAvatarUrl} alt="" />
              ) : (
                <ProfilePhoto />
              )}
            </div>
            <div>
              <a href="#" onClick={handleShowProfile}>
                Employee
              </a>
            </div>
            <div onClick={handleShowProfile} className="drop-down-icon"><DropdownIcon /></div>
          </MyProfileWrapper>
          <DropdownWrapper>
            {showProfileSettings && 
              <ul className="dropdown-menu">
                <DropdownItemsWrapper>
                  <UserIcon className="dropdown-icon" />
                  <li><a className="dropdown-item" href="/ess/profile"> My Profile</a></li>
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
      </RightHandSideWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
