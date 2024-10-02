import React,{useState, useRef, useEffect} from 'react'

function FilterComponent({setSearchQuery}) {

    let timer = useRef(0)                                // useRef for persisting value between renders

    function handleChange(e){
        clearTimeout(timer)                             // debouncing
        timer = setTimeout(()=>{
           setSearchQuery(e.target.value)
        }, 500)
    }

  return (
    <div>
        <input type="text" placeholder="Enter todo status" onChange={handleChange} />     
    </div>
  )
}

export default FilterComponent
