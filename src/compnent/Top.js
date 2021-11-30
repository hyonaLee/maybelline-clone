import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div className="TopDiv">
        <div className="TopInnerDiv">
            <div className="TopLogoDiv">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <Header as="h1">Velog</Header>
        </div>
        <Gnb />
    </div>
  );
}
