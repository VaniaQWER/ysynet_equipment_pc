/**
 * @file 主页
 */
import React,  { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
const { Header, Footer, Sider } = Layout;
class Home extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render () {
    const { menu } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <a href='#/' className='logoWrapper'>
            <img src={require('../../assets/logo.png')} alt='logo' className='logo'/>
            <h1 className='logoDesc'>P H X L</h1>
          </a>
          <Menu theme="dark" defaultSelectedKeys={[menu.activeKey]} mode="inline">
            <Menu.Item key="archives">
              <Link to='/archives'><Icon type="book" />资产档案</Link>
            </Menu.Item>
          </Menu>  
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          {
            this.props.children
          }
          <Footer style={{ textAlign: 'center' }}>
            医商云设备平台 ©2017 Created by 普华信联前端部
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.global.menu
  }
}


export default connect(mapStateToProps)(Home);