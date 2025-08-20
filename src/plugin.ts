import {button1, button2} from './button.ts';
import {circlePageNav, dropdown, pageNav} from './dropdown.ts';
import { nav1, nav2, nav3 } from './nav.ts';
import { calender } from './calender.ts';
import { addressDetails, employeeInfo, paymentDetails } from './form.ts';
import { cardDisplay, infoTile, testimonial, cardDisplay2 } from './display.ts';
import { checkBoxes, radioList } from './itemList.ts';
import { carouselCards, pageSelection, pageSelection2 } from './carousel.ts';
import { chartBarHorizontal, chartBarVertical, lineChart } from './chart.ts';

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
  const xTitle = message.get("data-xtitle");
  const yTitle = message.get("data-ytitle");
  const xData = message.get("data-xdata")?.split(",");
  const yData = message.get("data-ydata")?.split(",").reverse();

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
  if(message.get("data-version")=="19"){
    if(fillColor&&iconColor&&textColor&&iconListNames){
      nav3(width,height,fillColor,iconColor,textColor,iconListNames);
    }
  }
  if(message.get("data-version")=="20"){
    if(fillColor&&iconColor&&textColor){
      pageSelection2(width,fillColor,iconColor,textColor,items);
    }
  }
  if(message.get("data-version")=="21"){
    if(fillColor&&iconColor&&textColor){
      cardDisplay2(width,height,fillColor,iconColor,textColor,items);
      }
  }
  if(message.get("data-version")=="22"){
    if(fillColor&&iconColor&&textColor && xTitle && xData && yTitle && yData){
      chartBarHorizontal(fillColor,iconColor,textColor,xTitle,xData,yTitle,yData);
      }
  }
  if(message.get("data-version")=="23"){
    if(fillColor&&iconColor&&textColor && xTitle && xData && yTitle && yData){
      chartBarVertical(fillColor,iconColor,textColor,xTitle,xData,yTitle,yData);
      }
  }
  if(message.get("data-version")=="24"){
    // if(fillColor&&iconColor&&textColor && xTitle && xData && yTitle && yData){
    //   lineChart(fillColor,iconColor,textColor,xTitle,xData,yTitle,yData);
    //   }

    const cardBox = penpot.createRectangle();
    cardBox.x = penpot.viewport.center.x;
    cardBox.y = penpot.viewport.center.y;
    cardBox.resize(580,540);
    cardBox.borderRadius = 50;
    cardBox.fills = [{fillColor:fillColor}];

    const circle  = penpot.createEllipse();
    circle.x = penpot.viewport.center.x + 180;
    circle.y = penpot.viewport.center.y - 115;
    circle.fills = [{fillColor:fillColor}];
    circle.resize(225,235);
    const iconColorString = "'"+iconColor+"'";

    const profile = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>');
    if(profile){
      profile.x = penpot.viewport.center.x + 205;
      profile.y = penpot.viewport.center.y - 85;
      profile.resize(175,175);
    }

    const paragraph = penpot.createText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
    if(paragraph){
      paragraph.x = penpot.viewport.center.x + 60;
      paragraph.y = penpot.viewport.center.y + 135;
      paragraph.resize(480,310);
      paragraph.fontSize = '27';
      paragraph.fontFamily = 'Sour Gummy';
      paragraph.align = "center";
    }

    for(let i=0;i<5;i++){
      const star = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>');
      if(star){
        star.x = penpot.viewport.center.x + 65 + 95*i;
        star.y = penpot.viewport.center.y + 395;
        star.resize(85,85);
      }
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
