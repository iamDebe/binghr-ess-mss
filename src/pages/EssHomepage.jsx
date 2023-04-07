import React, { useEffect, useState } from "react";
import { styled } from "goober";
import EssLayout from "@/components/EssLayout";
import MenuCard from "@/components/MenuCardBox";
import { mobile, mobileSmall, mobileMedium, tablet, desktopMidi } from "@/globalStyle";
import { ReactComponent as ProfileHomeIcon } from "@/assets/images/profile-remove.svg";
import { ReactComponent as MyPayIcon } from "@/assets/images/note2.svg";
import { ReactComponent as ClockIcon } from "@/assets/images/clock.svg";
import { ReactComponent as CalendarIcon } from "@/assets/images/calendar.svg";
import { ReactComponent as ChartIcon } from "@/assets/images/chart.svg";
import { ReactComponent as StarIcon } from "@/assets/images/star.svg";
import { ReactComponent as BookIcon } from "@/assets/images/book.svg";
import { ReactComponent as SunIcon } from "@/assets/images/sun.svg";
import { ReactComponent as WatchIcon } from "@/assets/images/watch.svg";
import { ReactComponent as ProfileImg } from "@/assets/images/profile-img.svg";
import { ReactComponent as Profile2User } from "@/assets/images/profile-2user.svg";
import AuthWelcomeModal from "@/components/AuthWelcomeModal";
import store from "@/services/store";
import OnBoardingStepsContainer from "@/components/onboarding/OnBoardingStepsContainer";
import RoundIconBg from "@/components/RoundIconBg";
import Tag from "@/components/Tag";
import Button from "@/components/button";
import { useSnapshot } from "valtio";
import { getFirstLetter, capitalize, formatDate } from "@/utils/helpers";

