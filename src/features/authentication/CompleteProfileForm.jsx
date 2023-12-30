import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="ایمیل"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              onChange={(e) => setRole(e.target.value)}
              label="کارفرما"
              value="OWNER"
              id="OWNER"
              name="role"
              checked={role === "OWNER"}
            />
            <RadioInput
              onChange={(e) => setRole(e.target.value)}
              label="فریلنسر"
              value="FREELANCER"
              id="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
            />
          </div>
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
