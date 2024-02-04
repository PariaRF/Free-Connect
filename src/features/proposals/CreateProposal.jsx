import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است.",
            minLength: {
              value: 10,
              message: "حداقل ۱۰ کاراکتر را وارد کنید.",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است.",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است.",
          }}
          errors={errors}
        />
        <div>
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full mb-2">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
