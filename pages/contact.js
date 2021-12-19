import {
    Button,
    Divider,
    Form,
    Header,
    List,
    TextArea,
  } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import Axios from "axios";
import Head from "next/head";
  
  export default function About() {
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

  useEffect(() => {
    checkLogin();
  }, []);

    return (
      <>
        <Head>
        <title>Mayblline | CONTACT</title>
        <meta name="description" content="CONTACT MAYBLLINE"></meta>
        </Head>
        <div className="content">
          <h2>문의사항</h2>
            <Divider />
            <Form>
            <Form.Field>
                <label>제목</label>
                <input />
            </Form.Field>
            <Form.Field>
                <label>내용</label>
                <TextArea />
            </Form.Field>
            <Button color="rgba(53, 53, 53, 0.699)">보내기</Button>
            </Form>
        </div>
    </>
    );
  }