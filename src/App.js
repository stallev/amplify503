import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const myAsyncFunc = async () => {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const myRes = await res.json();
      console.log(myRes)
    };
    myAsyncFunc();
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
