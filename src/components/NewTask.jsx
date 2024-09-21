import { useState } from "react"




export default function NewTask(){
    const [enteredTask,setEnteredTask] = useState();

    function handleChange(event){
        setEnteredTask(event.target.event);
    }

    function handleClick(){
        setEnteredTask('');
    }

    function handleTask(){

    }
    
    return <div className="flex items-center gap-4">
        <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask}
        />
        <button 
            className="text-slate-100 hover: text-stone-950"
            onClick={handleClick}    
        >
            Add Task
        </button>
    </div>
}