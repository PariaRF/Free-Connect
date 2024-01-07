import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl flex justify-center pt-10">
      <div className="w-full sm:max-w-sm flex justify-center pt-10">
        <div className="w-full flex flex-col justify-center">
          <button onClick={moveBack} className="flex items-center gap-x-2 mb-8">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span>بازگشت</span>
          </button>
          <h1 className="text-xl font-bold text-secondary-700">
            صفحه ای که دنبالش بودید پیدا نشد
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
