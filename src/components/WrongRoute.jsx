import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";

export function WrongRoute() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col align-center justify-center mt-[40px]">
      <h1 className="text-3xl text-red-600 mx-auto">
        This is the wrong route. To see the app go to "/users"
      </h1>
      <Button onClick={() => {navigate('/users')}} additionalClasses="bg-teal-500 text-white w-fit mx-auto mt-[40px]">Go to "/users"</Button>
    </div>
  )
}
