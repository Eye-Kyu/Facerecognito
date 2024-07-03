import React from "react";
import 'tachyons';
import './ImgForm.css';

const ImgForm = () =>  {
    return (
      <div>
        <p className="f4"> {'This Site will help you track Faces in your Images'}</p>
        <div className="center">
        <div className="form center w-40 br3 pa4">
        <div className="" placeholder="Drop your Image here"></div>
        <input className="w-70 br2 lh-copy " type="text" name="drop" placeholder="Drop your Image here"></input>
        <button className="w-30 grow f-2 link br2 lh-copy" type="submit">Detect</button>
        </div>
        </div>
      </div>
    )
}


export default ImgForm;