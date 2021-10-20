//image array//
//forEach loop//

const ArrayOfImages = ['cup1.jpg', 'cup2.jpg', 'cup3.jpg', 'cup4.jpg'];
ArrayOfImages.forEach(function(image) {
  let img = document.createElement('img');
  img.src = image;
  img.height = "300";
  img.width = "300";
  document.getElementById("images").appendChild(img);
});
// add comment //

function fun() {
  n= document.getElementById('fullname').value;
  r= document.getElementById('review').value;
  c= document.getElementById('txt').value;

document.getElementById('comment').innerHTML+='<div onclick="$(this);" class="comment mt-4 text-justify float-left" id="myDIV"> <img src="com.png" alt="" class="rounded-circle" width="40" height="40"><h4>&nbsp;&nbsp;'+n+'</h4><span>&nbsp;-&nbsp;'+r+'</span><button onclick="Fun1()" style="float: right;">Delete</button><br><p>'+c+'</p></div>';
}

/*
function $(selector) {
const resultObject = {
hide: function () {
  selector.style.display = "none";
}
};
return resultObject;
}
*/
function $(selector) {
  
    selector.style.display = "none";
  }
  
