import React, { Component } from 'react';
import { Breadcrumb, Layout, Collapse } from 'antd';
import { Link } from 'react-router';
import ArchivesInfo from './archivesInfo';
import WorkorderInfo from './workorderInfo';
import RepairInfo from './repairInfo';
const { Content } = Layout;
const Panel = Collapse.Panel;
/**
 * @file 维修详情
 */

class RepairDetail extends Component {
  render () {
    const { params, record } = this.props.location.state;
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/archives'>资产档案</Link></Breadcrumb.Item>
          <Breadcrumb.Item><a onClick={() => window.history.go(-1)}>资产档案详情</a></Breadcrumb.Item>
          <Breadcrumb.Item>维修详情</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Collapse defaultActiveKey={['1']} >
            <Panel header="资产信息" key="1">
              <ArchivesInfo archivesInfo={record}/>
            </Panel>
            <Panel header="工单信息" key="2">
              <WorkorderInfo workorderInfo={params}/>
            </Panel>
            <Panel header="维修信息" key="3">
              <RepairInfo repairInfo={params}/>
            </Panel>
          </Collapse>
        </div>
      </Content>
    )
  }
}

export default RepairDetail;