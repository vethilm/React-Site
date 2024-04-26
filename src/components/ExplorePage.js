import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import imageList from "../images";
import "./explore.css";

function fillPage() {
  console.clear()
  var columns = 6;
  var rows = Math.floor(imageList.length/columns);
  console.log(rows);
  var imgObjects =[];
  var colObjects = [];
  var rowObjects = [];



  for (var i = 0; i < imageList.length; i++) {
    // if the counter reaches the # of rows, add the column to
      if(i===rows || (i>rows && i%rows ===0)){ 
        console.log("adding col  to page ; i="+i)
        colObjects.push(<div className="column">{imgObjects}</div>)
        rowObjects.push(<div className="row">{colObjects}</div>)
        colObjects=[];
        imgObjects=[]
      }// add image to the column
        console.log("adding image "+i+" to column ")
        imgObjects.push(<ThumbnailCard title={imageList[i].title} src={imageList[i].src} />);
      console.log(i)
  }
return rowObjects;
}

function ExplorePage() {
  const items=fillPage();
  return (
    <div className="grid">
       {items}

    </div>
  );
}

export default ExplorePage;
