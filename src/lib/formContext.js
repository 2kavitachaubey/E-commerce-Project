import { useContext, createContext, useState, Children } from "react";

const formContext = createContext();

const formProvider = ({Children}) => {
    const {registerDetail,setRegisterDetail} = useState({})
  return (
    <div>
      <formContext.Provider value={{registerDetail}}>
        {Children}
      </formContext.Provider>
    </div>
  )
}

export const useInfo = () => useContext(formContext);
