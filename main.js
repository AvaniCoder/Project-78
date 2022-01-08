var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Me.jpeg", "Mother.jpeg" , "Father.jpeg", "Grandmother.jpeg", "Grandfather.jpeg"];
var names = ["Fmaily Book","Avani Kakirde", "Mother", "Father", "Grandmother", "Grandfather"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = [images];
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
