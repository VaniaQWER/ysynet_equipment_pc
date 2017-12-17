export const routes =  {
  childRoutes: [
    {
      path: '/',//主页
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('../container/home').default)
        })
      },
      childRoutes: [
        {
          path: '/archives',//资产档案
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('../container/archives').default)
            })
          },
          childRoutes: [
            {
              path: '/archives/:archivesId',//资产档案详情
              getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                  cb(null, require('../container/archives/detail').default)
                })
              },
              childRoutes: [
                {
                  path: '/archives/:archivesId/:repairId',//资产档案详情
                  getComponent: (nextState, cb) => {
                    require.ensure([], (require) => {
                      cb(null, require('../container/archives/detail/repair/repairDetail').default)
                    })
                  },    
                }
              ]
            }
          ]
        }
      ]
    },
  ]
}