document.addEventListener('DOMContentLoaded', () => {

    let arr = [];
    let first = document.querySelector('.circle-1');
    let second = document.querySelector('.circle-2');
    let third = document.querySelector('.circle-3');
    let fourth = document.querySelector('.circle-4');
    let info = document.querySelector('.info') ;
    let bars = document.querySelectorAll('.bars');
    arr.splice(0, 0, first, second, third, fourth);
    let count = 0;
    for (let i = 1; count < bars.length; i = i + 2) {
        arr.splice(i, 0, bars[count]);
        count++;
    }
    let currInd = 0;
    let value = [1,0,2,0,3,0,4] ;
    let details = [ 'Add contact details for further communiations.' ,'' , 'Add shipping address for successful delivery.' ,'' , 'Complete Payment to complete the order' ,'' , 'Ready to get deliverd!' , 'order delivered successfully &#127881;'] ;
    let prev = document.querySelector('.prevbtn');
    let next = document.querySelector('.nxtbtn');

    prev.style.opacity = "0.5";

    next.addEventListener('click', () => {
        if (currInd == arr.length - 1) {
            info.innerHTML = details[ currInd + 1 ] ;
            arr[ currInd ].classList.add('afterChange') ;            
            arr[currInd].innerHTML = "&check;"
            next.style.opacity = "0.5";
        }
        else if (currInd < arr.length) {
            arr[ currInd ].classList.add('afterChange') ;
            arr[currInd].innerHTML = "&check;"
            currInd++;
            arr[currInd].style.borderColor = "green";
            currInd++;
            info.innerText = details[ currInd ] ;
            arr[ currInd ].classList.add('onHold') ;
            prev.style.opacity = "1";
            if( currInd == arr.length - 1 ) {
                next.innerHTML = "Finish";
            }
        }
    })
    let finalValue = 0 ;
    prev.addEventListener('click' , () => {
        if( currInd == arr.length - 1 && finalValue == 0 ) {
          arr[ currInd ].classList.remove( 'afterChange');
          arr[ currInd ].innerHTML = value[ currInd ] ;
          finalValue = 1 ; 
          next.innerHTML = "next" ;
          next.style.opacity = "1" ;
        }  
        else if( currInd == 0 ) {
           prev.style.opacity = "0.5" ;
           prev.style.disable = true ;
         }
         else if( currInd > 0 ) {
            arr[currInd ].classList.remove( 'afterChange' , 'onHold') ;
            arr[ currInd ].innerHTML = value[currInd] ;
            currInd--;
            arr[ currInd ].style.borderColor ="black" ;
            currInd--;
            arr[ currInd ].classList.remove('afterChange') ;
            arr[ currInd ].innerHTML = value[currInd] ;
            info.innerHTML = details[ currInd ] ;
            if( currInd == 0) {
                prev.style.opacity = '0.5' ;
            }
            finalValue = 0 ;
         }
    })
















})