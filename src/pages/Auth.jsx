import { useState } from "react";
import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center p-10">
      <AuthContainer />
    </div>
  );
}

export default Auth;
