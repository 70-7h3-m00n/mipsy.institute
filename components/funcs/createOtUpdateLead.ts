import routes from "@/config/routes";
import axios from "axios";

async function createOrUpdateLead(formData) {
  try {
    const responseNewLead = await axios.post(
      `${routes.front.root}/api/checkAndCreateLead`,
      formData
    );
    return { success: true, data: responseNewLead.data };
    
  } catch (error) {
    console.log(error.response.data)
    formData.error = error.response.data
    const res = await axios.post(`${routes.front.root}/api/contact`, formData)
    console.log('RES IN UODATE LEAD', res)
    return res
  }
}

export default createOrUpdateLead