import React, {useState} from "react";
import { styled } from "goober";
import { TopBarWrapper } from "@/pages/MyPay";
import {
    DropdownWrapper, 
    IconsWrapper, 
    MyProfileWrapper, 
    ProfileSettingsWrapper, 
    ProxySearchWrapper, 
    SearchFieldWrapper, 
    DropdownItemsWrapper 
} from "@/pages/MyPay";
import SearchField from "@/components/forms/SearchField";
import { ReactComponent as ProxyIcon } from "@/assets/images/proxy.svg";
import { ReactComponent as DropdownIcon } from "@/assets/images/arrow-bottom.svg";
import { ReactComponent as NotificationIcon } from "@/assets/images/bell.svg";
import { ReactComponent as SmsNotificationIcon } from "@/assets/images/sms-notification.svg";
import { ReactComponent as ProfilePhoto } from "@/assets/images/ProfilePhoto.svg";
import { ReactComponent as UserIcon } from "@/assets/images/user.svg";
import { ReactComponent as ProgrammingIcon } from "@/assets/images/programming-arrow.svg";
import { ReactComponent as LogoutIcon } from "@/assets/images/logout.svg";

const TopBarWithSearch = () => {

    const [showProfileSettings, setShowProfileSettings] = useState(false);
    const handleShowProfile = ()=>{
        setShowProfileSettings(!showProfileSettings)
    }
  return (
    <>
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
                            <li><a className="dropdown-item" href="/ess/profile"> My Profile</a></li>
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
    </>
  )
}

export default TopBarWithSearch