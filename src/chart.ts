function createAxis(fillColor:string, textColor:string, xTitle:string, xData:string[],yTitle:string, yData:string[], distanceX:number, distanceY: number){
      let contentList = [];
      //Next Step - > Axis funtion 
      const xAxis = penpot.createRectangle();
      xAxis.x = penpot.viewport.center.x;
      xAxis.y = penpot.viewport.center.y+500;
      xAxis.resize(500,15); //(500,15)
      xAxis.fills = [{fillColor:fillColor}];
      xAxis.name = "X-Axis";
      contentList.push(xAxis);

      const yAxis = penpot.createRectangle();
      yAxis.x = penpot.viewport.center.x;
      yAxis.y = penpot.viewport.center.y;
      yAxis.resize(15,500);
      yAxis.fills = [{fillColor:fillColor}];
      yAxis.name = "Y-Axis";
      contentList.push(yAxis);

      let parts = [];
      for(let i=0;i<xData.length;i++){
        const text = penpot.createText(xData[i]);
        if(text){
          text.x = penpot.viewport.center.x+15+distanceX*i;
          text.y = penpot.viewport.center.y+515;
          text.fontSize = String(24);
          text.resize(40,40);
          text.name = xData[i];
          text.fontFamily = 'Sour Gummy';
          text.fills = [{fillColor:textColor}];
          parts.push(text);
        }
      }

      var xAxisTitle = penpot.createText(xTitle);
      if(xAxisTitle){
        xAxisTitle.x = penpot.viewport.center.x+220;
        xAxisTitle.y = penpot.viewport.center.y+570;
        xAxisTitle.fontSize = String(24);
        xAxisTitle.fontFamily = 'Sour Gummy';
        xAxisTitle.name = "X-Axis Title";
        xAxisTitle.fills = [{fillColor:textColor}];
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
          text.x = penpot.viewport.center.x-(35);
          text.y = penpot.viewport.center.y+(10)+distanceY*i;
          text.fontSize = String(24);
          text.resize(40,40);
          text.name = yData[i];
          text.fontFamily = 'Sour Gummy';
          text.fills = [{fillColor:textColor}];
          parts2.push(text);
        }
      }

      var yAxisTitle = penpot.createText(yTitle);
      if(yAxisTitle){
        yAxisTitle.x = penpot.viewport.center.x-95;
        yAxisTitle.y = penpot.viewport.center.y+300;
        yAxisTitle.rotate(270);
        yAxisTitle.fontSize = String(24);
        yAxisTitle.fontFamily = 'Sour Gummy';
        yAxisTitle.name = "Y-Axis Title";
        parts2.push(yAxisTitle);
        yAxisTitle.fills = [{fillColor:textColor}];
      }
    
      penpot.selection = parts2;
      const yAxisGroup = penpot.group(penpot.selection);
      if(yAxisGroup){
        yAxisGroup.name = "Y-Axis Labels";
        contentList.push(yAxisGroup);
      }

      return contentList;
}

export function chartBarHorizontal(fillColor:string,iconColor:string, textColor:string, xTitle:string, xData:string[], yTitle:string, yData:string[]){
      let distanceX = (65*8)/xData.length;
      let distanceY = (65*8)/yData.length;

      let currentListItems = createAxis(fillColor,textColor,xTitle,xData,yTitle,yData,distanceX,distanceY);

      let benchMarks = [];
      for(let i=0;i<xData.length;i++){
        benchMarks.push(5+i*distanceX);
      }

      let parts3 = [];
      for(let i=0;i<yData.length;i++){
        const bar = penpot.createRectangle();
        bar.x = penpot.viewport.center.x + 15;
        bar.y = penpot.viewport.center.y + 2 + distanceY*i;
        if(i%2==0){
          bar.fills = [{fillColor:iconColor, fillOpacity:.7}];
        }
        else{
          bar.fills = [{fillColor:iconColor}];
        }
        let randomWidth = Math.floor(Math.random() * xData.length);
        bar.resize(benchMarks[randomWidth],45);
        bar.borderRadiusBottomRight = 5;
        bar.borderRadiusTopRight = 5;
        bar.name = "Data Bar "+(i+1);
        parts3.push(bar);
      }

      penpot.selection = parts3;
      const barGroup = penpot.group(penpot.selection);
      if(barGroup){
        barGroup.name = "Data Bars";
        currentListItems.push(barGroup);
      }

      penpot.selection = currentListItems;
      const chartBarGroup = penpot.group(penpot.selection);
      if(chartBarGroup){
        chartBarGroup.name = "Chart Bar - Horizontal";
      }
}

