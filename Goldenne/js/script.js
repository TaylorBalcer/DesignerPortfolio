//Javascript Document Demo 5
//IF USER HASNT MADE CHOICES DECLARE (INITIALIZE) WEB STORAGE VARIABLE WITH DEFAULT MESSAGES:
if(!localStorage.flavorName){
    localStorage.flavorName = "No Flavor Chosen Yet";
    localStorage.flavorCompImage = "";
    localStorage.flavorPrice = 0;

}

if(!localStorage.liquidName){
    localStorage.liquidName= "No Liquid Chosen Yet";
    localStorage.liquidCompImage = "";
    localStorage.liquidPrice= 0;
}


if(!localStorage.extraName){
    localStorage.extraName= "No Extras Chosen Yet";
    localStorage.extraCompImage = "";
    localStorage.extraPrice= 0;


if(!localStorage.powderName){
    localStorage.powderName= "No Powder Chosen Yet";
    localStorage.powderCompImage = "";
    localStorage.powderPrice= 0;
}
}

//FUNCTION DEFINTIONS
/**
 * This method adds Berry Blend info to cart
 */const choseBerry = () => {
     //store user's choices in Web storage
     localStorage.flavorName = "Berry Blend";
    //  sessionStorage.flavorImage = "img/Berryjar.png"
     localStorage.flavorPrice= 2.99;
     localStorage.flavorCompImage= '<img src="img/composite/Berry-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseBerry

 /**
 * This method adds Super Greens Blend info to cart
 */const choseSuperGreens = () => {
     //store user's choices in Web storage
     localStorage.flavorName = "Super Greens Blend ";
    //  sessionStorage.flavorImage = "img/SuperGreensJar.png"
     localStorage.flavorPrice= 3.99;
     localStorage.flavorCompImage= '<img src="img/composite/Super-Greens-Jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseSuperGreens

  /**
 * This method adds Tropical Blend info to cart
 */const choseTropical = () => {
     //store user's choices in Web storage
     localStorage.flavorName = "Tropical Blend";
    //  sessionStorage.flavorImage = "img/TropicalJar.png"
     localStorage.flavorPrice= 2.99;
     localStorage.flavorCompImage= '<img src="img/composite/Tropical-Jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseTropical


   /**
 * This method adds Spring water info to cart
 */const choseWater= () => {
     //store user's choices in Web storage
     localStorage.liquidName = "Spring Water";
     localStorage.liquidPrice= 1.00;
     localStorage.liquidCompImage= '<img src="img/composite/Water-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseWater
  /**
 * This method adds Pom Juice info to cart
 */const chosePom = () => {
     //store user's choices in Web storage
     localStorage.liquidName = "Pomegranate Juice";
     localStorage.liquidPrice= 1.99;
     localStorage.liquidCompImage= '<img src="img/composite/Pom-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function chosePom

   /**
 * This method adds Orange Juice info to cart
 */const choseOrange = () => {
     //store user's choices in Web storage
     localStorage.liquidName = "Orange Juice";
    
     localStorage.liquidPrice= 1.35;
     localStorage.liquidCompImage= '<img src="img/composite/Orange-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseOrange 

   /**
 * This method adds golden berries  info to cart
 */const choseGolden= () => {
     //store user's choices in Web storage
     localStorage.extraName = "Golden Berries";
     localStorage.extraPrice= 1.99;
     localStorage.extraCompImage= '<img src="img/composite/Golden-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseGolden
  /**
 * This method adds Dragon info to cart
 */const choseDragon = () => {
     //store user's choices in Web storage
     localStorage.extraName = "Dragon Fruit";
     localStorage.extraPrice= 1.99;
     localStorage.extraCompImage= '<img src="img/composite/Dragon-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseDragon

   /**
 * This method adds Banana info to cart
 */const choseBanana = () => {
     //store user's choices in Web storage
     localStorage.extraName = "Banana";
    
     localStorage.extraPrice= 1.00;
     localStorage.extraCompImage= '<img src="img/composite/Banana-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseBanana
   /**
 * This method adds Turmeric info to cart
 */const choseTurmeric= () => {
     //store user's choices in Web storage
     localStorage.powderName = "Turmeric Powder";
     localStorage.powderPrice= .50;
     localStorage.powderCompImage= '<img src="img/composite/Turmeric-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseTurmeric
  /**
 * This method adds Ginger info to cart
 */const choseGinger = () => {
     //store user's choices in Web storage
     localStorage.powderName = "Ginger Powder";
     localStorage.powderPrice= .50;
     localStorage.powderCompImage= '<img src="img/composite/Ginger-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseGinger

   /**
 * This method adds Blue Spirulina info to cart
 */const choseBlue = () => {
     //store user's choices in Web storage
     localStorage.powderName = "Blue Spirulina";
    
     localStorage.powderPrice= .50;
     localStorage.powderCompImage= '<img src="img/composite/Spirulina-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseBlue

 /** 
  * this method returns the total of itemized prices in the cart
  * @return floating point number
  */
 const getCartTotal = () =>{
     //convert each items price to a number and rout it to 2 dec places
     let fPrice = Number(localStorage.flavorPrice).toFixed(2);
     let lPrice = Number(localStorage.liquidPrice).toFixed(2);
     
     let ePrice = Number(localStorage.extraPrice).toFixed(2);
     let pPrice = Number(localStorage.powderPrice).toFixed(2);
     
     //add the price vars and store in a new var
     let totalPrice = Number(fPrice)+ Number(lPrice)+ Number(ePrice)+ Number(pPrice);
 
     //round total to 2 places and send it back to where function was called
     return totalPrice.toFixed(2)
 }
 
 

 const updateCart=() => {
     //put proper text from var's into flavor area of cart
     document.querySelector("#cart-flavor-name").innerHTML = sessionStorage.flavorName;
   
     document.querySelector("#cart-flavor-price").innerHTML= "$" + Number(sessionStorage.flavorPrice).toFixed(2);
     document.querySelector("#comp-flavor-layer").innerHTML= sessionStorage.flavorCompImage;
     //put proper text from var's into liquid area of cart
     document.querySelector("#cart-liquid-name").innerHTML = sessionStorage.liquidName;
    
     document.querySelector("#cart-liquid-price").innerHTML= "$" + Number(sessionStorage.liquidPrice).toFixed(2);
     document.querySelector("#comp-liquid-layer").innerHTML= sessionStorage.liquidCompImage;
    //put proper text from var's into extra area of cart
    document.querySelector("#cart-extra-name").innerHTML = sessionStorage.extraName;
    
     document.querySelector("#cart-extra-price").innerHTML= "$" + Number(sessionStorage.extraPrice).toFixed(2);
     document.querySelector("#comp-extra-layer").innerHTML= sessionStorage.extraCompImage;
             //put proper text from var's into pwoder area of cart
    document.querySelector("#cart-powder-name").innerHTML = sessionStorage.powderName;
    
     document.querySelector("#cart-powder-price").innerHTML= "$" +  Number(sessionStorage.powderPrice).toFixed(2);
     document.querySelector("#comp-powder-layer").innerHTML= sessionStorage.powderCompImage;
     
    document.querySelector("#cart-total").innerHTML = "Total: $" + getCartTotal();

 }//end function updateCart

 