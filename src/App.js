import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [image, setImage] = useState("https://source.unsplash.com/random");
  /* Qiitaで見たuseEffectを使用した実装法*/
  // useEffect(() => {
  //   axios
  //     .get("https://source.unsplash.com/random", { responseType: "blob" })
  //     .then((res) => {
  //       setImage(URL.createObjectURL(res.data));
  //     });
  // }, []);
  const onClickGetRandomImage = () => {
    axios
      .get("https://source.unsplash.com/random", { responseType: "blob" })
      .then((res) => setImage(URL.createObjectURL(res.data)));
  };

  return (
    <>
      <img src={image} width="500px" height="500px" alt="ランダムな画像" />
      <br />
      <button onClick={onClickGetRandomImage}>画像を変更</button>
    </>
  );
}

export default App;
