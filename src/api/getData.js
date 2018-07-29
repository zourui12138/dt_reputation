import axios from 'axios'

const api='/api';

export const api_getProjects = () => axios.get(api+'/addprice/getAllPro');
export const api_getProjectsReports = (id) => axios.post(api+'/addprice/getProFile',{type: '2',id: id});// 2-->财报
export const api_getProjectsContract = (id) => axios.post(api+'/addprice/getProFile',{type: '3',id: id});// 3-->对赌合约
export const api_getProjectsDisclosure = (id) => axios.post(api+'/addprice/getProFile',{type: '4',id: id});// 4-->违法信息披露
export const api_addReputation = (id,fileId,addAssets) => axios.post(api+'/addprice/addReputation',{id: id,fileId: fileId,addAssets: addAssets});
export const api_getProjectsEvents = (id) => axios.post(api+'/addprice/getProFile',{type: '1',id: id});// 1-->事件
export const api_addValue = (id,fileId,enterprise) => axios.post(api+'/addprice/addValue',{id: id,fileId: fileId,enterpriseAssets: enterprise});
