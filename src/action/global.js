/**
 * @file 全局信息.比如导航, 面包屑
 */

export const SET_MENU = 'SET_MENU';
export const SET_BREAD = 'SET_BREAD'

export const set_menu = (menu) => ({
  type: SET_MENU,
  menu
})
export const set_bread = bread => ({
  type: SET_BREAD,
  bread
})

/**
 * 设置菜单
 */
export const setMenuMapper = menu => ( 
  dispatch => (
    dispatch(set_menu(menu))
  )
)  
/**
 * 设置面包屑导航
 * @param {*} bread 
 */
export const setBreadMapper = bread => ( 
  dispatch => (
    dispatch(set_bread(bread))
  )
)  