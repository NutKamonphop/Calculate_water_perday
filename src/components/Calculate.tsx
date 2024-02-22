import React from 'react'
import { useState} from 'react'

const Calculate = () => {

    const [Weight, setWeight] = useState<number>(0);
    const [Result, setResult] = useState<number>(0);

      const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
      }  

      const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResult(Weight*2.2*30/2)
      }

      return (
        <>
        <div>
          <form onSubmit={onSubmit}>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <h2>{Result} มล.</h2>
            <input type="number" id="Weight" name="Weight" placeholder='Weight (KG)' onChange={onChangeWeight}/>
            <br />
            <button className='btn-sub' type='submit'>Calculate</button>          
          </form>
        </div>
        </>
      )
    }

export default Calculate
