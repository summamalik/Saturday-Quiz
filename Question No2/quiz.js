
    //  question 1
    
    
    //const rnum = Math.floor((Math.random() * 50) - 50)
        
    // for(let x = 0; x<7; x++){
    //         let unum = parseInt(prompt("Enter a number"));
    //         if(unum == rnum){
    //             alert('You Won.');
    //         }
    //         else if(unum < rnum){
    //             alert('You loose. Try a higer number');
    //         }
    //         else{
    //             alert('You loose. Try a lower number');
    //         }
    //     }
    //     alert(`${rnum}`);

// question2

    var array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
    var pstvarray = [];
    var ngtvarray = [];
    var sum = 0;
    var sub = 0;
    array.forEach(function (item) {
      if (item < 0) {
        ngtvarray.push(item);
      } else {
        pstvarray.push(item);
      }

      for (var i = 0; i < array.length; ++i) {
        if (array[i] > 0) {
          sum += array[i];
        }
      }

      for (var i = 0; i < array.length; ++i) {
        if (array[i] > 0) {
          sub -= array[i];
        }
      }
      console.log(sum);
      console.log(sub);

      console.log(pstvarray);
      console.log(ngtvarray);
    });