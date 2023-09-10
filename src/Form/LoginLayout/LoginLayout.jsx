import { Outlet } from "react-router-dom";
import LoginTitle from "./LoginTitle";

export default function LoginLayout() {
  return (
    <>
      <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <LoginTitle />
        <Outlet className="bg-black-100" />
      </div>
    </>
  );
}