const EssHome = () => {
  // When we redirect to this page for the first time after newly registering, that is only when we will show the welcome modal, so we will ensure that we make an API call here on the first render to fetch user data and check the value of a particular field to determine if the user has previouly set up their profile or not
  const [welcomeModalIsVisible, setWelcomeModalIsVisible] = useState(true);
  const [onboardingViewIsVisible, setOnboardingViewIsVisible] = useState(false);
  const snapshot = useSnapshot(store);
  const personalInfo = snapshot?.personalInformation;
  const employeeOnLeave = snapshot?.employeeOnLeave;
  const events = snapshot?.events;
  const orgData = snapshot?.orgData;
  const [userAvatarUrl, setUserAvatarUrl] = useState("")

  useEffect(() => {
    store.getPersonalInformation();
    store.getEvents();
    store.getEmployeeOnLeave();
    store.getOrgData();
  }, []);

  useEffect(() => {
    setUserAvatarUrl(personalInfo?.avatar)
  }, [personalInfo?.avatar]);

  return (
    <EssLayout>
      {onboardingViewIsVisible ? (
        <OnBoardingStepsContainer
          onEndSteps={() => setOnboardingViewIsVisible(false)}
        />
      ) : (
        <Inner>
          <WelcomeSection>
            <p className="type-title3">Hi {personalInfo?.lastname},</p>
            <p className="type-body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ut malesuada massa. Sed sodales arcu in eleifend aliquam. Nam id
              ex viverra, mattis turpis sed, ullamcorper metus. Integer
              fermentum, sapien sed fringilla condimentum, diam dui ultricies
              risus.
            </p>
          </WelcomeSection>
          <MenuCardRow>
            <MenuCard
              link="#"
              icon={<ProfileHomeIcon fill="#858585" />}
              title="My Profile"
            />
            <MenuCard
              link="/ess/my-pay"
              icon={<MyPayIcon fill="#858585" />}
              title="My Pay"
            />
            <MenuCard
              link="#"
              icon={<ClockIcon fill="#858585" />}
              title="My Time Off"
            />
            <MenuCard
              link="#"
              icon={<CalendarIcon fill="#858585" />}
              title="Timesheet"
            />
            <MenuCard
              link="#"
              icon={<ChartIcon fill="#858585" />}
              title="Org Chart"
            />
          </MenuCardRow>
          <EmployeeSummaryRow>
            <div className="employee-wrapper">
              <Button
                bg="var(--lilac-400)"
                textcolor="var(--grey-25)"
                className="clockin-btn"
                leftIcon={<WatchIcon />}
                iconcolor="var(--grey-25)"
              >
                Clock in
              </Button>
              <EmployeeInfo>
                {userAvatarUrl ? (
                  <img src={userAvatarUrl} alt="" />
                ) : (
                  <ProfileImg />
                )}
                <EmployeeDetails>
                  <div className="row">
                    <p className="type-title3">Name</p>
                    <p className="type-body2">{personalInfo?.lastname} {personalInfo?.firstname}</p>
                  </div>
                  <div className="row">
                    <p className="type-title3">Job</p>
                    <p className="type-body2">{orgData?.job}</p>
                  </div>
                  <div className="row">
                    <p className="type-title3">Department</p>
                    <p className="type-body2">{orgData?.department}</p>
                  </div>
                  <div className="row">
                    <p className="type-title3">Hire Date</p>
                    <p className="type-body2">{orgData?.hire_date && formatDate(orgData.hire_date)}</p>
                  </div>
                </EmployeeDetails>
              </EmployeeInfo>
            </div>
            <div className="pending-task-wrapper">
              <h3 className="type-title3">Pending Tasks</h3>
              <PendingTasks>
                <PendingTask>
                  <div className="icon-task">
                    <RoundIconBg
                      bg="#FFEAEA"
                      icon={<StarIcon fill="var(--red)" />}
                    />
                    <div className="task">
                      <h4 className="type-title4">Email Verification</h4>
                      <p className="type-body3">Verify Email </p>
                    </div>
                  </div>
                  <div className="priority">
                    <Tag bordercolor="var(--red)">Priority</Tag>
                    <p className="type-subtitle1">2 days</p>
                  </div>
                </PendingTask>
                <PendingTask>
                  <div className="icon-task">
                    <RoundIconBg
                      bg="#FFFAEA"
                      icon={<ClockIcon fill="var(--yellow)" />}
                    />
                    <div className="task">
                      <h4 className="type-title4">Time off requested</h4>
                      <p className="type-body3">Employee </p>
                    </div>
                  </div>
                  <div className="priority">
                    <Tag bordercolor="#F4BE50">Pending</Tag>
                    <p className="type-subtitle1">2 days</p>
                  </div>
                </PendingTask>
              </PendingTasks>
            </div>
              <div className="onleave-wrapper">
                <h3 className="type-title3">Employee On Leave</h3>
                <OnLeave>
                  {employeeOnLeave ? 
                    employeeOnLeave?.map((item, index) => {
                      return (
                        <OnLeaveEmployee key={index}>
                          <RoundIconBg
                            bg="var(--grey-100)"
                            type="text"
                            icon={<span className="type-title3">{getFirstLetter(item?.lastname)}{getFirstLetter(item?.firstname)}</span>}
                          />
                          <div className="employee-details">
                            <h4 className="type-title4">{item?.lastname} {item?.firstname}</h4>
                            <p className="type-body3">{item?.jobTitle}</p>
                          </div>
                        </OnLeaveEmployee>
                      )
                    }) :
                      <div className="no-employee-wrapper">
                        <Profile2User fill="var(--grey-200)" stroke="var(--grey-200)" />
                        <p className="type-body3">No Employee on Leave</p>
                      </div>
                   }
                </OnLeave>
              </div>
          </EmployeeSummaryRow>
          <NewsRow>
            <div className="news-titles">
              <h3 className="type-title3">Announcements</h3>
              <h3 className="type-title3">Events</h3>
            </div>
            <div className="wrapper">
              <Announcements>
                <div className="title">
                  <h3 className="type-title3">Announcements</h3>
                </div>
                <div className="item">
                  <div className="icon-group">
                    <RoundIconBg
                      bg="#FFEAEA"
                      icon={<BookIcon fill="var(--red)" />}
                    />
                    <div className="announcement">
                      <h4 className="type-title4">Earning Statement </h4>
                      <p className="type-body3">
                        Your February earning statement is ready!
                      </p>
                    </div>
                  </div>
                  <Button
                    bg="var(--white)"
                    border="var(--lilac-400)"
                    textcolor="var(--lilac-400)"
                    className="news-btn"
                  >
                    View
                  </Button>
                </div>
                <div className="item">
                  <div className="icon-group">
                    <RoundIconBg
                      bg="#FFEAEA"
                      icon={<BookIcon fill="var(--red)" />}
                    />
                    <div className="announcement">
                      <h4 className="type-title4">Earning Statement </h4>
                      <p className="type-body3">
                        Your February earning statement is ready!
                      </p>
                    </div>
                  </div>
                  <Button
                    bg="var(--white)"
                    border="var(--lilac-400)"
                    textcolor="var(--lilac-400)"
                    className="news-btn"
                  >
                    View
                  </Button>
                </div>
              </Announcements>
              <Events>
                <div className="title">
                  <h3 className="type-title3">Events</h3>
                </div>
                {events && Object.keys(events)?.map((key) => (
                  <React.Fragment key={key}>
                    {events[key].map((item, index) => (
                      <PendingTask key={index}>
                        <div className="icon-task">
                          {key === "birthdays" ? (
                            <RoundIconBg
                              bg="var(--grey-100)"
                              icon={<span className="type-title3">{getFirstLetter(item?.lastname)}{getFirstLetter(item?.firstname)}</span>}
                            />
                          ) : (
                            <RoundIconBg
                              bg="#FFEAEA"
                              icon={<SunIcon fill="var(--red)" />}
                            />
                          )}
                          <div className="task">
                            {key === "birthdays" ? (
                              <h4 className="type-title4">{item?.lastname} {item?.firstname}</h4>
                            ) : (
                              <h4 className="type-title4">{item?.name}</h4>
                            )}
                            <p className="type-body3">{capitalize(key)}</p>
                          </div>
                        </div>
                        <div className="priority">
                          {key === "birthdays" && (
                            <Tag bordercolor="var(--red)">Send wishes</Tag>
                          )}
                          <p className="type-subtitle1">{item?.start_date && formatDate(item.start_date)}</p>
                        </div>
                      </PendingTask>
                    ))}
                  </React.Fragment>
                ))}
              </Events>
            </div>
          </NewsRow>
        </Inner>
      )}
      <AuthWelcomeModal
        isVisible={welcomeModalIsVisible}
        clickAction={() => {
          setWelcomeModalIsVisible(false);
          setOnboardingViewIsVisible(true);
        }}
      />
      {/* {onboardingViewIsVisible && <OnBoardingStepsContainer />} */}
    </EssLayout>
  );
};

