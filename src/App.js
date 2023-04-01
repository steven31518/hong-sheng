import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/products/all`
      );
      console.log(res);
    })();
  }, []);
  return (
    <div className="App">
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
