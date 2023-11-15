import React, { Suspense } from "react";
import { useOutlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthProvider } from "../hooks/useAuth";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import { setAlert } from "../store/reducers/uiReducer";

const AuthLayout = () => {
  const outlet = useOutlet();
  const dispatch = useDispatch();
  const { loading, alert } = useSelector((s) => s.ui);

  const onToastClose = () => {
    dispatch(setAlert({ type: null, message: null }));
  };

  return (
    <AuthProvider>
      <Suspense fallback={<Loader open={"Loading Files"} />}>{outlet}</Suspense>
      <Loader open={loading} />
      <Toast {...alert} handleClose={onToastClose} />
    </AuthProvider>
  );
};

export default AuthLayout;
