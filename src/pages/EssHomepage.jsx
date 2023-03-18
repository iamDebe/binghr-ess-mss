import React, { useState } from "react";
import { styled } from "goober";
import EssLayout from "../components/EssLayout";
import MenuCard from "../components/menuCard";
import { tablet } from "../globalStyle";
import { ReactComponent as ProfileHomeIcon } from "../assets/images/profile-remove.svg";
import { ReactComponent as MyPayIcon } from "../assets/images/note2.svg";
import { ReactComponent as ClockIcon } from "../assets/images/clock.svg";
import { ReactComponent as CalendarIcon } from "../assets/images/calendar.svg";
import { ReactComponent as ChartIcon } from "../assets/images/chart.svg";
import AuthWelcomeModal from "../components/AuthWelcomeModal";

const Inner = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
  ${tablet} {
    flex-wrap: wrap;
  }
`;
const EmployeeSummaryRow = styled("div")`
  display: flex;
  gap: 1.375rem;
`;
const EmployeeInfo = styled("div")`
    display: flex;
    align-items: center;
    gap: 2rem;
    border: 0.5px solid var(--grey-5);
    border-radius 0 var(--br) var(--br) 0;
    img {
        max-width: 145px;
        max-height: 138px;
    }
`;
const EmployeeDetails = styled("div")`
  display: grid;
  grid-auto-flow: column;
  gap: 0.875rem;
  padding: 0.25rem 1.375rem 0.25rem 0;
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
`;
const EssHome = () => {
  // When we redirect to this page for the first time after newly registering, that is only when we will show the welcome modal, so we will ensure that we make an API call here on the first render to fetch user data and check the value of a particular field to determine if the user has previouly set up their profile or not
  const [welcomeModalIsVisible, setWelcomeModalIsVisible] = useState(true);

  return (
    <EssLayout>
      <Inner>
        <WelcomeSection>
          <p className="type-title3">Hi User,</p>
          <p className="type-body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            malesuada massa. Sed sodales arcu in eleifend aliquam. Nam id ex
            viverra, mattis turpis sed, ullamcorper metus. Integer fermentum,
            sapien sed fringilla condimentum, diam dui ultricies risus.
          </p>
        </WelcomeSection>
        <MenuCardRow>
          <MenuCard
            link="#"
            icon={<ProfileHomeIcon fill="#858585" />}
            title="My Profile"
          />
          <MenuCard
            link="#"
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
          <EmployeeInfo>
            <img src="/images/profile-img.png" alt="" />
            <EmployeeDetails>
              <div className="col">
                <p className="type-title3">Name</p>
                <p className="type-title3">Job</p>
                <p className="type-title3">Depertment</p>
                <p className="type-title3">Hire Date</p>
              </div>
              <div className="col">
                <p className="type-body2">Bamgboye Pelumi</p>
                <p className="type-body2">Product Designer</p>
                <p className="type-body2">Design</p>
                <p className="type-body2">Not included</p>
              </div>
            </EmployeeDetails>
          </EmployeeInfo>
        </EmployeeSummaryRow>
      </Inner>
      <AuthWelcomeModal
        isVisible={welcomeModalIsVisible}
        clickAction={() => setWelcomeModalIsVisible(false)}
      />
    </EssLayout>
  );
};

export default EssHome;
