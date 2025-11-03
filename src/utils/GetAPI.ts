import { jsonType } from "@/types";
import axios from "axios";

export const products:jsonType[]= await axios.get('http://localhost:8000/products').then((res)=>res.data);
