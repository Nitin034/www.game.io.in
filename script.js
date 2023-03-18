function changeImage(fileName){
    let img = document.querySelector("#irimg");
    img.setAttribute("src", fileName);
}


		const Iron = document.getElementById("ironman");
		const Thor = document.getElementById("tthor");
		const Caption= document.getElementById("america");
		const result2 = document.getElementById("result2");

		 
            const user = ["Iron ", "Thor", "Caption " ]
            let botI = Math.floor(Math.random() * 3);
            let bot = ["Iron ", "Thor", "Caption " ][botI]
             
            
            const match = (bot, user)=>{
                if(bot === user){
                    return "Nobody. Match is tied"
                }
                else if(bot === "Iron" && user==="Thor"){
                    return "user"
                }
                else if(bot === "Iron" && user==="Caption"){
                    return "bot"
                }
                else if(bot === "Caption" && user==="Thor"){
                    return "user"
                }
                else if(bot === "Caption" && user==="Iron"){
                    return "user"
                }
                else if(bot === "Thor" && user==="Iron"){
                    return "bot"
                }
                else if(bot === "Thor" && user==="Caption"){
                    return "bot"
                }
            
            }
            let result = match(bot, user)
			result2.innerHTML = `You chose ${user}, computer chose ${bot}`;
	 
 