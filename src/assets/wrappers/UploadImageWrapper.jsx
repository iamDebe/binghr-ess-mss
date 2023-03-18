import { styled } from "goober";
export const UploadImageWrapper = styled("div")`
  .upload-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.9375rem;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }
  .step-text {
    color: var(--red-400);
  }
  input {
    &[type="file"] {
      display: none;
    }
  }
  label {
    &[for="file"] {
      display: block;
      background-color: var(--grey-200);
      color: var(--grey-400);
      width: 100px;
      height: 90px;
      text-align: center;
      font-style: normal;
      font-weight: 300;
      font-size: 56px;
      line-height: 79px;
      padding-top: 0.5rem;
    }
  }
  .upload-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0.5rem 0 1.5rem 0;
  }
  .upload-image-text {
    margin-right: 0.875rem;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

label #profile-photo{
    width: 100%;
    height: 120%;
    margin-top: -.8rem;
    display: none;
    object-fit: cover;
  }

 
  
`;
