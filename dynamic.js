function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basic);
  career(data.career);
  education(data.education);
  skills(data.skills);
})



var main=document.querySelector(".main");
var left=document.querySelector(".left");
var right=document.querySelector(".right");

function profile(pro){
var img=document.createElement("img");
img.src=pro.img;
left.append(img);
main.append(left);
 var head=document.createElement('h2');
 head.textContent=pro.name;
 left.append(head);
 main.append(left);
 var hr=document.createElement('hr');
 left.append(hr);
 var head1=document.createElement("email");
 head1.textContent=pro.email;
 left.append(head1);
 main.append(left);

}
function career(c){
  var rh=document.createElement("h1");
  rh.textContent="Resume Builder";
  right.append(rh);
  var hh=document.createElement('hr');
  right.append(hh);
  var rh1=document.createElement("h2");
  rh1.textContent="Career Objectives";
  right.append(rh1);
  var rh2=document.createElement("info");
  rh2.textContent=c.info;
  right.append(rh2);


}
function education(edu){
  var ed=document.createElement("h2");
  ed.textContent="Educational details";
  right.append(ed);
  var ed1=document.createElement('hr');
  right.append(ed1);

  var table=document.createElement('table');
  let row='';
  row += "<tr>"+"<th>"+"sno  " +"</th>"+
  "<th>"+"degree  " +"</th>"+
  "<th>"+"institute  " +"</th>"+
  "<th>"+"per " +"</th>"+
    "</tr>";
  for(i in edu){
  row += "<tr>"+"<td>"+edu[i].sno +"</td>"+
  "<td>"+edu[i].degree+"</td>"+
  "<td>"+edu[i].institute+"</td>"+
  "<td>"+edu[i].per +"</td>"+
  "</tr>";

}

table.innerHTML=row;
right.append(table);
main.append(right);
}
function skills(l){
  var hh=document.createElement("h2");
  hh.textContent="skills set";
  right.append(hh);
  var ul=document.createElement(ul);
  right.append(ul);
  for(i in l){
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);
  }
}
