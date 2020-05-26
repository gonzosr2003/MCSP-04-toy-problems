// I will give you a string. 
// You respond with "VALID" if the string meets the requirements 
    // or "INVALID" if it does not.
// Passwords must abide by the following requirements:
    // More than 3 characters but less than 20.
    // Must contain only alphanumeric characters.
    // Must contain letters and numbers.
    
let pass = 'password';
let fail = 'n!';

const lowerAlphabet= [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
const upperAlphabet= [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
const numbers= [0,1,2,3,4,5,6,7,8,9];

const passCheck = (str) => {
    // put into array using split
    let copy = str.split();
    // iterate thru str
    for (let i = 0; i < copy.length; i++) {
        let currentIndex = copy[i];    
    }
    if(currentIndex.includes(lowerAlphabet) && currentIndex.includes(lowerAlphabet) && currentIndex.includes(numbers))
    // check if str length greater then or equal to 3
    // check if str length less than or equal to 20
    // if str has anything but number or str
        // 
}
console.log(passCheck(pass));
// I - string
// O - valid / invalid
// C - password requirements
// E - 
// pass