export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.config.errorHandler = (error, context) => {
      console.log("Global error handler caught", error);
   };
});
