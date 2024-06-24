import React from "react";
import 'tachyons';
import './ImgForm.css';

const ImgForm = () =>  {
    return (
      <div className="Form">
        <p className="f4"> {'This Site will help you track Faces in your Images'}</p>
        <form className="in" placeholder="Drop your Image here"></form>
        <div className="center w-50  ">
        <input className="w-70 br2" type="text" name="drop" placeholder="Drop your Image here"></input>
        <button className="w-30 grow f-2 link br2" type="submit">Detect</button>
        </div>
      </div>
    )
}


export default ImgForm;