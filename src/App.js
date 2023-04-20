import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { hi, hi2 } from './features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  console.log(data);
  return (
    <div className="App">
      <h2>
        Hi,
      </h2>
      <button type="button" onClick={() => dispatch(hi())}>Update</button>
      <button type="button" onClick={() => dispatch(hi2())}>reset</button>
    </div>
  );
}

export default App;
