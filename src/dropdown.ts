export function dropdown(width:number, fillColor:string, iconColor:string,items:number){
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

export function pageNav(width:number, height:number, fillColor:string, iconColor:string, textColor:string, items:number){
    const arrowSquare = penpot.createRectangle();
    arrowSquare.x = penpot.viewport.center.x;
    arrowSquare.y = penpot.viewport.center.y;
    arrowSquare.resize(width,height); //(100,100)
    arrowSquare.borderRadius = width/10;
    arrowSquare.fills = [{fillColor: fillColor}]; //('#a54646')

    const iconColorString = '"'+iconColor+'"';
    const arrowLeftString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/></svg>';
    // const arrowLeft = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/></svg>');
    const arrowLeft = penpot.createShapeFromSvg(arrowLeftString);
    if(arrowLeft){
      arrowLeft.x = arrowSquare.x+width/7.69;
      arrowLeft.y = arrowSquare.y+height/6.66;
      arrowLeft.resize(width/1.33,height/1.33);
    }
    var itemNum = items; 
    var content;
    var contentList = [];  
    if(itemNum>5){
      itemNum = 5;
      content = ["1", "2", "...", String(itemNum-1), String(itemNum)];
    }
    else{
      content = ["1", "2", "3", "4", "5"];
    }
    for(let i=1; i<=itemNum;i++){
      const pageOption = penpot.createRectangle();
      pageOption.x = penpot.viewport.center.x+width/1.25+width*i;
      pageOption.y = penpot.viewport.center.y;
      pageOption.resize(width,height);
      pageOption.strokes = [{strokeColor: '#000000', strokeOpacity:.35  }]
      pageOption.name = "Square"
      const number = penpot.createText(content[i-1]);
      if(number){
        number.x = pageOption.x+width/2.5;
        number.y = pageOption.y+height/5;
        number.fontSize = String(width/2.083);
        number.fontFamily = 'Sour Gummy';
        if(i==1){
          pageOption.fills = [{fillColor: fillColor, fillOpacity: .4}]; //('800000')
          number.fills = [{fillColor: '#FFFFFF'}]; //white
        }else{
          pageOption.fills = [{fillColor: iconColor}]; //white
          number.fills = [{fillColor: textColor}];  //black
        }
        number.name = content[i-1];
        penpot.selection = [pageOption,number];
        const pageOptionGroup = penpot.group(penpot.selection);
        if(pageOptionGroup){
          pageOptionGroup.name = "Page Option";
          contentList.push(pageOptionGroup);
        }
      }
    }
    penpot.selection = contentList;
    const pageOptionsGroup = penpot.group(penpot.selection);
    if(pageOptionsGroup){
      pageOptionsGroup.name = "Page Options";
    }

    const arrowSquare2 = penpot.createRectangle();
    arrowSquare2.x = penpot.viewport.center.x+(itemNum+1)*width+((width/1.25)*2);
    arrowSquare2.y = penpot.viewport.center.y;
    arrowSquare2.resize(width,height);
    arrowSquare2.borderRadius = width/10;
    arrowSquare2.fills = [{fillColor: fillColor}];
    
    
    const arrowRightString = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='+iconColorString+' class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>';
    // const arrowRight = penpot.createShapeFromSvg('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>');
    const arrowRight = penpot.createShapeFromSvg(arrowRightString);
    if(arrowRight){
      arrowRight.x = arrowSquare2.x+width/7.69;
      arrowRight.y = arrowSquare2.y+height/6.666;
      arrowRight.resize(width/1.33,height/1.33);
    }

    if(arrowLeft && pageOptionsGroup && arrowRight){
      penpot.selection = [arrowSquare2,arrowRight];
      const arrowRightGroup = penpot.group(penpot.selection);
      penpot.selection = [arrowSquare,arrowLeft];
      const arrowLeftGroup = penpot.group(penpot.selection);
      if(arrowRightGroup && arrowLeftGroup){
        arrowRightGroup.name = "Arrow Right";
        arrowLeftGroup.name = "Arrow Left";
        penpot.selection = [arrowRightGroup,arrowLeftGroup,pageOptionsGroup];
        const pageNav = penpot.group(penpot.selection);
        if(pageNav){
          pageNav.name = "Page Navigation";
        } 
      }
    }
}