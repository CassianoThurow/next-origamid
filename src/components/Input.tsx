'use client'
import { useState } from 'react'

export default function Input () {
    const [valuePeso, setValuePeso] = useState('')
    const [valueAltura, setValueAltura] = useState('')
    const [value, setValue] = useState('');

    const handleCalculate = () => {
        const alturaMetro = Number(valueAltura) / 100
       const imc = (Number(valuePeso) / Number(alturaMetro * alturaMetro)).toFixed(2)
       setValue(imc)
    }


    return (
        <div className='flex flex-col w-1/4 bg-red-300 mx-auto'>
            <input className='text-slate-950' type="text" onChange={(e) => setValueAltura(e.target.value)} value={valueAltura} />
            <input className='text-slate-950' type="text" onChange={(e) => setValuePeso(e.target.value)} value={valuePeso} />
            <button onClick={handleCalculate} type="button">Calcular</button>
            <div className='text-red-600 bg-black'>{value}</div>
        </div>
    )
}