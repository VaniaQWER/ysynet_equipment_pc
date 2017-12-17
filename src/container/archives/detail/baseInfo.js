import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import './style.css';
/**
 * @file 基础信息
 */
class BaseInfo extends Component {
  render () {
    return (
      <div>
        <Carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <Row type="flex" style={{marginTop: 16}} className='table-row'>
          <Col span={4} className='table-span'>资产编号</Col>
          <Col span={8} className='table-span'>123456789012345678</Col>
          <Col span={4} className='table-span'>资产名称</Col>
          <Col span={8} className='table-span'>三氧消毒机</Col>
          <Col span={4} className='table-span'>状态</Col>
          <Col span={8} className='table-span'>正常使用</Col>
          <Col span={4} className='table-span'>资产分类</Col>
          <Col span={8} className='table-span'>医疗设备</Col>
          <Col span={4} className='table-span'>证件号</Col>
          <Col span={8} className='table-span'>国食药监械(准)字2016第1234567号</Col>
          <Col span={4} className='table-span'>生产商</Col>
          <Col span={8} className='table-span'>成都肯格王电子</Col>
          <Col span={4} className='table-span'>使用科室</Col>
          <Col span={8} className='table-span'>口腔科门诊1</Col>
          <Col span={4} className='table-span'>存放地址</Col>
          <Col span={8} className='table-span'>门诊大楼-1楼-口腔科1</Col>
          <Col span={4} className='table-span'>管理科室</Col>
          <Col span={8} className='table-span'>设备科</Col>
          <Col span={4} className='table-span'>责任人</Col>
          <Col span={8} className='table-span'>张三</Col>
          <Col span={4} className='table-span'>购置金额</Col>
          <Col span={8} className='table-span'>1024.00</Col>
          <Col span={4} className='table-span'>安装费</Col>
          <Col span={8} className='table-span'>100.00</Col>
          <Col span={4} className='table-span'>经费来源</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>供应商</Col>
          <Col span={8} className='table-span'>成都肯格王电子</Col>
          <Col span={4} className='table-span'>出厂日期</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>启用日期</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>建档日期</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>入账日期</Col>
          <Col span={8} className='table-span'>2012.12.12</Col>
          <Col span={4} className='table-span'>使用年限</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>折旧年限</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>折旧方法</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>残值</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>质量等级</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>保养周期-天</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>维修商</Col>
          <Col span={8} className='table-span'>武汉XXXX医疗器械有限公司</Col>
          <Col span={4} className='table-span'>维修标识</Col>
          <Col span={8} className='table-span'></Col>
          <Col span={4} className='table-span'>维修联系人</Col>
          <Col span={8} className='table-span'>王小二</Col>
          <Col span={4} className='table-span'>维修联系方式</Col>
          <Col span={8} className='table-span'>18666666666</Col>
        </Row>
      </div>  
    )
  }
}
export default BaseInfo;