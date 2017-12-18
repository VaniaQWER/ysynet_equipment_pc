/**
 * @file 折叠面板资产信息
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

class ArchivesInfo extends Component {
  render () {
    const { archivesInfo } = this.props;
    return (
      <Row type="flex" className='table-row'>
        <Col span={4} className='table-span'>资产编号</Col>
        <Col span={8} className='table-span'> { archivesInfo.assetsRecord } </Col>
        <Col span={4} className='table-span'>生产商</Col>
        <Col span={8} className='table-span'> { archivesInfo.product } </Col>
        <Col span={4} className='table-span'>资产名称</Col>
        <Col span={8} className='table-span'> { archivesInfo.equipmetStandarName } </Col>
        <Col span={4} className='table-span'>使用科室</Col>
        <Col span={8} className='table-span'> { archivesInfo.useDeptCode } </Col>
        <Col span={4} className='table-span'>型号</Col>
        <Col span={8} className='table-span'> { archivesInfo.spec } </Col>
        <Col span={4} className='table-span'>管理科室</Col>
        <Col span={8} className='table-span'> { archivesInfo.bDept } </Col>
        <Col span={4} className='table-span'>状态</Col>
        <Col span={8} className='table-span'> { archivesInfo.useFstate } </Col>
        <Col span={4} className='table-span'>责任人</Col>
        <Col span={8} className='table-span'> { archivesInfo.custodian } </Col>
        <Col span={4} className='table-span'>资产分类</Col>
        <Col span={8} className='table-span'> { archivesInfo.equipmetStandarName } </Col>
        <Col span={4} className='table-span'>购置金额</Col>
        <Col span={8} className='table-span'> { archivesInfo.buyPrice } </Col>
        <Col span={4} className='table-span'>证件号</Col>
        <Col span={8} className='table-span'> { archivesInfo.certGuid } </Col>
        <Col span={4} className='table-span'>购置日期</Col>
        <Col span={8} className='table-span'> { archivesInfo.buyDate } </Col>
        <Col span={4} className='table-span'>设备分类</Col>
        <Col span={8} className='table-span'> { archivesInfo.productTyp } </Col>
        <Col span={4} className='table-span'></Col>
        <Col span={8} className='table-span'></Col>
      </Row>  
    )
  }
}
export default ArchivesInfo;