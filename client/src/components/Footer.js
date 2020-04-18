import React, {useState, useEffect} from "react";


export default function Footer() {
  let [year, setYear] = useState('')

  let current_Date = new Date()
  let myYear = current_Date.getFullYear()
  useEffect(() => {
    setYear(myYear)
  }, [])
  
  return (
    <div className="bg-dark pt-2">
      <p className="text-info text-center">Contact: jpaulino04@msn.com</p>
      <footer className="text-white p-2 text-center">&copy; {year}</footer>
    </div>
  );
}
