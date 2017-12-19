var imageUrl = [
  "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1468549940493-46152524296c?auto=format&fit=crop&w=1904&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1494633114655-819eb91fde40?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1481973964012-59a7f3225eb1?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1497829352618-8528e15d7ce7?auto=format&fit=crop&w=1051&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1465979058110-bb2dd732b99d?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1499107136159-5bd9740c34d8?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?auto=format&fit=crop&w=1077&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1473800447596-01729482b8eb?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1468549940493-46152524296c?auto=format&fit=crop&w=1904&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1494633114655-819eb91fde40?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1502209524164-acea936639a2?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1481973964012-59a7f3225eb1?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1497829352618-8528e15d7ce7?auto=format&fit=crop&w=1051&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1465979058110-bb2dd732b99d?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1499107136159-5bd9740c34d8?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
  "https://images.unsplash.com/photo-1507187632231-5beb21a654a2?auto=format&fit=crop&w=1077&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
];

var thumbnails = document.getElementById("thumbnails");
var image = document.getElementById("image");
var left = document.getElementById("left");
var right = document.getElementById("right");

// populate thumbnails in side-menu
for(i=0;i<imageUrl.length; i++){
    var img = document.createElement("img");
    img.setAttribute("src",imageUrl[i]);
    img.setAttribute("class", "thumb-img");
    img.addEventListener("click", function(){
        src = this.getAttribute("src");
        image.style.backgroundImage = "url('"+src+"')";
    });
    thumbnails.appendChild(img);
}

left.addEventListener("click", function(){
    currentImg = currentBackground();
    for(i=0;i<imageUrl.length;i++){
        if(currentImg == imageUrl[0]){
            break;
        }
        else if(currentImg == imageUrl[i]){
            src = imageUrl[i-1];
            image.style.backgroundImage = "url('"+src+"')";
        }
    }
});

right.addEventListener("click", function(){
    currentImg = currentBackground();
    var len = imageUrl.length;
    for(i=len;i>=0;i--){
        console.log(i);
        if(currentImg == imageUrl[len-1]){
            break;
        }
        else if(currentImg == imageUrl[i]){
            src = imageUrl[i+1];
            image.style.backgroundImage = "url('"+src+"')";
        }
    }
});
// get current background image and returns it
var currentBackground = function(){
    return window.getComputedStyle(image,null).getPropertyValue("background-image").slice(5, -2);;
}
