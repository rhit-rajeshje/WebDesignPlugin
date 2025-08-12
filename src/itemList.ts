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