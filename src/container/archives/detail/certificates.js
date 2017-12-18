import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './style.css';
/**
 * @file 证件信息
 */
class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificate: {
        registerNo: '',//注册证号
        tfAccessoryFile: '',//查看链接
        tfAccessory: '',//下载链接
        produceName: '',//生产企业名称
        enterpriseRegAddr: '',//生产企业注册地址
        produceAddr: '',//生产地址
        agentName: '',//代理人名称
        agentAddr: '',//代理人地址
        materialName: '',//产品名称
        productStandard: '',//产品标准
        productStructure: '',//产品性能结构
        productScope: '',//产品使用范围
        tfRemark: '',//备注
        firstTime: '',//批准日期
        lastTime: ''//有效期至
      }
    }
  }
  
  componentDidMount = () => {
    // Mock 数据
  }
  render () {
    const { certificate } = this.state;
    return (
      <div style={this.props.style}>
        <Row type='flex'>
          <Col span={24} style={{textAlign: 'center'}}><h2>中华人民共和国医疗器械注册证</h2></Col>
          <Col span={2}><h4>证件号:</h4></Col><Col span={12}><h4> {certificate.registerNo} </h4></Col>
          <Col span={2}><h4>证照图片:</h4></Col><Col span={2}><h4><a href={certificate.tfAccessoryFile}>查看</a></h4></Col>
          <Col span={1}><h4>附件:</h4></Col><Col span={2}><h4><a href={certificate.tfAccessory}>点击下载</a></h4></Col>
        </Row>  
        <Row type="flex" style={{marginTop: 16}} className='table-row'>
          <Col span={4} className='table-span'>生产企业名称</Col>
          <Col span={20} className='table-span'>{certificate.produceName}</Col>
          <Col span={4} className='table-span'>生产企业注册地址</Col>
          <Col span={20} className='table-span'>{certificate.enterpriseRegAddr}</Col>
          <Col span={4} className='table-span'>生产地址</Col>
          <Col span={20} className='table-span'>{certificate.produceAddr}</Col>
          <Col span={4} className='table-span'>代理人名称</Col>
          <Col span={20} className='table-span'>{certificate.agentName}</Col>
          <Col span={4} className='table-span'>代理人地址</Col>
          <Col span={20} className='table-span'>{certificate.agentAddr}</Col>
          <Col span={4} className='table-span'>产品名称</Col>
          <Col span={20} className='table-span'>{certificate.materialName}</Col>
          <Col span={4} className='table-span'>型号、规格</Col>
          <Col span={20} className='table-span'>见附件</Col>
          <Col span={4} className='table-span'>产品标准</Col>
          <Col span={20} className='table-span'>{certificate.productStandard}</Col>
          <Col span={4} className='table-span'>产品性能结构组成</Col>
          <Col span={20} className='table-span'>{certificate.productStructure}</Col>
          <Col span={4} className='table-span'>产品适用范围</Col>
          <Col span={20} className='table-span'>{certificate.productScope}</Col>
          <Col span={4} className='table-span'>备注</Col>
          <Col span={20} className='table-span'>{certificate.tfRemark}</Col>
        </Row> 
        <Row style={{marginTop: 16}}>
          <Col span={24} style={{textAlign: 'right'}}><h4>批准日期：{certificate.firstTime}</h4></Col>
          <Col span={24} style={{textAlign: 'right'}}><h4>有效期至：{certificate.lastTime}</h4></Col>
        </Row>  
      </div>
    )
  }
}

export default Certificates;