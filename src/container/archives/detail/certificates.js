import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './style.css';
/**
 * @file 证件信息
 */
class Certificates extends Component {
  render () {
    return (
      <div>
        <Row type='flex'>
          <Col span={24} style={{textAlign: 'center'}}><h2>中华人民共和国医疗器械注册证</h2></Col>
          <Col span={2}><h4>证件号:</h4></Col><Col span={12}><h4>国食药监械(进)字2010第2663520号</h4></Col>
          <Col span={2}><h4>证照图片:</h4></Col><Col span={2}><h4><a>查看</a></h4></Col>
          <Col span={1}><h4>附件:</h4></Col><Col span={2}><h4><a>点击下载</a></h4></Col>
        </Row>  
        <Row type="flex" style={{marginTop: 16}} className='table-row'>
          <Col span={4} className='table-span'>生产者名称</Col>
          <Col span={20} className='table-span'>南京微创医学科技有限公司</Col>
          <Col span={4} className='table-span'>生产者地址</Col>
          <Col span={20} className='table-span'>高新开发区15号楼709</Col>
          <Col span={4} className='table-span'>生产地址</Col>
          <Col span={20} className='table-span'>高新开发区高科三路10号</Col>
          <Col span={4} className='table-span'>代理人名称</Col>
          <Col span={20} className='table-span'></Col>
          <Col span={4} className='table-span'>代理人地址</Col>
          <Col span={20} className='table-span'></Col>
          <Col span={4} className='table-span'>产品名称</Col>
          <Col span={20} className='table-span'>三氧消毒机</Col>
          <Col span={4} className='table-span'>型号、规格</Col>
          <Col span={20} className='table-span'>见附页</Col>
          <Col span={4} className='table-span'>产品标准</Col>
          <Col span={20} className='table-span'>YZB/国 3598-2012《消毒灭菌机》</Col>
          <Col span={4} className='table-span'>产品性能结构组成</Col>
          <Col span={20} className='table-span'>该产品是由镍钛合金制成的圆柱形支架，其中镍含量54.5-57%。支架端部形状：直圆柱口、喇叭口，喇叭口可变形为杯口、球头，结构为手编。支架直径为18-30mm，长度为40-160mm。可以以单支架形式供货，也可以支架预装入置入器形式供货。置入器为A型和B型，A型置入器由软头、内管、定位环、中管、外管、前手柄、后手柄、调节手柄等组成；B型置入器由软头、内管、外管、手柄、捆线、拉线环等组成。置入器材料由聚氯乙烯、聚乙烯、医用不锈钢、ABS和尼龙组成。释放辅助线为选配件，材料为尼龙6。环氧乙烷灭菌，产品一次性使用。</Col>
          <Col span={4} className='table-span'>产品适用范围</Col>
          <Col span={20} className='table-span'>用于因恶性病变造成的肠道狭窄或梗阻的扩张治疗。</Col>
          <Col span={4} className='table-span'>其他内容</Col>
          <Col span={20} className='table-span'></Col>
          <Col span={4} className='table-span'>备注</Col>
          <Col span={20} className='table-span'></Col>
        </Row> 
        <Row style={{marginTop: 16}}>
          <Col span={24} style={{textAlign: 'right'}}><h4>批准日期：二O一六年三月一日</h4></Col>
          <Col span={24} style={{textAlign: 'right'}}><h4>有效期至：二O二一年二月二十八日</h4></Col>
        </Row>  
      </div>
    )
  }
}

export default Certificates;