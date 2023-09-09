import { Component } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
change(){

  if($('.item').val() == ""){
    $(".layer").animate({top: "40px"},200, function(){
  $(".layer").css("display", "none");
  $(".layer").css("color", "rgb(255, 255, 255)");
    });
}else{
  $(".layer").css("display", "flex");
  $(".layer").animate({top: "0"},200, function(){
    $(".layer").css("color", "rgb(39, 190, 224)");

  });
}
}
change2(){

  if($('.item2').val() == ""){
    $(".layer2").animate({top: "40px"},200, function(){
  $(".layer2").css("display", "none");
  $(".layer2").css("color", "rgb(255, 255, 255)");
    });
}else{
  $(".layer2").css("display", "flex");
  $(".layer2").animate({top: "0"},200, function(){
    $(".layer2").css("color", "rgb(39, 190, 224)");

  });
}
}
change3(){

  if($('.item3').val() == ""){
    $(".layer3").animate({top: "40px"},200, function(){
  $(".layer3").css("display", "none");
  $(".layer3").css("color", "rgb(255, 255, 255)");
    });
}else{
  $(".layer3").css("display", "flex");
  $(".layer3").animate({top: "0"},200, function(){
    $(".layer3").css("color", "rgb(39, 190, 224)");

  });
}
}
change4(){

  if($('.item4').val() == ""){
    $(".layer4").animate({top: "40px"},200, function(){
  $(".layer4").css("display", "none");
  $(".layer4").css("color", "rgb(255, 255, 255)");
    });
}else{
  $(".layer4").css("display", "flex");
  $(".layer4").animate({top: "0"},200, function(){
    $(".layer4").css("color", "rgb(39, 190, 224)");

  });
}
}
}
