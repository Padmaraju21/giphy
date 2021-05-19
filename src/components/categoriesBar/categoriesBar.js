import React, { useState } from 'react' 
import"./_categoriesBar.scss";

//keywords array for prefix searching 
const keywords = [
  'sad','happy',
  'funny','wow',
  'youre welcome',
  'lazy','stressed',
  'embarrassed','awesome',
  'clapping','high five',
]
function CategoriesBar() {

  const [activeElement,setActiveElement] = useState('All')
  
  const handleClick = value => {
    setActiveElement(value)
 }


 return (
  <div className='categoriesBar'>
     {keywords.map((value, i) => (
        <span
           onClick={() => handleClick(value)}
           key={i}
           className={activeElement === value ? 'active' : ''}>
           {value}
        </span>
     ))}
  </div>
)
}

export default CategoriesBar
