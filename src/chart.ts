export function chartBarHorizontal(width:number,height:number,fillColor:string,iconColor:string, textColor:string, xTitle:string, xData:string[], yTitle:string, yData:string[]){
      let contentList = [];
      const xAxis = penpot.createRectangle();
      xAxis.x = penpot.viewport.center.x;
      xAxis.y = penpot.viewport.center.y+height;
      xAxis.resize(height,width); //(500,15)
      xAxis.fills = [{fillColor:fillColor}];
      xAxis.name = "X-Axis";
      contentList.push(xAxis);

      const yAxis = penpot.createRectangle();
      yAxis.x = penpot.viewport.center.x;
      yAxis.y = penpot.viewport.center.y;
      yAxis.resize(width,height);
      yAxis.fills = [{fillColor:fillColor}];
      yAxis.name = "Y-Axis";
      contentList.push(yAxis);

      let distanceX = ((width/.23)*8)/xData.length;
      let distanceY = ((height/7.69)*8)/yData.length;

      let parts = [];
      for(let i=0;i<xData.length;i++){
        const text = penpot.createText(xData[i]);
        if(text){
          text.x = penpot.viewport.center.x+width+distanceX*i;
          text.y = penpot.viewport.center.y+height/.97;
          text.fontSize = String(width/.625);
          text.resize(width/.375,height/12.5);
          text.fontFamily = 'Sour Gummy';
          text.fills = [{fillColor:textColor}];
          parts.push(text);
        }
      }

      var xAxisTitle = penpot.createText(xTitle);
      if(xAxisTitle){
        xAxisTitle.x = penpot.viewport.center.x+width/.068;
        xAxisTitle.y = penpot.viewport.center.y+height/.88;
        xAxisTitle.fontSize = String(width/.625);
        xAxisTitle.fontFamily = 'Sour Gummy';
        xAxisTitle.name = "X-Axis Title";
        parts.push(xAxisTitle);
      }

      penpot.selection = parts;
      const xAxisGroup = penpot.group(penpot.selection);
      if(xAxisGroup){
        xAxisGroup.name = "X-Axis Labels";
        contentList.push(xAxisGroup);
      }

      let parts2 = [];
      for(let i=0;i<yData.length;i++){
        const text = penpot.createText(yData[i]);
        if(text){
          text.x = penpot.viewport.center.x-(width/.42);
          text.y = penpot.viewport.center.y+(height/50)+distanceY*i;
          text.fontSize = String(width/.625);
          text.resize(width/.375,height/12.5);
          text.fontFamily = 'Sour Gummy';
          text.fills = [{fillColor:textColor}];
          parts2.push(text);
        }
      }

      var yAxisTitle = penpot.createText(yTitle);
      if(yAxisTitle){
        yAxisTitle.x = penpot.viewport.center.x-width/.157;
        yAxisTitle.y = penpot.viewport.center.y+height/1.66;
        yAxisTitle.rotate(270);
        yAxisTitle.fontSize = String(width/.625);
        yAxisTitle.fontFamily = 'Sour Gummy';
        yAxisTitle.name = "Y-Axis Title";
        parts2.push(yAxisTitle);
      }
    
      penpot.selection = parts2;
      const yAxisGroup = penpot.group(penpot.selection);
      if(yAxisGroup){
        yAxisGroup.name = "Y-Axis Labels";
        contentList.push(yAxisGroup);
      }

      let benchMarks = [];
      for(let i=0;i<xData.length;i++){
        benchMarks.push(width/3+i*distanceX);
      }

      let parts3 = [];
      for(let i=0;i<yData.length;i++){
        const bar = penpot.createRectangle();
        bar.x = penpot.viewport.center.x + width;
        bar.y = penpot.viewport.center.y + height/250 + distanceY*i;
        if(i%2==0){
          bar.fills = [{fillColor:iconColor, fillOpacity:.7}];
        }
        else{
          bar.fills = [{fillColor:iconColor}];
        }
        let randomWidth = Math.floor(Math.random() * yData.length);
        bar.resize(benchMarks[randomWidth],height/11.111);
        bar.borderRadiusBottomRight = 5;
        bar.borderRadiusTopRight = 5;
        bar.name = "Data Bar "+(i+1);
        parts3.push(bar);
      }

      penpot.selection = parts3;
      const barGroup = penpot.group(penpot.selection);
      if(barGroup){
        barGroup.name = "Data Bars";
        contentList.push(barGroup);
      }

      penpot.selection = contentList;
      const chartBarGroup = penpot.group(penpot.selection);
      if(chartBarGroup){
        chartBarGroup.name = "Chart Bar - Horizontal";
      }
}

