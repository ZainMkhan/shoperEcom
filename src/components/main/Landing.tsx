import shopmen from "../../assets/shopmenn.jpg"
import shopwomen from "../../assets/shopwomenn.jpg"
import shopjewelery from "../../assets/shopjewelery.jpg"
import shopelectronics from "../../assets/shoptech.jpg"
import {BsChevronCompactLeft , BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import { useState } from "react"
import { Link } from "react-router-dom"

const Landing = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImg = [
    {
      url: shopmen
    },

    {
      url: shopwomen
    },

    {
      url:  shopjewelery
    },

    {
      url: shopelectronics
    },
  ]



  const prevImg = () =>{
    const isFirstImg = currentIndex === 0
    const newImg = isFirstImg ? heroImg.length -1 : currentIndex - 1;
    setCurrentIndex(newImg);
  }

  const nextImg = () =>{
    const isLastImg = currentIndex === heroImg.length -1;
    const newImg = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newImg)
  }


  const goToImg = (slideIndex:number) =>{
    setCurrentIndex(slideIndex)
  }

  setTimeout(()=>{
    let currImg = currentIndex;
    if(currImg === 3){
      currImg = 0;
      setCurrentIndex(currImg)
    }else{
      setCurrentIndex(currImg + 1);
    }
  }, 13000)

  return (
    <div className="w-5/6 h-4/6 mt-5 relative group select-none">
      <div style={{backgroundImage: `url(${heroImg[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover transform ease-in-out duration-200 shadow-xl ipad:flex ipad:justify-center ipad:items-center ipad:flex-col">

        <div className="absolute bg-white top-[30%] left-[5%] w-[30%] py-3 px-5 rounded-xl bg-transparent  text-red-400  border-red-400 border-2 xs:hidden ipad:w-[60%] ipad:flex ipad:static ipad:h-max ipad:gap-4 ipad:items-center">
        <h2 className="text-5xl ipad:text-black ipad:text-3xl">End of Season</h2>
        <h1 className="text-7xl ipad:text-5xl">Sale!</h1>
        </div>

        <div className="absolute bg-red-400  top-[47%] left-[21%] py-3 px-5 rounded-xl border-2
         text-white shadow-1xl hover:bg-yellow-500 hover:shadow-4xl xs:relative xs:left-[25%] xs:w-[150px] xs:text-center ipad:static ipad:mt-10 ipad:w-[30%] ipad:text-center ipad:text-xl ipad:p-3">
          <Link to="/shop">
            Shop now!
          </Link>
         </div>

        <div className="hidden group-hover:block absolute w-max top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 ml-3 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevImg} size={30}/>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] w-max -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 ml-3 bg-black/20  text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextImg} size={30}/>
        </div>

        <div className="flex item-center bottom-1  absolute justify-center py-2 w-full text-3xl">
          <div className="w-max rounded-xl flex bg-black/20 justify-center text-white">
          {heroImg.map((_slide , slideIndex)=>(
            <div key={slideIndex} onClick={() => goToImg(slideIndex)}className="cursor-pointer"> <RxDotFilled/> </div>
          ))}
          </div>

            

        </div>

      </div>
      </div>
  )
}

export default Landing