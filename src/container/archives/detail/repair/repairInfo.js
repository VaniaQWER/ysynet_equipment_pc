/**
 * @file 折叠面板维修信息
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PictureWall from '../../../../component/pictureWall';
class RepairInfo extends Component {
  render () {
    const { repairInfo } = this.props;
    return (
      <Row type="flex" className='table-row'>
        <Col span={6} className='table-span'>故障现象</Col>
        <Col span={18} className='table-span'> { repairInfo.faultDescribe } </Col>
        <Col span={6} className='table-span'>补充说明</Col>
        <Col span={18} className='table-span'> { repairInfo.faultWords } </Col>
        <Col span={6} className='table-span'>故障类型</Col>
        <Col span={18} className='table-span'> { repairInfo.repairContentType } </Col>
        <Col span={6} className='table-span'>故障原因</Col>
        <Col span={18} className='table-span'> { repairInfo.repairContentTyp } </Col>
        <Col span={6} className='table-span'>预估费用</Col>
        <Col span={18} className='table-span'> { repairInfo.quoredPrice } </Col>
        <Col span={6} className='table-span'>实际费用</Col>
        <Col span={18} className='table-span'> { repairInfo.actualPrice } </Col>
        <Col span={6} className='table-span'>图片预览</Col>
        <Col span={18} className='table-span'>
          <PictureWall max={1} delete={false}/>
        </Col>
      </Row>  
    )
  }
}
export default RepairInfo;