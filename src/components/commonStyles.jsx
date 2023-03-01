import { styled } from "goober";

export const SignupContainer = styled('div')` 
`;

export const SignupWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.3125rem 4.875rem 2.625rem 4.875rem;
    height: 100%;
    gap: 2rem;
    .footer span{
        color: var(--neutral-25);
        font-weight: 500;
        font-size: 14px;
    }
    @media screen and (max-width: 767px) {
        padding: 1rem;
    }
`;

export const FormLogo = styled("div")`
    margin-bottom: 1.5625rem;
    text-align: center;
`;

export const FormWrapper = styled('form')`
    margin: 0 auto;
    border: 1px solid var(--neutral-100);
    border-top: 7px solid var(--red-400);
    background-color: var(--white);
    border-radius: 8px;
    padding: 1.875rem;
    width: 100%;
    max-width: 489px;
    position: relative;
    .error {
        color: var(--red-400);
    }
    .skip {
        color: var(--red-400);
        font-size: 12px;
        line-height: 15px;
        margin-top: 1.1875rem;
        text-align: center;
    }
`;

export const UploadImageWrapper = styled("div")`
    .upload-title {
        margin-bottom: 0.9375rem;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
    }
    input {
        &[type="file"] {
            display: none;
        }
    }
    label {
        &[for="file"] {
            display: block;
            background-color: var(--neutral-200);
            color: var(--neutral-400);
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
`;

export const InputWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    gap: 18px;
    @media screen and (max-width: 767px) {
        display: block;
    }
`;

export const InputField = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1.75rem;
    position: relative;
    width: 100%;
    label {
        font-size: 12px;
        line-height: 15px;
        color: var(--neutral-400);
    }
    input {
        background: var(--neutral-50);
        color: var(--neutral-400);
        font-family: inherit;
        font-size: 12px;
        padding: 0.5rem 2.4rem 0.5rem 1rem;
        border: 1px solid var(--neutral-50);
        border-radius: 2px;
        outline: none;
        &::placeholder {
            font-family: inherit;
            color: var(--neutral-300);
        }
        &:focus {
            background: var(--neutral-100);
            border: 1px solid var(--neutral-200);
        }
        &[type="date"]::-webkit-calendar-picker-indicator {
            opacity: 0;
            cursor: pointer;
            transform: translateX(23px);
            z-index: 5;
        }
        &[type="date"]:in-range::-webkit-datetime-edit-year-field,
        &[type="date"]:in-range::-webkit-datetime-edit-month-field,
        &[type="date"]:in-range::-webkit-datetime-edit-day-field {
          opacity: 0.5;
        }
    }
    .input-icon {
        position: absolute;
        &.icon {
            bottom: 0.5rem;
            right: 1rem;
        }
    }
    &.password-wrapper {
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
    }
`;

export const ForgotPasswordText = styled('p')`
    text-align: right;
    color: var(--red-400);
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
`;

export const SignupButton = styled('button')`
    width: 100%;
    margin-top: 3.25rem;
    background: var(--lilac-400);
    color: var(--neutral-25);
    border-radius: 4px;
    text-align: center;
    padding: 0.625rem 0.5rem;
    outline: none;
    border: none;
    font-family: inherit;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
`;

export const SSO = styled('p')`
    color: var(--red-400);
    font-size: 12px;
    line-height: 15px;
    margin-top: 1.1875rem;
    text-align: center;
    cursor: pointer
`;