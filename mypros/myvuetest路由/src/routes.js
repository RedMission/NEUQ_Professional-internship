import Home from './views/Home'
import Producets from "./views/Producets";

export const routes = [
  {
    path:'/Home',
    component:Home
  },
  {
    path: '/Producets/:id',
    component: Producets
  }
]
