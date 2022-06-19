import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return children;
};

export default RequireAuth;