export default EssHome;

const Inner = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  .employee-wrapper,
  .pending-task-wrapper,
  .onleave-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
  }
  .employee-wrapper {
    flex: 0.42 0 30%;
  }
  .pending-task-wrapper {
    flex: 0.32 0 24%;
  }
  .onleave-wrapper {
    flex: 0.26 0 15%;
  }
  ${tablet} {
    .employee-wrapper {
      flex-basis: 100%;
    }
    .pending-task-wrapper {
      flex-basis: calc(55% - 11px);
    }
    .onleave-wrapper {
      flex-basis: calc(45% - 11px);
    }
  }
  ${mobile} {
    .onleave-wrapper {
      display: none;
    }
  }
  ${mobileMedium} {
    .pending-task-wrapper {
      flex-basis: 100%;
    }
  }
`;
const WelcomeSection = styled("div")`
  border: 0.5px solid var(--grey-5);
  padding: 0.8125rem 1.625rem 0.8125rem 1.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  .type-title3 {
    color: var(--grey-400);
  }
  .type-body2 {
    color: var(--grey-300);
  }
`;
const MenuCardRow = styled("div")`
  display: flex;
  align-items: center;
  gap: 1.375rem;
  ${mobile} {
    display: none;
  }
`;
const EmployeeSummaryRow = styled("div")`
  display: flex;
  gap: 1.375rem;
  .clockin-btn {
    max-width: 8.75rem;
  }
  ${tablet} {
    flex-wrap: wrap;
  }
