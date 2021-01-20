import {
  useState
} from "react";

const useForm = (Values) => {
  const [FormValues, setFormValues] = useState(Values);
  const handleInputChange = ({
    target
  }) => {
    setFormValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };
  return [FormValues, handleInputChange, setFormValues];
};
export default useForm;