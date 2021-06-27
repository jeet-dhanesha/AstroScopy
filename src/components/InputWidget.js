import React, {useState} from 'react';
import './InputWidget.css';

import logo from './logo.jpeg';

import aquarius from './zodiac_images/aquarius.png';
import aries from './zodiac_images/aries.png';
import cancer from './zodiac_images/cancer.png';
import capricorn from './zodiac_images/capricorn.png';
import gemini from './zodiac_images/gemini.png';
import leo from './zodiac_images/leo.png';
import libra from './zodiac_images/libra.png';
import pisces from './zodiac_images/pisces.png';
import sagittarius from './zodiac_images/sagittarius.png';
import scorpio from './zodiac_images/scorpio.png';
import taurus from './zodiac_images/taurus.png';
import virgo from './zodiac_images/virgo.png';

export default function InputWidget() {

                const [userName, setUserName] = useState("");
                const [userDob, setUserDob] = useState("dd-mm-yyyy");
                const [isInputValid, setIsInputValid] = useState(true);
                const [isSearching, setIsSearching] = useState(false);
                const [dataLoaded, setDataLoaded] = useState(false);
                const[showOutput, setShowOutput] = useState(false);
                const [searchResult, setSearchResult] = useState({
                                zodiacSign: "",
                                compatibility: "",
                                color: "",
                                luckyNum: "",
                                luckyTime: "",
                                mood: "",
                                description: "",
                });

                const errorHandler= () =>{
                                setTimeout(function(){ setIsInputValid(true) }, 3000);
                };
                const images = {
                                "aquarius": aquarius,
                                "aries":aries,
                                "cancer":cancer,
                                "capricorn":capricorn,
                                "gemini":gemini,
                                "leo":leo,
                                "libra":libra,
                                "pisces":pisces,
                                "sagittarius":sagittarius,
                                "scorpio":scorpio,
                                "taurus":taurus,
                                "virgo":virgo,
                };

                const fetchData = (userZodiacSign) => {
                                const URL = `https://aztro.sameerkumar.website/?sign=${userZodiacSign}&day=today`;
                                fetch(URL, {
                                method: 'POST'
                                })
                                .then(response => response.json())
                                .then(json => {

                                setSearchResult({
                                                                zodiacSign: userZodiacSign,
                                                                compatibility: json.compatibility,
                                                                color: json.color,
                                                                luckyNum: json.lucky_number,
                                                                luckyTime: json.lucky_time,
                                                                mood: json.mood,
                                                                description: json.description,
                                                });
                                setDataLoaded(true);
                                });
                };

                const userNameHandler= event => {
                                setUserName(event.target.value);
                };

                const userDobHandler = event => {
                                setUserDob(event.target.value);
                };

                const searchHandler = event =>{
                                setShowOutput(false);
                                event.preventDefault();
                                if(userName.length === 0 || userDob === "dd-mm-yyyy"){
                                                setIsInputValid(false);
                                                errorHandler();
                                } else{
                                                setShowOutput(true);
                                }

                                setIsSearching(true);
                                setDataLoaded(false);
                                let userZodiacSign = getZodiacSign(userDob);
                                fetchData(userZodiacSign);
                };

                const getZodiacSign = dob =>{
                                const dd = parseInt(dob.substr(8,), 10);
                                const mm = parseInt(dob.substr(5,7), 10);
                                switch(mm){
                                                case 1:
                                                                if(dd <=19){
                                                                                return "capricorn";
                                                                }else{
                                                                                return "aquarius";
                                                                }
                                                case 2:
                                                                if(dd <=17){
                                                                                return "aquarius";
                                                                }else{
                                                                                return "pisces";
                                                                }
                                                case 3:
                                                                if(dd <=19){
                                                                                return "pisces";
                                                                }else{
                                                                                return "aries";
                                                                }
                                                case 4:
                                                                if(dd <=19){
                                                                                return "aries";
                                                                }else{
                                                                                return "taurus";
                                                                }
                                                case 5:
                                                                if(dd <=20){
                                                                                return "taurus";
                                                                }else{
                                                                                return "gemini";
                                                                }
                                                case 6:
                                                                if(dd <=20){
                                                                                return "gemini";
                                                                }else{
                                                                                return "cancer";
                                                                }
                                                case 7:
                                                                if(dd <=22){
                                                                                return "cancer";
                                                                }else{
                                                                                return "leo";
                                                                }
                                                case 8:
                                                                if(dd <=22){
                                                                                return "leo";
                                                                }else{
                                                                                return "virgo";
                                                                }
                                                case 9:
                                                                if(dd <=22){
                                                                                return "virgo";
                                                                }else{
                                                                                return "libra";
                                                                }
                                                case 10:
                                                                if(dd <=22){
                                                                                return "libra";
                                                                }else{
                                                                                return "scorpio";
                                                                }
                                                case 11:
                                                                if(dd <=21){
                                                                                return "scorpio";
                                                                }else{
                                                                                return "sagittarius";
                                                                }
                                                case 12:
                                                                if(dd <=21){
                                                                                return "sagittarius";
                                                                }else{
                                                                                return "capricorn";
                                                                }                                  
                                                default:
                                                                return "not found";
                                };

                                
                };

                const spinner = <div className="w3-center"><i className="fa fa-spinner w3-spin" style={{fontSize: '64px' }}></i></div>;
                const horoscope = <div className="w3-card w3-margin w3-border-blue w3-topbar w3-leftbar w3-rightbar w3-bottombar w3-animate-bottom w3-padding w3-round-xlarge" id="searchResult" style={{backgroundColor: '#dbdce0',}}>
                                                <div className="w3-center">
                                                <img src={images[searchResult.zodiacSign] } width="100px" alt="zodiac-sign-logo" />
                                               <b> <h3 className="w3-center" style={{color: 'blue'}}>{searchResult.zodiacSign}</h3></b>
                                                </div>
                                                <h3>{`Dear ${userName},`}</h3>
                                                
                                                <p>{searchResult.description}</p>
                                                <ul style={{listStyleType: 'none', margin: '0', padding: '0'}}>
                                                <li>{`Color: ${searchResult.color}`}</li>
                                                <li>{`Compatibility: ${searchResult.compatibility}`}</li>
                                                <li>{`Lucky Number: ${searchResult.luckyNum}`}</li>
                                                <li>{`Lucky Time: ${searchResult.luckyTime}`}</li>
                                                <li>{`Mood: ${searchResult.mood}`}</li>
                                                </ul>
                </div>;
                const searchDisplay =  (isSearching ? (dataLoaded ? horoscope : spinner ) : '');

                return (
                                <div className="myDesign">
                                                <div className="w3-center w3-margin w3-padding">
                                                <img src={logo} width="200px" className="w3-round-xlarge" alt="Astroscopy Logo"/>
                                                </div>
                                <div className="w3-card w3-blue w3-padding w3-margin w3-round-xlarge w3-row">
                                                <form onSubmit={searchHandler}>
                                                <div className="w3-col s10 w3-left-align">
                                                                
                                                                <input type="text" className="w3-margin w3-padding" placeholder="Your Name" onChange={userNameHandler} value={userName}/>
                                                                
                                                                <input type="date" className="w3-margin w3-padding" onChange={userDobHandler} value={userDob}/>
                                                </div>
                                                <div className="w3-col s2 w3-right-align">
                                                                <input type="submit" value="Search" className="w3-button w3-round-xlarge w3-blue w3-padding w3-margin"/>
                                                                
                                                </div>    
                                                </form>  
                                                           
                                </div>
                                {isInputValid ? '' :<p className="w3-card w3-red w3-round-xlarge w3-padding w3-margin">Enter valid Input ....</p>}
                                {showOutput ? searchDisplay: ''}       
                                </div>  
                )
}
