import { sendServerRequest } from "~/utilities/helpers";

export default defineEventHandler(async (event) => {
   // TODO: If required, correct this implemented 'me' logic here.
   const res = sendServerRequest("/me", "GET", event);
   return res();
});
