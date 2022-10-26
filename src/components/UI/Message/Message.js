import { useContext, useEffect } from "react";
import AppContext from "../../../context/app-context";
import { ToastContainer, toast } from "react-toastify";

function Message() {
  const { message, clearMessage } = useContext(AppContext);

  useEffect(() => {
    if (message && message.text) {
      toast[message["type"]](message["text"]);
    }
  }, [message]);

  return <ToastContainer />;
}

export default Message;
