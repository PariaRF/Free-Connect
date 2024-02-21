import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("09031820241");
  const { handleSubmit, register, getValues } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            // phoneNumber={phoneNumber}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            // phoneNumber={phoneNumber}
            phoneNumber={getValues("phoneNumber")}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            onBack={() => setStep((s) => s - 1)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
