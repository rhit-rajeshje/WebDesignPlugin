penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.theme}`);

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
    buttonBoard.insertChild(0, buttonText);}
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
    buttonBoard2.insertChild(0, buttonText2);}
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

  if(message.get("data-version")=="4"){
    const homeBar = penpot.createRectangle();
    homeBar.x = penpot.viewport.center.x;
    homeBar.y = penpot.viewport.center.y;
    homeBar.resize(width,height); //(2200,200)
    homeBar.fills = [{fillColor: fillColor}];
    homeBar.name = "Navigation Bar";

    const menu = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>');
    if(menu){
      menu.resize(width/13.75,height/1.25);
      menu.x = penpot.viewport.center.x+width/73.33;
      menu.y = penpot.viewport.center.y+height/10;
      menu.name = "Menu";
    }

    const logo = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#b2b4b3" class="bi bi-gitlab" viewBox="0 0 16 16"><path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/></svg>');
    if(logo){
      logo.resize(width/27.5,height/2.5);
      logo.x = penpot.viewport.center.x+width/10;
      logo.y = penpot.viewport.center.y+height/3.33;
      logo.name = "Filler Logo (Replace with Company Logo if applicable)";
    }

    const title = penpot.createText("[Insert Company Name]");
    if(title){
      title.x = penpot.viewport.center.x+width/6.76;
      title.y = penpot.viewport.center.y+height/3.077;
      title.fontSize = String(width/40);
      title.fills = [{fillColor: textColor}];
      title.fontFamily = "Sour Gummy";
      title.name = "Filler Title (Replace with Company name if applicable)";
    }

    var iconsSelected = [];
    if(iconListNames){
      for(let i=0;i<iconListNames.length;i++){
        if(iconListNames[i]==="add"){
          const add = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/> </svg>');
          if(add){
          add.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          add.y = penpot.viewport.center.y+height/4.44;
          add.resize(width/20.95,height/1.9);
          add.name = "Plus Icon";
          iconsSelected.push(add);
        }
        }
        else if(iconListNames[i]==="home"){
          const home = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg>');
          if(home){
          home.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          home.y = penpot.viewport.center.y+height/4.44;
          home.resize(width/20.95,height/1.9);
          home.name = "Home Icon";
          iconsSelected.push(home);
        }
        }
        else if(iconListNames[i]==="camera"){
          const camera = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-camera-fill" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/></svg>');
          if(camera){
          camera.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          camera.y = penpot.viewport.center.y+height/4.44;
          camera.resize(width/20.95,height/1.9);
          camera.name = "Camera Icon";
          iconsSelected.push(camera);
        }
        }
        else if(iconListNames[i]==="files"){
          const files = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-folder" viewBox="0 0 16 16"><path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/></svg>');
          if(files){
          files.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          files.y = penpot.viewport.center.y+height/4.44;
          files.resize(width/20.95,height/1.9);
          files.name = "Files Icon";
          iconsSelected.push(files);
        }
        }
        else if(iconListNames[i]==="profile"){
          const profile = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>');
          if(profile){
          profile.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          profile.y = penpot.viewport.center.y+height/4.44;
          profile.resize(width/20.95,height/1.9);
          profile.name = "Profile Icon";
          iconsSelected.push(profile);
        }
        }
        else if(iconListNames[i]==="search"){
          const search = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>');
          if(search){
          search.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          search.y = penpot.viewport.center.y+height/4.44;
          search.resize(width/20.95,height/1.9);
          search.name = "Search Icon";
          iconsSelected.push(search);
        }
        }
        else if(iconListNames[i]==="logout"){
          const logout = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666666" class="bi bi-box-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/></svg>');
          if(logout){
          logout.x = penpot.viewport.center.x + width/1.06 - (width/14.66)*i;
          logout.y = penpot.viewport.center.y+height/4.44;
          logout.resize(width/20.95,height/1.9);
          logout.name = "Logout Icon";
          iconsSelected.push(logout);
        } 
        }
      }
    }
    penpot.selection = iconsSelected;
    const iconGroup = penpot.group(penpot.selection);
    if(iconGroup && title && menu && logo){
      iconGroup.name = "Icon Group";
      penpot.selection = [iconGroup, title,menu,logo,homeBar];
      const navBar = penpot.group(penpot.selection);
      if(navBar){
        navBar.name = "Navigation Bar Style 1";
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
