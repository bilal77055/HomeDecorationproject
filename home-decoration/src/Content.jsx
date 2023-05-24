import React, { createContext, useContext, useEffect, useState } from "react";
import one from '../src/images/images01.jpeg'
import two from '../src/images/images02.jpeg'
import three from '../src/images/images03.jpeg'
import fourth from '../src/images/images04.jpg'
import fifth from '../src/images/images05.jpg'
import sixth from '../src/images/images06.jpeg'
import seventh from '../src/images/images07.jpg'
import eighth from '../src/images/images08.jpg'
import ninth from '../src/images/images09.jpg'
import tenth from '../src/images/images10.jpg'
import eleventh from '../src/images/images11.jpeg'
import twelvth from '../src/images/images12.jpg'
import {useNavigate} from 'react-router-dom'

const AppContext=createContext()
const AppProvider=({children})=>{
    const [name,setname]=useState('bilal')
    const navigate=useNavigate()

    const[data,setdata]=useState([
        {
            src :one,
            name :'High-Back Bench',
            price :'9.99',
            category :'Ikea'
        },
        {
            src :two,
            name :'Albany Table',
            price :'79.99',
            category :'Marcos'
        },
        {
            src :three,  
            name :'Accent Chair',
            price :'25.99',
            category :'Caressa'
        },
        {
            src :fourth,
            name :'Wooden Table',
            price :'45.99',
            category :'Caressa'
        },
        {
            src :fifth,
            name :'Dining Table',
            price :'6.99',
            category :'Caressa'
        },
        {
            src :sixth,
            name :'Sofa Set',
            price :'69.99',
            category :'Liddy'
        },
        {
            src :seventh,
            name :'Modern Bookshelf',
            price :'8.99',
            category :'Marcos'
        },
        {
            src :eighth,
            name :'Emperor Bed',
            price :'21.99',
            category :'Liddy'
        },
        {
            src :ninth,
            name :'Utopia Sofa',
            price :'39.99',
            category :'Marcos'
        },
        {
            src :tenth,
            name :'Entertainment Center',
            price :'29.99',
            category :'Liddy'
        },
        {
            src :eleventh,
            name :'Albany Sectional',
            price :'10.99',
            category :'Ikea'
        },
        {
            src :twelvth,
            name :'Leather Sofa',
            price :'9.99',
            category :'Liddy'
        },
    
    ])


  
    const [state, setstate] = useState(data);
    const [nextdata, setnextdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [wholeobj,setwholeobj]=useState()
    const [loading1, setloading1] = useState(false);
    
  
    const filterData = (category) => {
      const filteredData = state.filter((item) => {
        return item.category === category;
      });
      setnextdata(filteredData);
      setloading(false);
    };
  
    useEffect(() => {
      if (selectedCategory) {
        filterData(selectedCategory);
      }
    }, [selectedCategory]);


  
const saveobj = (item) => {
    const { src, name, price, category } = item;
    const extractedItem = { src, name, price, category };
    localStorage.setItem('item', JSON.stringify({src,name,price}) || []) ;
    console.log(item.src,'src');
    navigate('/details')
};

   
 
    return(
        <AppContext.Provider
        value={{
            name,
            data,
            data,
            state,
            nextdata,
            loading,
            selectedCategory,
            setSelectedCategory,
            setloading,
            filterData,
            saveobj,
            wholeobj,

        }}
        >
{children}
        </AppContext.Provider>
    )
}
export const useGlobel=()=>{
    return useContext(AppContext)
}
export {AppProvider}