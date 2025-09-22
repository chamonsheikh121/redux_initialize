import { useDispatch, useSelector } from "react-redux";
import type { TApp_Dispatch, TRoot_State } from "../store";


export const App_use_selector = useSelector.withTypes<TRoot_State>();
export const App_use_dispatch = useDispatch.withTypes<TApp_Dispatch>();
