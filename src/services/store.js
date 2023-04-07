import { proxy } from "valtio";
import methods from '@/services/api';

const initialState = {
  personalInformation: null,
  compensation: null,
  events: null,
  employeeOnLeave: null,
  employmentInformation: null,
  jobInformation: null,
  documents: null,
  employmentProperties: null,
  security: null,
  demographicInformation: null,
  countries: null,
  states: {},
  orgData: null,
  onboardingStatus: null,
};

const store = proxy({
  ...initialState,
  async getPersonalInformation() {
    if (!store.personalInformation) {
      try {
        const response = await methods.get("/my-profile/personal-information");
        this.personalInformation = response.data.user;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getJobInformation() {
    if (!store.jobInformation) {
      try {
        const response = await methods.get("/my-profile/job-information");
        this.jobInformation = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getEvents() {
    if (!store.events) {
      try {
        const response = await methods.get("/home-info/events");
        this.events = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getDemographicInformation() {
    if (!store.demographicInformation) {
      try {
        const response = await methods.get("/onboarding/demographic-information");
        this.demographicInformation = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getOrgData() {
    if (!store.orgData) {
      try {
        const response = await methods.get("/onboarding/employment-data");
        this.orgData = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getOnboardingStatus() {
    if (!store.onboardingStatus) {
      try {
        const response = await methods.get("/onboarding/status");
        this.onboardingStatus = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getEmployeeOnLeave() {
    if (!store.employeeOnLeave) {
      try {
        const response = await methods.get("/home-info/employees-on-leave");
        this.employeeOnLeave = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getCountries() {
    if (!store.countries) {
      try {
        const response = await methods.get("/countries");
        this.countries = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  async getStates(countryId) {
    try {
      const response = await methods.get(`/states/${countryId}`);
      this.states[countryId] = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async postPersonalInfo(data) {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      const response = await methods.post("/onboarding/profile", data, config);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async postBirthInfo(data) {
    try {
      const response = await methods.put("/onboarding/birth-information", data);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async postDemographicInfo(data) {
    try {
      const response = await methods.put("/my-profile/demographic-information", data);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
});

export default store;
