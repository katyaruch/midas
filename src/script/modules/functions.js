export function testWebP(callback) {

   const webP = new Image();


   webP.onload = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

      
}

testWebP((support) => {
   const classNameSupport =  !!support ? 'webp' : 'no-webp';
   
   document.querySelector('body').classList.add(classNameSupport);
});