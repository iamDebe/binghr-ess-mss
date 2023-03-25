import { proxy } from "valtio";


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

export const store = proxy(initialState)