import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'
import { MenuItemCollapse } from './MenuItemCollapse'

/**
 * 移动端菜单栏
 * @param {*} props
 * @returns
 */
export const MenuBarMobile = (props) => {
  const { customMenu, customNav } = props
  const { locale } = useGlobal()

  let links = [
    // { name: locale.NAV.INDEX, to: '/' || '/', show: true },
    { name: locale.COMMON.CATEGORY, to: '/category', show: siteConfig('NAV_MENU_CATEGORY', null, CONFIG) },
    { name: locale.COMMON.TAGS, to: '/tag', show: siteConfig('NAV_MENU_TAG', null, CONFIG) },
    { name: locale.NAV.ARCHIVE, to: '/archive', show: siteConfig('NAV_MENU_ARCHIVE', null, CONFIG) }
    // { name: locale.NAV.SEARCH, to: '/search', show: siteConfig('MENU_SEARCH', null, CONFIG) }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav id='nav' className=' text-md'>
        {/* {links.map(link => <NormalMenu key={link?.id} link={link}/>)} */}
        {links?.map((link, index) => <MenuItemCollapse onHeightChange={props.onHeightChange} key={index} link={link}/>)}

    </nav>
  )
}
