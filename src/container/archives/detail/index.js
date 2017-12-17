import React, { Component } from 'react';
import { Tabs, Breadcrumb, Layout } from 'antd';
import BaseInfo from './baseInfo';
import Certificates from './certificates';
import RepairRecord from './repair';
import { Link } from 'react-router';
const TabPane = Tabs.TabPane;
const { Content } = Layout;
/**
 * @file 资产档案详情
 */
class ArchivesDetail extends Component {
  render () {
    console.log(this.props)
    return this.props.children || (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/archives'>资产档案</Link></Breadcrumb.Item>
          <Breadcrumb.Item>资产档案详情</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="基本信息" key="1">
              <BaseInfo/>
            </TabPane>
            <TabPane tab="证件信息" key="2">
              <Certificates/>
            </TabPane>
            <TabPane tab="维修记录" key="3">
              <RepairRecord backurl={this.props.location.pathname}/>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    )
  }
}

export default ArchivesDetail;