import React from 'react'
// import { FaBed } from "react-icons/fa6";
// import { BiSolidArea } from "react-icons/bi";



const BHks = ({ property }) => {
          const bhkValues = [
            property.Beds_bhk,
            property.Beds_bhk1,
            property.Beds_bhk2,
            property.Beds_bhk3,
            property.Beds_bhk4,
            property.Beds_bhk5,
            property.Beds_bhk6,
            property.Beds_bhk7,
            property.Beds_bhk8,
          ];
          const filteredBHKs = bhkValues.filter(val =>
            val !== null &&
            val !== undefined &&
            val !== '' &&
            val !== '0' &&
            val !== 0
          );
  
          const hasPenthouse = !!property.Penthouse;
  
          if (filteredBHKs.length === 0 && !hasPenthouse) return <span>N/A</span>;
  
          const bhkText = filteredBHKs.length > 0 ? `${filteredBHKs.join(" / ")} BHK` : null;
  
          const displayText = hasPenthouse
            ? bhkText
              ? `${bhkText} & Penthouse`
              : "Penthouse"
            : bhkText;
  
          return  displayText;
  
}


export const SuperAreaDisplay = ({ property }) => {
          const builtUpMap = [
            property.Super_Area_bhk,
            property.Super_Area_bhk1,
            property.Super_Area_bhk2,
            property.Super_Area_bhk3,
            property.Super_Area_bhk4,
            property.Super_Area_bhk5,
            property.Super_Area_bhk6,
            property.Super_Area_bhk7,
            property.Super_Area_Penthouse
          ];
  
          // Filter out empty strings and non-numeric values
          const builtUpValues = builtUpMap
            .filter(area => area && area !== "")
            .map(area => parseFloat(area))
            .filter(area => !isNaN(area));
  
  
          const min = Math.min(...builtUpValues);
          const max = Math.max(...builtUpValues);
  
          const displaySuperArea =
            min === max ? `${min} sq.ft` : `${min} - ${max} sq.ft`;
  
          return  displaySuperArea;
}


export default BHks
