import {
    Button,
    Divider,
    Form,
    Header,
    List,
    TextArea,
  } from "semantic-ui-react";
import Head from "next/head";
  
  export default function About() {
    return (
      <>
      <Head>
        <title>Mayblline | ABOUT</title>
        <meta name="description" content="ABOUT MAYBLLINE"></meta>
      </Head>
      <div className="content">
        <h2>회사 소개</h2>
        <Divider />
        <List>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>Mayblline</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>Korea, 대한민국</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content>
              <a href="mailto:jack@semantic-ui.com">email@mail.com</a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="linkify" />
            <List.Content>
              <a href="http://www.maybllinecosmetic.com">Mayblline Cosmetic</a>
            </List.Content>
          </List.Item>
        </List>
      </div>
      </>
    );
  }