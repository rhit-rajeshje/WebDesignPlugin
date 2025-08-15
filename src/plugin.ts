import {button1, button2} from './button.ts';
import {circlePageNav, dropdown, pageNav} from './dropdown.ts';
import { nav1, nav2 } from './nav.ts';
import { calender } from './calender.ts';
import { addressDetails, employeeInfo, paymentDetails } from './form.ts';
import { cardDisplay, infoTile, testimonial } from './display.ts';
import { checkBoxes, radioList } from './itemList.ts';
import { carouselCards, pageSelection } from './carousel.ts';

penpot.ui.open("Website Components Plugin", `?theme=${penpot.theme}`);

penpot.ui.onMessage<Map<string,string>>((message) => {
  console.log("plugin");
  const width = Number(message.get("data-width"));
  const height = Number(message.get("data-height"));
  const borderRadius = Number(message.get("data-borderRadius"));
  const fillColor = message.get("data-fillColor");
  const iconColor = message.get("data-iconColor");
  const textColor = message.get("data-textColor");
  const items = Number(message.get("data-items"));
  const iconListNames = message.get("data-icons")?.split(",").reverse();
  console.log(iconListNames);
  console.log(items);
  if (message.get("data-version")=="1") {
    if(fillColor && iconColor){
      button1(width,height,borderRadius,fillColor,iconColor);
      }
  }
  if(message.get("data-version")=="2"){
     if(fillColor && iconColor){
      button2(width,height,borderRadius,fillColor,iconColor);
    }
  }

  if(message.get("data-version")=="3"){
    if(fillColor && iconColor){
      dropdown(width,fillColor,iconColor,items);
    }
  }

  if(message.get("data-version")=="4"){
    if(fillColor && iconColor && textColor && iconListNames){
      nav1(width,height,fillColor,iconColor,textColor,iconListNames);
    }
  }

  if(message.get("data-version")=="5"){
    if(fillColor && iconColor && textColor && iconListNames){
      nav2(width,height,fillColor,iconColor,textColor,items,iconListNames);
    }
  }

  if(message.get("data-version")=="6"){
    if(fillColor && iconColor && textColor){
      calender(width,height,fillColor,iconColor,textColor); 
    }
  }

  if(message.get("data-version")=="7"){
    if(fillColor && iconColor && textColor){
      pageNav(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="8"){
    if(fillColor && iconColor && textColor){
    paymentDetails(width,height,fillColor,iconColor,textColor);
    }
  }
  if(message.get("data-version")=="9"){
    if(fillColor && iconColor && textColor){
      addressDetails(width,height,fillColor,iconColor,textColor);
    }
  }
  if(message.get("data-version")=="10"){
    if(fillColor && iconColor && textColor){
      employeeInfo(width,height,fillColor,iconColor,textColor);
    }
  }
  if(message.get("data-version")=="11"){
    if(fillColor&&iconColor&&textColor){
    cardDisplay(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="12"){
    if(fillColor&&iconColor&&textColor){
      infoTile(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="13"){
    if(fillColor&&iconColor&&textColor){
      testimonial(width,height,fillColor,iconColor,textColor);
    }
  }
  if(message.get("data-version")=="14"){
    if(fillColor&&iconColor&&textColor){
      checkBoxes(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="15"){
    if(fillColor&&iconColor&&textColor){
      radioList(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="16"){
    if(fillColor&&iconColor&&textColor){
      circlePageNav(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="17"){
    if(fillColor&&iconColor&&textColor){
      carouselCards(width,height,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="18"){
    if(fillColor&&iconColor&&textColor){
      pageSelection(width,fillColor,iconColor,textColor,items);
    }
  }

});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