export function lineChart(fillColor:string,iconColor:string, textColor:string, xTitle:string, xData:string[], yTitle:string, yData:string[]){
     let distanceX = ((65)*8)/xData.length;
     let distanceY = ((65)*8)/yData.length;

     let currentListItems = createAxis(fillColor,textColor,xTitle,xData,yTitle,yData,distanceX,distanceY);

    const lineChart1 = penpot.createShapeFromSvg('<svg width="480" xmlns="http://www.w3.org/2000/svg" height="356" id="screenshot-baa70d07-cd26-802e-8006-ad2870cf2b57" viewBox="2315 1033 478 358" style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g id="shape-baa70d07-cd26-802e-8006-ad2870cf2b57"><g class="fills" id="fills-baa70d07-cd26-802e-8006-ad2870cf2b57"><path d="M2328,1378C2397.381591796875,1167,2397.381591796875,1167,2397.381591796875,1167L2451.458251953125,1301L2535.124267578125,1301L2578.997802734375,1234L2663.68408203125,1046L2723.882568359375,1370L2780,1272"></path></g><g id="strokes-baa70d07-cd26-802e-8006-ad3470754738-baa70d07-cd26-802e-8006-ad2870cf2b57" class="strokes"><g class="stroke-shape"><path d="M2328,1378C2397.381591796875,1167,2397.381591796875,1167,2397.381591796875,1167L2451.458251953125,1301L2535.124267578125,1301L2578.997802734375,1234L2663.68408203125,1046L2723.882568359375,1370L2780,1272" style="fill:none;fill-opacity:none;stroke-width:5;stroke:'+iconColor+';stroke-opacity:1"></path></g></g></g></svg>');
    if(lineChart1){
        lineChart1.x = penpot.viewport.center.x+5;
        lineChart1.y = penpot.viewport.center.y+155;
        lineChart1.name = "Graph 1";
        currentListItems.push(lineChart1);
    }

    const lineChart2 = penpot.createShapeFromSvg('<svg width="480" xmlns="http://www.w3.org/2000/svg" height="356" id="screenshot-baa70d07-cd26-802e-8006-ad28bdb148db" viewBox="2316 1029 480 356" style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g id="shape-baa70d07-cd26-802e-8006-ad28bdb148db"><g class="fills" id="fills-baa70d07-cd26-802e-8006-ad28bdb148db"><path d="M2329,1161C2527,1161,2527,1161,2527,1161L2592,1042L2652,1284L2783,1372"></path></g><g id="strokes-baa70d07-cd26-802e-8006-ad3c103b60f7-baa70d07-cd26-802e-8006-ad28bdb148db" class="strokes"><g class="stroke-shape"><path d="M2329,1161C2527,1161,2527,1161,2527,1161L2592,1042L2652,1284L2783,1372" style="fill:none;fill-opacity:none;stroke-width:5;stroke:'+iconColor+';stroke-opacity:0.3"></path></g></g></g></svg>');
    if(lineChart2){
      lineChart2.x = penpot.viewport.center.x+5;
      lineChart2.y = penpot.viewport.center.y+155;
      lineChart2.name = "Graph 2";
      currentListItems.push(lineChart2);
    }  

      penpot.selection = currentListItems;
      const chartBarGroup = penpot.group(penpot.selection);
      if(chartBarGroup){
        chartBarGroup.name = "Line Chart";
      }
}

export function chartBarVertical(fillColor:string,iconColor:string, textColor:string, xTitle:string, xData:string[], yTitle:string, yData:string[]){
      let distanceX = (65*8)/xData.length;
      let distanceY = (65*8)/yData.length;

      let currentListItems = createAxis(fillColor,textColor,xTitle,xData,yTitle,yData,distanceX,distanceY);

      let benchMarks = [];
      for(let i=0;i<xData.length;i++){
        benchMarks.push(10+i*distanceY);
      }

      let parts3 = [];
      for(let i=0;i<yData.length;i++){
        const bar = penpot.createRectangle();
        bar.x = penpot.viewport.center.x + 2 + distanceX*i;
        bar.y = penpot.viewport.center.y + 50;
        if(i%2==0){
          bar.fills = [{fillColor:iconColor, fillOpacity:.7}];
        }
        else{
          bar.fills = [{fillColor:iconColor}];
        }
        let randomHeight = Math.floor(Math.random() * yData.length);
        bar.resize(45,benchMarks[randomHeight]);
        bar.borderRadiusBottomLeft = 5;
        bar.borderRadiusBottomRight = 5;
        bar.name = "Data Bar "+(i+1);
        parts3.push(bar);
      }

      penpot.selection = parts3;
      const barGroup = penpot.group(penpot.selection);
      if(barGroup){
        barGroup.rotate(180);
        barGroup.resize(480,400);
        barGroup.y -=5;
        barGroup.name = "Data Bars";
        currentListItems.push(barGroup);
      }

      penpot.selection = currentListItems;
      const chartBarGroup = penpot.group(penpot.selection);
      if(chartBarGroup){
        chartBarGroup.name = "Chart Bar - Vertical";
      }
}