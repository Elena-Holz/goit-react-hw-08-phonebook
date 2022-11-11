import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingUserStatuse } from "redux/auth/auth-selectors";
import { current } from "redux/auth/auth-operations";
import UserRoutes from "./UserRoutes";

export function App() {
  
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatuse);

useEffect(() => {
        dispatch(current())
    }, [dispatch]);
  

  return (
    <>
     {isLoadingUser ? <p>Loading ...</p> :    <UserRoutes  />}
  
    </>
    );
}
 

