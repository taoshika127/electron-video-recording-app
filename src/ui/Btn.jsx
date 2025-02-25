import './Btn.css';

function Btn({ text, color, handleClick}) {
    return (
      <div>
        <button onClick={handleClick} className={"basic-button " + color} >{text}</button>
      </div>
    )
}

export default Btn;