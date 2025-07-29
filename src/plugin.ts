penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);

penpot.ui.onMessage<Map<string,string>>((message) => {
  console.log("plugin");
  const width = Number(message.get("data-width"));
  const height = Number(message.get("data-height"));
  const borderRadius = Number(message.get("data-borderRadius"));
  const fillColor = message.get("data-fillColor");
  const iconColor = message.get("data-iconColor");
  const items = Number(message.get("data-items"));
  console.log(items);
  if (message.get("data-version")=="1") {
    const buttonBoard = penpot.createBoard();
    buttonBoard.resize(width,height);
    buttonBoard.x = penpot.viewport.center.x;
    buttonBoard.y = penpot.viewport.center.y;
    buttonBoard.borderRadius = borderRadius;

    const button = penpot.createRectangle();
    button.resize(width,height);
    button.x = penpot.viewport.center.x;
    button.y = penpot.viewport.center.y;
    button.borderRadius = borderRadius;
    button.strokes = [{strokeColor: fillColor, strokeWidth: 15}]
    button.fills = [{fillColor: iconColor}]
   
    const buttonText = penpot.createText("Button");
    if(buttonText){
    buttonText.x = penpot.viewport.center.x+35;
    buttonText.y = penpot.viewport.center.y+23;
    buttonText.fontSize= '45';
    buttonText.fontFamily = 'Sour Gummy';
    buttonText.fills = [{fillColor: fillColor}];
    buttonBoard.insertChild(0, buttonText);
  }
    buttonBoard.insertChild(0, button);
  
    const buttonBoard2 = penpot.createBoard();
    buttonBoard2.resize(width,height);
    buttonBoard2.x = penpot.viewport.center.x;
    buttonBoard2.y = penpot.viewport.center.y;
    buttonBoard2.borderRadius = borderRadius;

    const button2 = penpot.createRectangle();
    button2.resize(width,height);
    button2.x = penpot.viewport.center.x;
    button2.y = penpot.viewport.center.y;
    button2.borderRadius = borderRadius;
    button2.fills = [{fillColor: fillColor}]

    const buttonText2 = penpot.createText("Button");
    if(buttonText2){
    buttonText2.x = penpot.viewport.center.x+35;
    buttonText2.y = penpot.viewport.center.y+23;
    buttonText2.fontSize= '45';
    buttonText2.fontFamily = 'Sour Gummy';
    buttonText2.fills = [{fillColor: iconColor}];
    buttonBoard2.insertChild(0, buttonText2);
    }
    buttonBoard2.insertChild(0, button2);
    buttonBoard2.addInteraction('mouse-enter', {type: 'navigate-to', destination: buttonBoard});
    buttonBoard.addInteraction('mouse-leave', {type: 'navigate-to', destination: buttonBoard2});

    penpot.selection = [buttonBoard, buttonBoard2];
    const buttonStyle1 = penpot.group(penpot.selection);
    if(buttonStyle1){
      buttonStyle1.name = "Button Style 1";
    }
  }

  if(message.get("data-version")=="2"){
    const circleBoard = penpot.createBoard();
    circleBoard.x = penpot.viewport.center.x;
    circleBoard.y = penpot.viewport.center.y;
    circleBoard.borderRadius = borderRadius;
    circleBoard.resize(width,height);
    circleBoard.name = "Button (Hovered)";

    const circle = penpot.createRectangle();
    circle.x = penpot.viewport.center.x;
    circle.y = penpot.viewport.center.y;
    circle.borderRadius = borderRadius;
    circle.resize(width,height);
    circle.fills = [{fillColor: iconColor}];
    circle.strokes = [{strokeColor: fillColor, strokeWidth: 10}]
    circle.name = "Circle (Hovered)";

    const fillColorString = "'"+fillColor+"'";
    const svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=' + fillColorString + ' class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>';
    //const arrowRight = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF8577" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>');
    const arrowRight = penpot.createShapeFromSvg(svgString);
    if(arrowRight){
    arrowRight.x = penpot.viewport.center.x+width/4;
    arrowRight.y = penpot.viewport.center.y+height/5;
    arrowRight.resize(width/2,60);
    circleBoard.insertChild(0,arrowRight);   
    arrowRight.name = "Arrow (Hovered)";
    }
    circleBoard.insertChild(0,circle);

    const circleBoard2 = penpot.createBoard();
    circleBoard2.x = penpot.viewport.center.x;
    circleBoard2.y = penpot.viewport.center.y;
    circleBoard2.borderRadius = borderRadius;
    circleBoard2.resize(width,height);
    circleBoard2.name = "Button";
 
    const circle2 = penpot.createRectangle();
    circle2.x = penpot.viewport.center.x;
    circle2.y = penpot.viewport.center.y;
    circle2.borderRadius = borderRadius;
    circle2.resize(width,height);
    circle2.fills = [{fillColor: fillColor}];
    circle2.name = "Circle";
    
    const iconColorString = "'"+iconColor+"'";
    const svgString2 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=' + iconColorString + ' class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>';
    //const arrowRight2 = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/> </svg>');
    const arrowRight2 = penpot.createShapeFromSvg(svgString2);
    if(arrowRight2){
    arrowRight2.x = penpot.viewport.center.x+width/4;
    arrowRight2.y = penpot.viewport.center.y+height/5;
    arrowRight2.resize(width/2,60);
    circleBoard2.insertChild(0,arrowRight2);
    arrowRight2.name = "Arrow";
    }

    circleBoard2.insertChild(0,circle2);
    circleBoard2.addInteraction('mouse-enter', {type: 'navigate-to', destination: circleBoard});
    circleBoard.addInteraction('mouse-leave', {type: 'navigate-to', destination: circleBoard2});

    penpot.selection = [circleBoard,circleBoard2];
    const buttonStyle2 = penpot.group(penpot.selection);
    if(buttonStyle2){
      buttonStyle2.name = "Button Style 2";
    }
  }

  if(message.get("data-version")=="3"){
    const rect2 = penpot.createRectangle();
    rect2.x = penpot.viewport.center.x+width/.643;
    rect2.y = penpot.viewport.center.y+width/2.368;
    rect2.resize(width,(items*width/4.5)-width/45);
    rect2.borderRadius = width/22.5;
    rect2.fills = [{fillColor: fillColor}];
    rect2.name = "Dropdown Box (Open)";

    const rectBoard2 = penpot.createBoard();
    rectBoard2.x = penpot.viewport.center.x+width/.643;
    rectBoard2.y = penpot.viewport.center.y;
    rectBoard2.resize(width,(items+1)*(width/4.5)+(width/5.625));
    rectBoard2.borderRadius = width/22.5;
    rectBoard2.fills = [{fillColor: "#000000", fillOpacity: 0}];
    rectBoard2.name = "Dropdown (Open)";

    const title2 = penpot.createText("Dropdown");
    if(title2){
      title2.x = penpot.viewport.center.x+width/.6122;
      title2.y = penpot.viewport.center.y+width/10;
      title2.fontSize = String(width/10);
      title2.fontFamily = 'Sour Gummy';
      title2.name = "Dropdown";
      rectBoard2.insertChild(0,title2);
    }

    const rect3 = penpot.createRectangle();
    rect3.x = penpot.viewport.center.x+width/.643;
    rect3.y = penpot.viewport.center.y;
    rect3.resize(width,width/3);
    rect3.borderRadius = width/22.5;
    rect3.fills = [{fillColor: fillColor}];
    rect3.name = "Dropdown Selector Box";

    const arrowUp = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>');
    if(arrowUp){
      arrowUp.x = penpot.viewport.center.x + width/.42;
      arrowUp.y = penpot.viewport.center.y + width/9;
      arrowUp.resize(width/9,width/9); 
      arrowUp.name = "Arrow";
      rectBoard2.insertChild(0,arrowUp);
    }
    
    const selectionList = [];
    for(let i=0; i<(Math.floor(items/2));i++){
      const itemSlot = penpot.createRectangle();
      itemSlot.x = penpot.viewport.center.x+width/.643;
      itemSlot.y = penpot.viewport.center.y+width/1.55+(width/2.25)*i;
      itemSlot.resize(width,width/4.5);
      itemSlot.fills = [{fillColor: iconColor, fillOpacity: .20 }];
      itemSlot.name = "Item";
      const text = penpot.createText("Item"+(i*2));
      const text2 = penpot.createText("Item"+(i*2+1));
      if(text && text2){
      text.x = penpot.viewport.center.x+width/.6122;
      text.y = penpot.viewport.center.y+width/2.045+((width/2.3)*i);
      text.fontSize = String(width/10);
      text.fontFamily = 'Sour Gummy';
      text.name = "Item Text";

      text2.x = penpot.viewport.center.x+width/.6122;
      text2.y = penpot.viewport.center.y+width/1.45+((width/2.3)*i);
      text2.fontSize = String(width/10);
      text2.fontFamily = 'Sour Gummy';
      text2.name = "Item Text";
      penpot.selection = [text,text2,itemSlot];
      const choice = penpot.group(penpot.selection);
      if(choice){ 
      choice.name = "Choice Group"; 
      selectionList.push(choice);
      }
      }
    }
    if(items/2!=0){
      const text3 = penpot.createText("Item" + (items-1));
      if(text3){
      text3.x = penpot.viewport.center.x+width/.6122;
      text3.y = penpot.viewport.center.y+width/1.45+((width/2.3)*((items/2)-1));
      text3.fontSize = String(width/10);
      text3.fontFamily = 'Sour Gummy';
      text3.name = "Item Text";
      rectBoard2.insertChild(0,text3);
      }
      
    }
    penpot.selection = selectionList;
    const choiceGroup = penpot.group(penpot.selection);
    if(choiceGroup){
    choiceGroup.name = "Choice Selections";
    rectBoard2.insertChild(0,choiceGroup);
    rectBoard2.insertChild(0,rect2);
    rectBoard2.insertChild(0,rect3);
  }

    const rectBoard = penpot.createBoard();
    rectBoard.x = penpot.viewport.center.x;
    rectBoard.y = penpot.viewport.center.y;
    rectBoard.resize(width,width/.511);
    rectBoard.borderRadius = width/22.5;
    rectBoard.fills = [{fillColor: "#000000", fillOpacity: 0}];
    rectBoard.name = "Dropdown";

    const rect = penpot.createRectangle();
    rect.x = penpot.viewport.center.x;
    rect.y = penpot.viewport.center.y;
    rect.resize(width,width/3);
    rect.borderRadius = width/22.5;
    rect.fills = [{fillColor: fillColor}];
    rect.name = "Dropdown Box";

     const title = penpot.createText("Dropdown");
    if(title){
      title.x = penpot.viewport.center.x+width/12.85;
      title.y = penpot.viewport.center.y+width/10;
      title.fontSize = String(width/10);
      title.fontFamily = 'Sour Gummy';
      rectBoard.insertChild(0,title);
      title.name = "Dropdown";
    } 

    const arrowDown = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>');
    if(arrowDown){
      arrowDown.x = penpot.viewport.center.x + width/1.216;
      arrowDown.y = penpot.viewport.center.y + width/9;
      arrowDown.resize(width/9,width/9);
      arrowDown.name = "Arrow";
      rectBoard.insertChild(0,arrowDown);
    }
    rectBoard.insertChild(0,rect);
    rectBoard.addInteraction('click', {type:'navigate-to', destination: rectBoard2});
    rectBoard2.addInteraction('click', {type:'navigate-to', destination: rectBoard});

    penpot.selection = [rectBoard,rectBoard2];
    const dropdownGroup = penpot.group(penpot.selection);
    if(dropdownGroup){
      dropdownGroup.name = "Dropdown";
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
