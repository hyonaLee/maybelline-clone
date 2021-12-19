import { useRouter } from "next/router";
import { Menu,Segment } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  } else if (router.pathname === "/contact") {
    activeItem = "contact";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "contact") {
      router.push("/contact");
    }
  }

  return (
    <Segment inverted>
    <Menu inverted pointing secondary className="GnbMenu" style={{ "margin" : 0 , "max-width" : "1000px" ,"min-width" : "300px"}}>
      <Menu.Item 
        name="home"
        active={activeItem === "home"}
        onClick={goLink}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={goLink}
      />
      <Menu.Item
        name="contact"
        active={activeItem === "contact"}
        onClick={goLink}
        // onClick={() => {
        //   router.push("/contact");
        // }}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin");
        }}
      />
    </Menu>
    </Segment>
  );
}