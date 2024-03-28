import React from "react";
import AccueilSyles from "./accueil.module.css";
const Accueil = () => {
    return (
        <div className={AccueilSyles.AccueilContainer}>

            <div className={AccueilSyles.maingauch}>
                <div className={AccueilSyles.gauchtext}>
                    <h1>
                        the <span> all-in-one </span> <br></br>cybersecurity platform
                    </h1>
                </div>
                <div className={AccueilSyles.gauchinput}>
                    <label>TRY</label>
                    <div className={AccueilSyles.customsearch} >
                    
  <input type="text" className={AccueilSyles.customsearchinput}  placeholder="Enter a URL, IP address or hostname" required/>
  <button className={AccueilSyles.customsearchbotton}  >Scan now</button>  

                    {/* <input name="target" placeholder="Enter a URL, IP address or hostname" type="text" class="pr-6.5 grow rounded-lg border-[0.5px] border-black-v2-50 bg-white bg-[#F8F8F8] py-3.5 pl-6 text-lg leading-7 text-black-v2 text-dark-blue placeholder-[#bcbec4] sm:pr-44"/>
                    <button className="right-1 flex w-full flex-row items-center justify-center whitespace-nowrap rounded-lg border-[0.5px] border-green-highlight-dark bg-green-highlight px-4 py-3 text-base font-bold leading-5 tracking-[0.4px] text-dark-blue sm:absolute sm:w-auto sm:rounded" type="submit" style={{opacity:1}}>Scan now<svg className="h-full w-full ml-2.5 !h-6 !w-6" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"></path><path d="m.5 4.5h13"></path></g></svg></button> */}
                    </div>
                </div>
            </div>
            <div className={AccueilSyles.maindroit}>
            <img
            className={AccueilSyles.img}
            src="\Cyber attack-pana.png"
            alt="img"
          />

            </div>

        </div>
    );
};

export default Accueil;
