//Javascript Document Demo 5
//IF USER HASNT MADE CHOICES DECLARE (INITIALIZE) WEB STORAGE VARIABLE WITH DEFAULT MESSAGES:
if(!sessionStorage.flavorName){
    sessionStorage.flavorName = "No Flavor Chosen Yet";
    sessionStorage.flavorCompImage = "";
    sessionStorage.flavorPrice = 0;

}

if(!sessionStorage.liquidName){
    sessionStorage.liquidName= "No Liquid Chosen Yet";
    sessionStorage.liquidCompImage = "";
    sessionStorage.liquidPrice= 0;
}


if(!sessionStorage.extraName){
    sessionStorage.extraName= "No Extras Chosen Yet";
    sessionStorage.extraCompImage = "";
    sessionStorage.extraPrice= 0;


if(!sessionStorage.powderName){
    sessionStorage.powderName= "No Powder Chosen Yet";
    sessionStorage.powderCompImage = "";
    sessionStorage.powderPrice= 0;
}
}

//FUNCTION DEFINTIONS
/**
 * This method adds Berry Blend info to cart
 */const choseBerry = () => { 
     //store user's choices in Web storage
     sessionStorage.flavorName = "Berry Blend";
    //  sessionStorage.flavorImage = "img/Berryjar.png"
     sessionStorage.flavorPrice= 2.99;
     sessionStorage.flavorCompImage= '<img src="img/composite/Berry-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseBerry

 /**
 * This method adds Super Greens Blend info to cart
 */const choseSuperGreens = () => {
     //store user's choices in Web storage
     sessionStorage.flavorName = "Super Greens Blend ";
    //  sessionStorage.flavorImage = "img/SuperGreensJar.png"
     sessionStorage.flavorPrice= 3.99;
     sessionStorage.flavorCompImage= '<img src="img/composite/Super-Greens-Jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseSuperGreens

  /**
 * This method adds Tropical Blend info to cart
 */const choseTropical = () => {
     //store user's choices in Web storage
     sessionStorage.flavorName = "Tropical Blend";
    //  sessionStorage.flavorImage = "img/TropicalJar.png"
     sessionStorage.flavorPrice= 2.99;
     sessionStorage.flavorCompImage= '<img src="img/composite/Tropical-Jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseTropical


   /**
 * This method adds Spring water info to cart
 */const choseWater= () => {
     //store user's choices in Web storage
     sessionStorage.liquidName = "Spring Water";
     sessionStorage.liquidPrice= 1.00;
     sessionStorage.liquidCompImage= '<img src="img/composite/Water-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseWater
  /**
 * This method adds Pom Juice info to cart
 */const chosePom = () => {
     //store user's choices in Web storage
     sessionStorage.liquidName = "Pomegranate Juice";
     sessionStorage.liquidPrice= 1.99;
     sessionStorage.liquidCompImage= '<img src="img/composite/Pom-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function chosePom

   /**
 * This method adds Orange Juice info to cart
 */const choseOrange = () => {
     //store user's choices in Web storage
     sessionStorage.liquidName = "Orange Juice";
    
     sessionStorage.liquidPrice= 1.35;
     sessionStorage.liquidCompImage= '<img src="img/composite/Orange-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseOrange 

   /**
 * This method adds golden berries  info to cart
 */const choseGolden= () => {
     //store user's choices in Web storage
     sessionStorage.extraName = "Golden Berries";
     sessionStorage.extraPrice= 1.99;
     sessionStorage.extraCompImage= '<img src="img/composite/Golden-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseGolden
  /**
 * This method adds Dragon info to cart
 */const choseDragon = () => {
     //store user's choices in Web storage
     sessionStorage.extraName = "Dragon Fruit";
     sessionStorage.extraPrice= 1.99;
     sessionStorage.extraCompImage= '<img src="img/composite/Dragon-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseDragon

   /**
 * This method adds Banana info to cart
 */const choseBanana = () => {
     //store user's choices in Web storage
     sessionStorage.extraName = "Banana";
    
     sessionStorage.extraPrice= 1.00;
     sessionStorage.extraCompImage= '<img src="img/composite/Banana-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseBanana
   /**
 * This method adds Turmeric info to cart
 */const choseTurmeric= () => {
     //store user's choices in Web storage
     sessionStorage.powderName = "Turmeric Powder";
     sessionStorage.powderPrice= .50;
     sessionStorage.powderCompImage= '<img src="img/composite/Turmeric-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseTurmeric
  /**
 * This method adds Ginger info to cart
 */const choseGinger = () => {
     //store user's choices in Web storage
     sessionStorage.powderName = "Ginger Powder";
     sessionStorage.powderPrice= .50;
     sessionStorage.powderCompImage= '<img src="img/composite/Ginger-jar.png" />';
     updateCart(); //call that function right away
     
     
 }//end function choseGinger

   /**
 * This method adds Blue Spirulina info to cart
 */const choseBlue = () => {
     //store user's choices in Web storage
     sessionStorage.powderName = "Blue Spirulina";
    
     sessionStorage.powderPrice= .50;
     sessionStorage.powderCompImage= '<img src="img/composite/Spirulina-jar.png" />'
     updateCart(); //call that function right away
     
     
 }//end function choseBlue

 /** 
  * this method returns the total of itemized prices in the cart
  * @return floating point number
  */
 const getCartTotal = () =>{
     //convert each items price to a number and rout it to 2 dec places
     let fPrice = Number(sessionStorage.flavorPrice).toFixed(2);
     let lPrice = Number(sessionStorage.liquidPrice).toFixed(2);
     
     let ePrice = Number(sessionStorage.extraPrice).toFixed(2);
     let pPrice = Number(sessionStorage.powderPrice).toFixed(2);
     
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

 