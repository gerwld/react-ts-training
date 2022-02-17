import React, { FC, useRef, useState } from 'react'

const EventsExaple: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  }
  const dragEvent = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag');
  }

  const dropEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
    console.log('element dropped');
    
  }
  const dragLeaveEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  }
  const dragOverEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  }

  return (
    <div>
      <input type="text" onChange={changeHandler} value={value} />
      <input ref={inputRef} type="text" />
      <button onClick={clickEvent}>Text</button>
      <div draggable onDrag={dragEvent} style={{width: '200px', height: '200px', background: 'red'}}></div>
      <div 
      onDrop={dropEvent} 
      onDragLeave={dragLeaveEvent} 
      onDragOver={dragOverEvent} 
      style={{width: '200px', height: '200px', background: isDrag ?  'red' : 'teal', marginTop: '10px'}}></div>
    </div>
  )
}

export default EventsExaple;