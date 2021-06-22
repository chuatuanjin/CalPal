import * as React from "react";
// import * as ReactDOM from 'react-dom';
// import { enableRipple } from '@syncfusion/ej2-base';
// enableRipple(true);
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";

export default class ModuleList extends React.Component {
  constructor(props) {
    super(props);
    // this.modules = this.props.modules.reduce(function (s, a) {
    //   s.push({ Name: a });
    //   return s;
    // }, []);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }

  modules = this.props.modules.map((name) => {
    return {
      Name: name,
      //Color: this.color[index],
    };
  });

  field = {
    dataSource: this.modules,
    //id: "Color",
    text: "Name",
  };

  onTreeDragStop(args: DragAndDropEventArgs): void {
    let cellData: CellClickEventArgs = this.props.scheduleObj.getCellDetails(
      args.target
    );
    let eventData: { [key: string]: Object } = {
      Subject: args.draggedNodeData.text,
      StartTime: cellData.startTime,
      EndTime: cellData.endTime,
      IsAllDay: cellData.isAllDay,
    };
    this.props.scheduleObj.openEditor(eventData, "Add", true);
  }

  render() {
    console.log(this.field);
    return (
      <TreeViewComponent
        fields={this.field}
        allowDragAndDrop={true}
        nodeDragStop={this.onTreeDragStop.bind(this)}
      />
    );
  }
}
