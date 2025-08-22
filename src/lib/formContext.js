import {
  useContext,
  createContext,
  useState,
  Children,
  useEffect,
} from "react";

const formContext = createContext();

export const FormProvider = ({ children }) => {
  const [registerDetail, setRegisterDetail] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    phoneNumber: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    address: "",
    gender: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const storedData = localStorage.getItem("userDetails");
    if (storedData) {
      const parsedData = JSON.parse(storedData); // Fixed: parse the actual data, not the string "userDetails"
      setRegisterDetail(parsedData);
      setIsAuthenticated(true);
    }
  }, []);
  console.log(registerDetail.firstname);

  const setFormValues = (event) => {
    setRegisterDetail({
      ...registerDetail,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <formContext.Provider
        value={{
          registerDetail,
          isAuthenticated,
          setIsAuthenticated,
          setFormValues,
        }}
      >
        {children}
      </formContext.Provider>
    </div>
  );
};

export const useInfo = () => useContext(formContext);
