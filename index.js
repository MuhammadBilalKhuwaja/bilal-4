
// var Name=prompt('ENTER YOUR NAME')

// var firstLater=Name[0]

// for ( var i=0; i < Name.length;i++ ){

//     if(Name[i]==" " ){
//         console.log( Name[i+1])
//         firstLater=firstLater+ ' '+ Name[i+1]
//     }
// }

// console.log(firstLater)

// var Name=prompt('your name')

// var start=Name[0]

// for(var i=0;i<Name.length; i++){

//     if (Name[i]==" "){
//     // console.log( Name[i+1])
//     start=start+' '+ Name[i+1]

//     }
// }
// console.log(start)



// var numbers=[1,2,3,4,5,7,8,9,10]
// //  var one=[0,1,2,3,4,5,6,7,8,9,10]

//  for(var i=0; i<numbers.length; i++){



// console.log(i,numbers[i])

// if(i!==numbers[i-1]){

//     console.log('missing')
// }

// // if ( numbers[i]!== one[i] )


// // console.log('missing')



// }

//  var msg='if you have any query you can contact me on gmail'


//  for(var i=0;i < msg.length; i++){

//     console.log(msg[i])
//     // console.log(msg.slice(i,i+5))
//     // if (msg.slice(i,i+5) ==='gmail'){ alert('you can not write gmail') }

//     if(msg[i]==='g' && msg[i+1]==='m'&& msg[i+2]==='a' && msg[i+3]==='i' && msg[i+4]==='l' ) 
    
//     {
//     alert('you can not write gmail')
//     break        
// }
    
//  }

 var msg = 'this is my upwork id you can contact me there'
for (var i = 0; i < msg.length; i++) {
  console.log(msg.slice(i, i + 6))
  if (msg.slice(i, i + 6) === 'upwork') {
    alert('Please dont use letter upwork')
  }
}

 

 