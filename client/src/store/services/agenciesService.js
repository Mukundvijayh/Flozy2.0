import { getRequest } from "../../utils/apiHelper";

export const agenciesService = {
  getAgencies,
};

async function getAgencies(queryParams = "") {
  return await getRequest(`/agflow/agencies/${queryParams}`);
}
