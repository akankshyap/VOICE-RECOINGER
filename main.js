function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XXjWZKVGm/model.json',modelReady);


}

function modelReady(){
    classifier.classify(gotResults);

}

function gotResults(error,results) {
    if(error)
{
console.error(error);
    }
    else{
        console.log(results);
        
        document.getElementById("result_label") .innerHTML = 'i can hear -'+
        results[0]. label;
        
        
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


         

         
         if (results[0].label=="bark"){
             img.src = 'https://i.gifer.com/HpkC.gif';
            
             

         }
         else 
         if (results[0].label=="roar"){
            img.src = 'https://acegif.com/wp-content/uploads/2020/07/lion-roar.gif';
            
            

        }
        else 
         if (results[0].label=="meow"){
            img.src = 'https://c.tenor.com/iDFvR7a8JiMAAAAM/cat-cat-meow.gif';
            
             
        }
        else 
          {
            img.src = 'data:image/jpeg;base64,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';  

           

        }
    }

}