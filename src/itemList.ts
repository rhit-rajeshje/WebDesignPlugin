export function checkBoxes(width:number, height:number, fillColor:string, iconColor:string, textColor:string, items:number){
    var contentList = [];
    const checkboxBox = penpot.createRectangle();
    checkboxBox.x = penpot.viewport.center.x;
    checkboxBox.y = penpot.viewport.center.y;
    checkboxBox.resize(width,items*height); //(400,300)
    checkboxBox.borderRadius = width/20;
    checkboxBox.fills = [{fillColor:fillColor}];
    checkboxBox.strokes = [{strokeColor:textColor, strokeWidth:1}];
    checkboxBox.name = "CheckBox Box";
    contentList.push(checkboxBox);

    for(let i=0;i<items;i++){
      var parts = []
      if(i!=0){
        const bar = penpot.createRectangle();
        bar.x = penpot.viewport.center.x;
        bar.y = penpot.viewport.center.y+height*i;
        bar.resize(width,1);
        bar.fills = [{fillColor:textColor}];
        bar.name = "Divider";
        contentList.push(bar);
      }
      const checkbox= penpot.createRectangle();
      checkbox.x = penpot.viewport.center.x+width/16;
      checkbox.y = penpot.viewport.center.y+height/3.33+height*i;
      checkbox.resize(width/8,height/2);
      checkbox.borderRadius = width/80;
      checkbox.fills = [{fillColor:fillColor}];
      checkbox.strokes = [{strokeColor:iconColor, strokeWidth:2}];
      checkbox.name = "Checkbox";
      parts.push(checkbox);

      const item = penpot.createText("Item "+i);
      if(item){
        item.x = penpot.viewport.center.x+width/4;
        item.y = penpot.viewport.center.y+height/3.33+height*i;
        item.fontSize = String(width/20);
        item.fontFamily = 'Sour Gummy';
        item.fills = [{fillColor:textColor}];
        item.name = "Title"
        parts.push(item);
      }
      const desc = penpot.createText("Description , Description , Description");
      if(desc){
        desc.x = penpot.viewport.center.x +width/4;
        desc.y = penpot.viewport.center.y + height/1.66 + height*i;
        desc.fills = [{fillColor:textColor}];
        desc.fontSize = String(width/33.33);
        desc.fontFamily = 'Sour Gummy';
        desc.name = "Desc.";
        parts.push(desc);
      }

      penpot.selection = parts;
      const itemGroup = penpot.group(penpot.selection);
      if(itemGroup){
        itemGroup.name = "Item"+i;
        contentList.push(itemGroup);
      }
    }

    penpot.selection = contentList;
    const checkboxGroup = penpot.group(penpot.selection);
    if(checkboxGroup){
      checkboxGroup.name = "CheckBox List";
    }
}

export function radioList(width:number, height:number, fillColor:string, iconColor:string, textColor:string, items:number){
    var contentList = [];
    for(let i = 0 ; i<items ; i++){
      var parts = [];
      const itemBox = penpot.createRectangle();
      itemBox.x = penpot.viewport.center.x;
      itemBox.y = penpot.viewport.center.y + (height/.75) *i;
      itemBox.resize(width,height); // (650,150)
      itemBox.fills = [{fillColor:fillColor}];
      itemBox.name = "Item Box";
      parts.push(itemBox);

      const title = penpot.createText("Item "+i);
      if(title){
        title.x = penpot.viewport.center.x+width/21.66;
        title.y = penpot.viewport.center.y+height/7.5 + (height/.75)*i;
        title.fontSize = String(width/13.5);
        title.fontFamily = 'Sour Gummy';
        title.fills = [{fillColor:textColor}];
        title.name = "Title";
        parts.push(title);
      }

      const desc = penpot.createText("Description, Description, Description");
      if(desc){
        desc.x = penpot.viewport.center.x+width/21.66;
        desc.y = penpot.viewport.center.y+height/1.875 + (height/.75)*i;
        desc.fontSize = String(width/27.08);
        desc.fontFamily = 'Sour Gummy';
        desc.fills = [{fillColor:textColor}];
        desc.name = "Desc."
        parts.push(desc);
      }

      const radioCircle = penpot.createEllipse();
      radioCircle.x = penpot.viewport.center.x+width/1.25;
      radioCircle.y = penpot.viewport.center.y+height/7.5 + (height/.75)*i;
      radioCircle.resize(width/6.5,height/1.5);
      radioCircle.fills = [{fillColor:fillColor}];
      radioCircle.strokes = [{strokeColor: iconColor, strokeWidth:width/32.5}];
      radioCircle.name = "Radio Button";
      parts.push(radioCircle);

      penpot.selection = parts;
      const itemGroup = penpot.group(penpot.selection);
      if(itemGroup){
        itemGroup.name = "Item"+i;
        contentList.push(itemGroup);
      }
    }
    penpot.selection = contentList;
    const radioList = penpot.group(penpot.selection);
    if(radioList){
      radioList.name = "Radio List";
    }
}