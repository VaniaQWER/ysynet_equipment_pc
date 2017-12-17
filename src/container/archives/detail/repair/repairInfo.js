/**
 * @file 折叠面板维修信息
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PictureWall from '../../../../component/pictureWall';
class RepairInfo extends Component {
  render () {
    return (
      <Row type="flex" className='table-row'>
        <Col span={6} className='table-span'>故障现象</Col>
        <Col span={18} className='table-span'>部分功能失效</Col>
        <Col span={6} className='table-span'>补充说明</Col>
        <Col span={18} className='table-span'>无</Col>
        <Col span={6} className='table-span'>故障类型</Col>
        <Col span={18} className='table-span'>硬件故障</Col>
        <Col span={6} className='table-span'>故障原因</Col>
        <Col span={18} className='table-span'>设备老化</Col>
        <Col span={6} className='table-span'>预估费用</Col>
        <Col span={18} className='table-span'>1000.00</Col>
        <Col span={6} className='table-span'>实际费用</Col>
        <Col span={18} className='table-span'>1200.00</Col>
        <Col span={6} className='table-span'>图片预览</Col>
        <Col span={18} className='table-span'>
          <PictureWall max={1} delete={false}/>
        </Col>
      </Row>  
    )
  }
}
export default RepairInfo;