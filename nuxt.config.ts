// https://nuxt.com/docs/api/configuration/nuxt-config

const serverHost = "http://localhost:5000";
const clientHost = "http://localhost:3000";
const loginPagePath = "/login";

export default defineNuxtConfig({
   typescript: {
      shim: false,
   },

   ssr: true,

   devServer: {
      host: "0.0.0.0",
   },

   // Overidden by .env file
   runtimeConfig: {
      public: {
         apiBaseUrl: serverHost + "/api",
      },
   },

   http: {
      baseURL: serverHost + "/api",
      browserBaseURL: serverHost + "/api",
      https: false,
   },

   app: {
      head: {
         title: "Nuxt Web App",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      },
   },

   //TODO: Remove element plus part if you are not using it.
   css: ["~/assets/scss/element/index.scss", "~/assets/scss/app.scss"],

   modules: ["@vueuse/nuxt", "@nuxt-alt/auth", "@pinia/nuxt"],

   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               //TODO: Remove element plus part if you are not using it.
               additionalData:
                  '@use "~/assets/scss/element/_var.scss" as element; @use "~/assets/scss/_var.scss" as *;',
            },
         },
      },
   },

   auth: {
      enableMiddleware: true,
      globalMiddleware: true,
      strategies: {
         local: {
            scheme: "refresh",
            token: {
               property: "auth_token",
               maxAge: 60 * 5, // 5 Minutes
            },
            refreshToken: {
               property: "refresh_token.token_string",
               maxAge: 60 * 60 * 24, // 1 Day
               tokenRequired: true,
            },
            user: {
               property: false,
            },
            endpoints: {
               login: false,
               refresh: {
                  //TODO: Correct the URL
                  url: "/refresh-url",
                  method: "post",
                  tokenRequired: true,
               },
               user: {
                  //TODO: Correct the URL
                  url: "/me-url",
                  method: "get",
               },
               logout: false,
            },
            autoLogout: true,
            redirect: {
               login: loginPagePath,
               logout: loginPagePath,
               home: "/",
            },
         },
      },
   },
});
