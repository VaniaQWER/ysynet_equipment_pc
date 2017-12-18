import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import { ArchivesStatus, DepreciationType } from '../../../constants';
import './style.css';
/**
 * @file 基础信息
 */
class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseInfo: {
        assetsRecord: '',//资产编号
        equipmetStandarName: '',//资产名称
        useFstate: '',//状态
        productType: '',//资产分类
        certGuid: '',//证件号
        product: '',//生产商
        deposit: '',//存放科室
        bDept: '',//管理科室
        custodian: '',//责任人
        installPrice: '',//安装费
        sourceFunds: '',//经费来源
        productionDate: '',//出厂日期
        enableDate: '',//启用日期
        recodrDate: '',//建档日期
        acctDate: '',//入账日期
        useLimit: '',//使用年限
        depreciationLimit: '',//折旧年限
        depreciationType: '',//折旧方法
        residualValue: '',//残值
        qalevel: '',//质量等级
        maintainDay: '',//包含该周期
      }
    }
  }
  componentDidMount() {
    // Mock
  }
  render () {
    const { baseInfo } = this.props;
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
          <Col span={8} className='table-span'> { baseInfo.assetsRecord } </Col>
          <Col span={4} className='table-span'>资产名称</Col>
          <Col span={8} className='table-span'>{ baseInfo.equipmetStandarName }</Col>
          <Col span={4} className='table-span'>状态</Col>
          <Col span={8} className='table-span'>{ baseInfo.useFstate }</Col>
          <Col span={4} className='table-span'>资产分类</Col>
          <Col span={8} className='table-span'>{ ArchivesStatus[baseInfo.productType] }</Col>
          <Col span={4} className='table-span'>证件号</Col>
          <Col span={8} className='table-span'>{ baseInfo.certGuid }</Col>
          <Col span={4} className='table-span'>生产商</Col>
          <Col span={8} className='table-span'>{ baseInfo.product }</Col>
          <Col span={4} className='table-span'>使用科室</Col>
          <Col span={8} className='table-span'>{ baseInfo.useDeptCode }</Col>
          <Col span={4} className='table-span'>存放地址</Col>
          <Col span={8} className='table-span'>{ baseInfo.deposit }</Col>
          <Col span={4} className='table-span'>管理科室</Col>
          <Col span={8} className='table-span'>{ baseInfo.bDept }</Col>
          <Col span={4} className='table-span'>责任人</Col>
          <Col span={8} className='table-span'>{ baseInfo.custodian }</Col>
          <Col span={4} className='table-span'>购置金额</Col>
          <Col span={8} className='table-span'>{ baseInfo.buyPrice }</Col>
          <Col span={4} className='table-span'>安装费</Col>
          <Col span={8} className='table-span'>{ baseInfo.installPrice }</Col>
          <Col span={4} className='table-span'>经费来源</Col>
          <Col span={8} className='table-span'>{ baseInfo.sourceFunds }</Col>
          <Col span={4} className='table-span'>出厂日期</Col>
          <Col span={8} className='table-span'>{ baseInfo.productionDate }</Col>
          <Col span={4} className='table-span'>启用日期</Col>
          <Col span={8} className='table-span'>{ baseInfo.enableDate }</Col>
          <Col span={4} className='table-span'>建档日期</Col>
          <Col span={8} className='table-span'>{ baseInfo.recodrDate }</Col>
          <Col span={4} className='table-span'>入账日期</Col>
          <Col span={8} className='table-span'>{ baseInfo.acctDate }</Col>
          <Col span={4} className='table-span'>使用年限</Col>
          <Col span={8} className='table-span'>{ baseInfo.useLimit }</Col>
          <Col span={4} className='table-span'>折旧年限</Col>
          <Col span={8} className='table-span'>{ baseInfo.depreciationLimit }</Col>
          <Col span={4} className='table-span'>折旧方法</Col>
          <Col span={8} className='table-span'>{ DepreciationType[baseInfo.depreciationType] }</Col>
          <Col span={4} className='table-span'>残值</Col>
          <Col span={8} className='table-span'>{ baseInfo.residualValue }</Col>
          <Col span={4} className='table-span'>质量等级</Col>
          <Col span={8} className='table-span'>{ baseInfo.qalevel }</Col>
          <Col span={4} className='table-span'>保养周期-天</Col>
          <Col span={8} className='table-span'>{ baseInfo.maintainDay }</Col>
          <Col span={4} className='table-span'>维修商</Col>
          <Col span={8} className='table-span'>{ baseInfo.outAaOrg }</Col>
          <Col span={4} className='table-span'>维修标识</Col>
          <Col span={8} className='table-span'>{ baseInfo.repairFlag }</Col>
          <Col span={4} className='table-span'>维修联系人</Col>
          <Col span={8} className='table-span'>{ baseInfo.outRrpairUserName }</Col>
          <Col span={4} className='table-span'>维修联系方式</Col>
          <Col span={8} className='table-span'>{ baseInfo.outRrpairPhone }</Col>
          <Col span={4} className='table-span'></Col>
          <Col span={8} className='table-span'></Col>
        </Row>
      </div>  
    )
  }
}
export default BaseInfo;