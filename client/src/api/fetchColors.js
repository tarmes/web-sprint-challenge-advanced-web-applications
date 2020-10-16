import { axiosWithAuth } from '../utils/axiosWithAuth';

export function fetchColors() {
   return axiosWithAuth()
      .get('api/colors')
      .then(res => {
         return (res)
      })
}