/**
 * @file 折叠面板工单信息
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class WorkorderInfo extends Component {
  render () {
    const { workorderInfo } = this.props;
    return (
      <Row type="flex" className='table-row'>
        <Col span={4} className='table-span'>维修单号</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairOrder } </Col>
        <Col span={4} className='table-span'>状态</Col>
        <Col span={8} className='table-span'> { workorderInfo.orderFstate } </Col>
        <Col span={4} className='table-span'>紧急度</Col>
        <Col span={8} className='table-span'> { workorderInfo.urgentFlag } </Col>
        <Col span={4} className='table-span'>申报时间</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairTime } </Col>
        <Col span={4} className='table-span'>申报人</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairUserName } </Col>
        <Col span={4} className='table-span'>联系方式</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairPhone } </Col>
        <Col span={4} className='table-span'>维修性质</Col>
        <Col span={8} className='table-span'> { workorderInfo.orderType } </Col>
        <Col span={4} className='table-span'>维修类型</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairType } </Col>
        <Col span={4} className='table-span'>是否返修</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairFlag } </Col>
        <Col span={4} className='table-span'>有无备用</Col>
        <Col span={8} className='table-span'> { workorderInfo.spare } </Col>
        <Col span={4} className='table-span'>期望完成时间</Col>
        <Col span={8} className='table-span'> { workorderInfo.completTime } </Col>
        <Col span={4} className='table-span'>实际完成时间</Col>
        <Col span={8} className='table-span'> { workorderInfo.rrpairDate } </Col>
      </Row>  
    )
  }
}
export default WorkorderInfo;