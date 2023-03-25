import { proxy } from "valtio";
import methods from './api';

const initialState = {
  personalInformation: null,
  compensation: null,
  employmentInformation: null,
  jobInformation: null,
  documents: null,
  employmentProperties: null,
  security: null,
  demographicInformation: null
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
 
});

export default store;
