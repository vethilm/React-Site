import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import "./explore.css";
import { useState } from "react";
import imageList from "./imageOrganizer";

function ExplorePage() {
  const [overlayDisplay, setOverlay] = useState(null);
  const [selected, setSelected] = useState(null);
  // function previewImg(image){
  //   setSelected(image)
  //   console.log(image)
  //   setOverlay(overlayDisplay? false:true);
  // }

 function fillPage() {
   var columns = 7;
   var rows = Math.floor(imageList.length/columns);
   var imgObjects =[];
   var colObjects = [];
   var rowObjects = [];
 
   for (var i = 0; i < imageList.length; i++) {
     // if the counter reaches the # of rows, add the column to page
       if(i===rows || (i>rows && i%rows ===0)){ 
         colObjects.push(<div className="column">{imgObjects}</div>)
         rowObjects.push(<div className="row">{colObjects}</div>)
         colObjects=[];
         imgObjects=[]
       }
       
       // add image to the column
         imgObjects.push(
          <ThumbnailCard  
          // onClick={previewImg} 
          image={imageList[i]} 
          size="card-sm" />
          );
   }
 return rowObjects;
 }

 const items=fillPage();
  return (
    <div className="grid">
        {items}
    </div>
 )
}
// <OverlayCard display={overlayDisplay} selectedImage={selected}/> 
export default ExplorePage;
