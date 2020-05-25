function myFunction(){
    const input = document.getElementById("myText").value;
    $.get( '/perspective',{text:input}, function(data) {       
        let result = data*100
        console.log(result);
           if (result < 3){
            $(".circlez").prop('id', 'circleA');
         } else if (result < 6) {
            $(".circlez").prop('id', 'circleB'); 
         } else if (result < 9) {
            $(".circlez").attr('id', 'circleC'); 
         } else if (result < 12) {
            $(".circlez").attr('id', 'circleD'); 
         }  else if (result < 89) {
            $(".circlez").attr('id', 'circleE'); 
         }else if (result < 91) {
            $(".circlez").attr('id', 'circleF'); 
         } else if (result < 94) {
            $(".circlez").attr('id', 'circleG'); 
         } else if (result < 97) {
            $(".circlez").attr('id', 'circleH'); 
         } else if (result < 100.1) {
           $(".circlez").attr('id', 'circleI'); 
         }  else {
            $(".circlez").attr('id', 'circle'); 
        }
    });
}
