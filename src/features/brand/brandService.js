import axios from "axios";
import { base_url} from "../../utils/axiosConfig";

const getBrands = async (data) => {
    const response = await axios.get(
      `${base_url}brand/`
    );
    if (response.data) {
      return response.data;
    }
  };

  
export const brandService = {

  getBrands

};