`;
const EmployeeInfo = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 0.5px solid var(--grey-5);
  border-radius: 0 var(--br) var(--br) 0;
  min-height: 9.375rem;
  img {
    max-width: 145px;
    max-height: 138px;
  }
  ${desktopMidi} {
    gap: 1rem;
  }
  ${mobileSmall} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const EmployeeDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 0.25rem 1.375rem 0.25rem 0;
  width: 100%;
  .col {
    display: grid;
    align-items: center;
    gap: 0.875rem;
    p {
      max-height: 43.39px;
    }
    .type-title3 {
      font-weight: bold;
    }
    .type-body2 {
      color: var(--grey-400);
    }
  }
  .row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.875rem;
    .type-title3 {
      font-weight: bold;
    }
    .type-body2 {
      color: var(--grey-400);
    }
  }
  ${mobileSmall} {
    padding: 1rem;
  }
`;
const PendingTasks = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  border: 0.5px solid var(--grey-5);
  border-radius: var(--br);
  padding: 1.1rem 1.875rem 1.1rem 1.25rem;
  height: 9.375rem;
  overflow-y: auto;
  overflow-x: hidden;
  ${mobileMedium} {
    height: auto;
    overflow: auto;
  }
`;
const PendingTask = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 0.875rem;
  .icon-task {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    ${mobile} {
      gap: 0.75rem;
    }
  }
  .task {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .type-body3 {
      color: var(--grey-300);
    }
  }
  .priority {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: right;
    .type-subtitle1 {
      color: var(--grey-300);
    }
  }
`;
const OnLeave = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  border: 0.5px solid var(--grey-5);
  border-radius: var(--br);
  padding: 1.25rem 1rem;
  height: 9.375rem;
  overflow-y: auto;
  overflow-x: hidden;
  .no-employee-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    overflow: hidden;
    p {
      color: var(--grey-300);
    }
  }
`;
const OnLeaveEmployee = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  .employee-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .type-body3 {
      color: var(--grey-300);
    }
  }
`;
const NewsRow = styled("div")`
  .news-titles {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 1rem;
    ${tablet} {
      display: none;
    }
  }
  .wrapper {
    display: flex;
    width: 100%;
    border: 1px solid var(--grey-100);
    border-radius: var(--br);
    padding: 0.625rem 1.625rem;
    ${tablet} {
      flex-direction: column;
      padding: 1rem 0.75rem;
    }
  }
  .news-btn {
    max-width: 6.875rem;
  }
`;
const Announcements = styled("div")`
  padding: 1.125rem 1.25rem 1.125rem 0;
  border-right: 1px solid var(--grey-200);
  flex: 1 0 48%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-height: 170px;
  overflow-y: auto;
  .title {
    display: none;
    ${tablet} {
      display: block;
    }
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.875rem;
    width: 100%;
  }
  .icon-group {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    ${mobile} {
      gap: 0.75rem;
    }
  }
  .announcement {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .type-body3 {
      color: var(--grey-300);
    }
  }
  ${tablet} {
    padding: 0 0 1.25rem 0;
    border-right: none;
    border-bottom: 1px solid var(--grey-200);
    max-height: 100%;
    overflow: auto;
  }
`;
const Events = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;
  padding: 1.125rem 0 1.125rem 1.25rem;
  flex: 1 0 48%;
  max-height: 170px;
  overflow-y: auto;
  .title {
    display: none;
  }
  ${tablet} {
    padding: 1.25rem 0 0;
    max-height: 100%;
    overflow: auto;
    .title {
      display: block;
    }
  }
`;
