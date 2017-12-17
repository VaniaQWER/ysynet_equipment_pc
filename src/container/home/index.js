/**
 * @file 主页
 */
import React,  { Component } from 'react';
import { Layout, Menu, Icon,Avatar,Dropdown,Badge,Popover,Tabs,List } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import HeaderSearch from '../../component/HeaderSearch';
const { Header, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;

class TabsList extends Component{
  callback = () =>{

  }

  render(){
    const data1 = [{title: '通知1',contnet:"通知的详情"},{title: '通知2',contnet:"通知的详情"},{title: '通知3',contnet:"通知的详情"},{title: '通知 4',contnet:"通知的详情"},{title: '通知 5',contnet:"通知的详情"}];
    const data2 = [{title: '消息1',contnet:"消息的详情"},{title: '消息2',contnet:"消息的详情"},{title: '消息3',contnet:"消息的详情"}];
    const data3 = [{title: '待办1',contnet:"待办的详情"},{title: '待办2',contnet:"待办的详情"},{title: '待办3',contnet:"待办的详情"},{title: '待办 4',contnet:"待办的详情"}];
    return(
        <div>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="通知(5)" key="1">
            <List
              itemLayout="horizontal"
              dataSource={data1}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.contnet}
                  />
                </List.Item>
              )}
            />
            </TabPane>
            <TabPane tab="消息(3)" key="2">
            <List
              itemLayout="horizontal"
              dataSource={data2}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.contnet}
                  />
                </List.Item>
              )}
            />
            </TabPane>
            <TabPane tab="待办(4)" key="3">
            <List
              itemLayout="horizontal"
              dataSource={data3}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.contnet}
                  />
                </List.Item>
              )}
            />
            </TabPane>
          </Tabs>
        </div>
    )
  }
}
class Home extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render () {
    const { menu } = this.props;
    const topmenu = (
      <Menu selectedKeys={[]} onClick={this.handleMenuClick}>
        <Menu.Item disabled><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );
    
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
          <Header style={{ background: '#fff', padding: 0 }} >
          <div style={{float:"right",paddingRight:10}}>
            <HeaderSearch
              style={{ marginRight:'16px' }}
              placeholder="站内搜索"
              dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
              onSearch={(value) => {
                console.log('input', value); // eslint-disable-line
              }}
              onPressEnter={(value) => {
                console.log('enter', value); // eslint-disable-line
              }}
            />
              <span className="action" style={{marginRight:24}}>
              <Popover
                placement="bottomRight"
                trigger="click"
                arrowPointAtCenter
                content={<TabsList/>}
              >
                <Badge count={12}><Avatar  icon="bell" style={{ color: '#f56a00', backgroundColor: "#fff" }}/></Badge>
              </Popover>
             
              </span>
           <Dropdown   overlay={topmenu} trigger={['click']}>
              <span>
                <Avatar style={{verticalAlign:"middle"}} size="small"  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                {"管理员"}
              </span>
            </Dropdown>
          </div>
          
          </Header>
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