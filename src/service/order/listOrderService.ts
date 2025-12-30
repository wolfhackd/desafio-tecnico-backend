import { Order } from "../../models/Order.js";



export const listOrdersService = async () =>{

  //Retorna todas as orders
  const orders = await Order.find();

  //Lembrar dos filtros
  //params
  //Page = 10 per page
  //state

  return orders;
  
}