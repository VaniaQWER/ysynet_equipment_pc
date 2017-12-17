/**
 * @file 折叠面板工单信息
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class WorkorderInfo extends Component {
  render () {
    return (
      <Row type="flex" className='table-row'>
        <Col span={4} className='table-span'>维修单号</Col>
        <Col span={8} className='table-span'>123456</Col>
        <Col span={4} className='table-span'>状态</Col>
        <Col span={8} className='table-span'>已关闭</Col>
        <Col span={4} className='table-span'>紧急度</Col>
        <Col span={8} className='table-span'>紧急</Col>
        <Col span={4} className='table-span'>申报时间</Col>
        <Col span={8} className='table-span'>2012.12.12</Col>
        <Col span={4} className='table-span'>申报人</Col>
        <Col span={8} className='table-span'>张三</Col>
        <Col span={4} className='table-span'>联系方式</Col>
        <Col span={8} className='table-span'>18666666666</Col>
        <Col span={4} className='table-span'>维修性质</Col>
        <Col span={8} className='table-span'>故障报修</Col>
        <Col span={4} className='table-span'>维修类型</Col>
        <Col span={8} className='table-span'>内修</Col>
        <Col span={4} className='table-span'>是否返修</Col>
        <Col span={8} className='table-span'>否</Col>
        <Col span={4} className='table-span'>有无备用</Col>
        <Col span={8} className='table-span'>无</Col>
        <Col span={4} className='table-span'>期望完成时间</Col>
        <Col span={8} className='table-span'>2012.12.12</Col>
        <Col span={4} className='table-span'>实际完成时间</Col>
        <Col span={8} className='table-span'>2012.12.12</Col>
      </Row>  
    )
  }
}
export default WorkorderInfo;