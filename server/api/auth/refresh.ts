import { sendServerRequest } from "~/utilities/helpers";

export default defineEventHandler(async (event) => {
   // TODO: If required, correct this implemented 'refresh' logic here.
   const res = sendServerRequest("/auth/refresh", "POST", event);
   return res();
});
