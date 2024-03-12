import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  // 画像の状態管理
  const [image, setImage] = useState(null);

  // 初回レンダリング時にランダムな画像を取得
  useEffect(() => {
    axios.get("https://source.unsplash.com/random", { responseType: 'blob', }).then((res) => {
      setImage(URL.createObjectURL(res.data));
    });
  }, []);

  // ボタンクリック時にランダムな画像に切り替え
  const onClickGetRandomImage = () => {
    axios.get("https://source.unsplash.com/random", { responseType: 'blob', }).then((res) => setImage(URL.createObjectURL(res.data)));
  }

  return (
    <>
      <img src={image} width="700px" height="500px" alt="Random Image" />
      <br />
      <button onClick={onClickGetRandomImage}>画像を変更</button>
    </>
  );
}

export default App;
