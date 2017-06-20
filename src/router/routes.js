import AllInfomation from '../components/AllInfomation'
import Article from '../components/Article'
import IncludeList from '../components/IncludeList'
import reportList from '../components/reportList'
import messageBox from '../components/messageBox'
import mesManage from '../components/mesManage'
import DataStatistics from '../components/DataStatistics'
import instructions from '../components/instructions'
import feedback from '../components/feedback'
import test from '../components/test'
import managementCenter from '../components/managementCenter'
import userManage from '../components/userManage'
import instructionsDetail from '../components/instructionsDetail'
const routes = [
  { path: '/', component:AllInfomation},
  {path: '/consultation', component: AllInfomation},
  {path:'/articleDetail',component:Article},
  {path:'/IncludeList',component:IncludeList},
  {path:'/ReportList',component:reportList},
  {path:'/messageBox',component:messageBox},
  {path:'/mesManage',component:mesManage},
  {path:'/DataStatistics',component:DataStatistics},
  {path:'/instructions',component:instructions},
  {path:'/instructionsDetail',component:instructionsDetail},
  {path:'/feedback',component:feedback},
  {path:'/managementCenter',component:managementCenter},
  {path:'/userManage',component:userManage},
  {path:'/test',component:test}
]
export default routes