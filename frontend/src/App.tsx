import { Button } from "./components/Button";
import { Image } from "./components/Image";

function App() {
  return (
    <>
      <Button label="Hello"></Button>
      <Image
        src="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
        alt="cactus"
        width="w-1/5"
        height="h-1/5"
      />
    </>
  );
}

export default App;
