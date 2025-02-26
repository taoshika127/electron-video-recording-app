import './Btn.css';

function Btn({ icon, text, color, handleClick}) {
    return (
      <div className="flex justify-center items-center">
        <button onClick={handleClick} className={"basic-button ubuntu-regular flex justify-center items-center " + color} >
            <div className="mr-2">{icon}</div>
            {text}</button>
      </div>
    )
}

export default Btn;