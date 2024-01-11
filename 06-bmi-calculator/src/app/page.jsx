"use client"
import { useState } from "react"

export default function Home() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0); 
  const [bmi, setBMI] = useState(0);

  function CalculateBmi(e) {
    const formData = new FormData(e.target);
    console.log(formData.get("measure"));
    e.preventDefault();
    // const heightInMeter = height/100;
    // if(document.getElementById("cm").checked == 'cm')
    //   setBMI((weight/(heightInMeter*heightInMeter)).toFixed(2));
    // else 
    //   setBMI((weight/(height*height)).toFixed(2));    
  }

  return (
    <form className="text-3xl flex flex-col gap-3 w-1/3 m-auto">
      <h1 className="text-6xl my-10">BMI Calculator</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="weight">Enter Weight in KG</label>
        <input 
          className="text-black p-4 focus:outline-none rounded-lg" 
          type="text" 
          name='weight' 
          onChange={(e)=>{setWeight(e.target.value)}} 
        />
      </div>

      <div>
       <input type="radio" id="cm" name="measure" checked className="inline-block" /> 
       <label className="" htmlFor="measure">centimeter</label>
      </div>
      <div>
        <input type="radio" id="m" name="measure" className="inline-block"  /> 
        <label htmlFor="measure">meter</label>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="height">Enter Height in CM</label>
        <input className="text-black p-4 focus:outline-none rounded-lg" type="text" name='height' onChange={(e)=>{setHeight(e.target.value)}} />
      </div>

      <button type="submit" className="w-1/2 m-auto bg-slate-400 py-3 rounded-full my-5" onClick={CalculateBmi}>Calculate</button>
        {(bmi != 0) && <div className="inline-block">BMI Value: {bmi + " ("} {bmi < 18.5 ? 'Underweight )' : bmi < 25 ? 'Normal )' : bmi < 30 ? 'Overweight )' : 'Obese )'}
      </div>}
    </form>
  )
}


// "use client"
// import { useState } from "react"

// export default function Home() {
//   const [height, setHeight] = useState(0);
//   const [weight, setWeight] = useState(0); 
//   const [bmi, setBMI] = useState(0);
//   const [isCmChecked, setIsCmChecked] = useState(true);

//   function CalculateBmi() {
//     const heightInMeter = height/100;
//     if(document.getElementById("cm").checked == 'cm')
//       setBMI((weight/(heightInMeter*heightInMeter)).toFixed(2));
//     else 
//       setBMI((weight/(height*height)).toFixed(2));    
//   }

//   return (
//     <main className="text-3xl flex flex-col gap-3 w-1/3 m-auto">
//       <h1 className="text-6xl my-10">BMI Calculator</h1>

//       <div className="flex flex-col gap-2">
//         <label htmlFor="weight">Enter Weight in KG</label>
//         <input className="text-black p-4 focus:outline-none rounded-lg" type="text" name='weight' onChange={(e)=>{setWeight(e.target.value)}} />
//       </div>

//       <div>
//        <input type="radio" id="cm" name="measure" checked = {isCmChecked} onClick={()=>{
//         setIsCmChecked(true);
//        }} className="inline-block" /> <label className="" htmlFor="measure">centimeter</label>
//       </div>
//       <div>
//         <input type="radio" id="m" name="measure" className="inline-block" onClick={() => {
//           setIsCmChecked((isCmChecked) => !isCmChecked);
//         }}  /> <label htmlFor="measure">meter</label>
//       </div>

//       <div className="flex flex-col gap-2">
//         <label htmlFor="height">Enter Height in CM</label>
//         <input className="text-black p-4 focus:outline-none rounded-lg" type="text" name='height' onChange={(e)=>{setHeight(e.target.value)}} />
//       </div>

//       <button className="w-1/2 m-auto bg-slate-400 py-3 rounded-full my-5" onClick={CalculateBmi}>Calculate</button>
//         {(bmi != 0) && <div className="inline-block">BMI Value: {bmi + " ("} {bmi < 18.5 ? 'Underweight )' : bmi < 25 ? 'Normal )' : bmi < 30 ? 'Overweight )' : 'Obese )'}
//       </div>}
//     </main>
//   )
// }
