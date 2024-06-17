import "./styles/styles.css";
import myStyle from "./styles/anotherKindOfStyle.module.css";
function Contact() {
  return (
    <div className="bodywrap">
      <h1 className="h1">Contact Page</h1>
      <div className={myStyle.bgg}></div>
      <div className={myStyle.bg}></div>
    </div>
  );
}

export default Contact;
