import React, { useEffect } from 'react';
const tableau = require("tableau-api")

function TableauReact() {

  
  function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/Firstdashboard_16768294921540/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
    
    var viz = new tableau.Viz(containerDiv, url);
  }
  
  initViz();

  return (
    <div id="vizContainer"></div>
  )
};

export default TableauReact;