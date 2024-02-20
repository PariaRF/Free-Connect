import { useForm } from "react-hook-form";
import Loading from "../../../ui/Loading";
import RHFSelect from "../../../ui/RHFSelect";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";

const options = [
  {
    label: "رد شده",
    value: "0",
  },
  {
    label: "در انتظار تایید",
    value: "1",
  },
  {
    label: "تایید شده",
    value: "2",
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        name="status"
        label="تغییر وضعیت"
        register={register}
        required
        options={options}
      />
      <div className="!mt-8">
        {isUpdating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default ChangeUserStatus;
