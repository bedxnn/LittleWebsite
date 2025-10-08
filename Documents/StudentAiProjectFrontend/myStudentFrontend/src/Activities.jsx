import React, { useState } from 'react';
import gb from './images/godbrothers.png';
import bmi from './images/bmi.png';

function Activities() {
  const [open, setOpen] = useState(false);
  const [bmiOpen, setBmiOpen] = useState(false);

  return (
    <div className="Activities">
      <p id="activities-n"> Activities</p>

      <div onClick={() => setOpen(!open)} className="Clickable">
        <img id="gb-image" src={gb} alt="Godbrothers" />
        <p id="gb-word">Godbrothers</p>

        {open && (
          <p className="dropdown-box">
            I’m part of the Godbrothers organization at Delaware State University, where we give back
            through community service like clothing drives and donations.
          </p>
        )}
      </div>

      <div onClick={() => setBmiOpen(!bmiOpen)} className="Clickable-boxb">
        <img id="bmi-image" src={bmi} alt="BMI" />
        <p id="bmi-word">BMI</p>

        {bmiOpen && (
          <p className="bmi-box">
            I’m part of the Black Male Initiative (BMI) at Delaware State University. It helps with
            building resumes, making connections, and hosts events on how to stand out and make a
            strong, positive impact.
          </p>
        )}
      </div>
    </div>
  );
}

export default Activities;
