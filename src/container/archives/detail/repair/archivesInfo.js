/**
 * @file 折叠面板资产信息
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class ArchivesInfo extends Component {
  render () {
    return (
      <Row type="flex" className='table-row'>
        <Col span={4} className='table-span'>资产编号</Col>
        <Col span={8} className='table-span'>1000123</Col>
        <Col span={4} className='table-span'>生产商</Col>
        <Col span={8} className='table-span'>成都肯格王电子</Col>
        <Col span={4} className='table-span'>资产名称</Col>
        <Col span={8} className='table-span'>三氧消毒机</Col>
        <Col span={4} className='table-span'>使用科室</Col>
        <Col span={8} className='table-span'>口腔科门诊1</Col>
        <Col span={4} className='table-span'>型号</Col>
        <Col span={8} className='table-span'>KD60</Col>
        <Col span={4} className='table-span'>管理科室</Col>
        <Col span={8} className='table-span'>设备科</Col>
        <Col span={4} className='table-span'>状态</Col>
        <Col span={8} className='table-span'>正常使用</Col>
        <Col span={4} className='table-span'>责任人</Col>
        <Col span={8} className='table-span'>张三</Col>
        <Col span={4} className='table-span'>资产分类</Col>
        <Col span={8} className='table-span'>医疗设备</Col>
        <Col span={4} className='table-span'>购置金额</Col>
        <Col span={8} className='table-span'>1024.00</Col>
        <Col span={4} className='table-span'>证件号</Col>
        <Col span={8} className='table-span'>国食药监械(准)字2016第1234567号</Col>
        <Col span={4} className='table-span'>购置日期</Col>
        <Col span={8} className='table-span'>2012.12.12</Col>
        <Col span={4} className='table-span'>设备分类</Col>
        <Col span={8} className='table-span'>消毒灭菌机</Col>
        <Col span={4} className='table-span'>供应商</Col>
        <Col span={8} className='table-span'>成都肯格王电子</Col>
      </Row>  
    )
  }
}
export default ArchivesInfo;