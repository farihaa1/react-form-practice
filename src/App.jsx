import "./App.css";
import CustomHook from "./components/HookForm/CustomHook/CustomHook.jsx";
import RefForm from "./components/RefForm/RefForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateFullForm from "./StateFullForm/StateFullForm";

function App() {
  return (
    <>
      <h1>Forms</h1>
      <CustomHook></CustomHook>
      <RefForm></RefForm>
      <StateFullForm></StateFullForm>
      <SimpleForm></SimpleForm>
      
    </>
  );
}

export default App;
