import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [sex, setSex] = useState("male");
  const [result, setResult] = useState(0);

  const calculate = () => {

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    grams = grams - (burning * time);

    let burnTime = 0;
    if (sex === 'male') {
      burnTime = grams / (weight * 0.7);
      if (burnTime < 0) {
        burnTime = 0;
      }
    } else {
      burnTime = grams / (weight * 0.6);
      if (burnTime < 0) {
        burnTime = 0;
      }
    }
    setResult(burnTime);

  }

  return (
    <form>
     <h3>Calculating alcohol blood level</h3>
     <div>
      <label>Weight</label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
     </div>
     <div>
       <label>Bottles</label>
       <select value={bottles} onChange={e => setBottles(e.target.value)}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
       </select>
      </div>
      <div>
       <label>Time</label>
       <select value={time} onChange={e => setTime(e.target.value)}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
       </select>
     </div>
     <div>
       <label>Gender</label>
       <label><input type="radio" name="sex" value="male" defaultChecked onChange={e => setSex(e.target.value)} />Male</label>
       <label><input type="radio" name="sex" value="female" onChange={e => setSex(e.target.value)} />Female</label>
     </div>
     <div>
       <output>{result.toFixed(1)}</output>
     </div>
     <button type="button" onClick={calculate}>Calculate</button>
   </form>
  );
}

export default App;