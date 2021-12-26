import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button,Divider } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    Axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안됨
        router.push("/login");
      }
    });
  }

  function logout() {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  
  return (
    <div className="content">
      <h2>Admin Page</h2>
      <Divider />
      {isLogin && <Button color="rgba(53, 53, 53, 0.699)" onClick={logout}>Logout</Button>}
    </div>
  );
}