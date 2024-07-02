// ================================== svg animation ==========================
/* what is the svg ?
    ans: ata akta HTML tag / i mean i can say it's like a container.
        arvitore onek rokomer shape thek jemon , curcel, regtangular and path
        to ai path guloke change kore svg ar desing ta change korte pari.


        svg onek type ar hoi :
        bezier curve : 
           1. cubic.     (multyple desing ar svg hoi)
           2.quadratic.  (simple shaper ar svg hoi )
*/

/*       simple structure of svg:  
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>

1.width and height : svg container ar width height koto hobe.
2.xmlns: ai tar apadoto dorkar nai .
3.path: path hoto container ar item / shape / content ta holo path diye make korte hoi.
                3.1:stroke: item / shape / element ar color ta ki hobe. // stroke color
                3.2: fill: background color. 
*/



//  ------- amra shikbo quadratic svg -------
/* quadratic svg : atake 3ta point diye make kora hoi start, center, end.

<path d="M 10 80 Q 52 10  95 80" stroke="black" fill="transparent"/>

path ar d attribute ke bola hoi basic spaes d="":
    1.M mane holo je (move to point) kon bindu / point shape / browing ta start hobe
         ar duyta value 2ta . frist X value, Y value -->[starting point];
    
    2.Q/C amra jodi quadrating type ar shape make korte chai tobe Q ar cubic hole C use korbo
        Q: ar value 4ta 
            2.1: ar frist 2ta value canter point , last 2ta end point niddesh kore.
               Q 52 10   95 80 // ader 1st value X , 2nd value y


   

*/