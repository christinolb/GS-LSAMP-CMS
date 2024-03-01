import TextInput from "./components/TextInput";
import FormButton from "./components/FormButton";
import Header from "./components/Header";

export default function Login() {
  return (
    <>
      <Header pageTitle="Login" />
        <main id="login-main">
          <form className="container">
            <div className="center-divs">
              <div className="top-div">
                <TextInput label={"Username"} name={"username"} />
              </div>
              <div>
                <TextInput label={"Password"} name={"password"} />
              </div>
            </div>

            <div id="login-button">
              <FormButton label={"Login"} />
            </div>
          </form>
        </main>
    </>
      
  );
}
