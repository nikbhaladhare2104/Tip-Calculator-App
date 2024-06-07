import { useContext } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import { useForm } from "./Context";
// import { form } from "./Context";

function App() {
  // const [formData, setFormData] = useContext(form);
  const [formData, setFormData] = useForm();
  return (
    <main>
      <h1 className="heading">
        SPLI <br /> TTER
      </h1>

      <div className="container">
        <Left />
        <Right />
      </div>
    </main>
  );
}

export default App;
