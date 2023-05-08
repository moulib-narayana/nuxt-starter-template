export default function (
   callback?: (pagination: Pagination) => any,
   initialPage: number = 1,
   initialLimit: number = 20
) {
   const page = ref<number>(initialPage);
   const limit = ref<number>(initialLimit);

   const reset = () => {
      page.value = initialPage;
      limit.value = initialLimit;
   };

   watch(page, async (newPage, _) => {
      if (callback) callback({ page: newPage, limit: limit.value });
   });

   watch(limit, async (newLimit, _) => {
      if (callback) callback({ page: page.value, limit: newLimit });
   });

   return {
      page,
      limit,
      reset,

      /** Non-Reactive read only value */
      value: { page: page.value, limit: limit.value } as Pagination,
   };
}

export interface Pagination {
   /** Format: int32 */
   page: number;
   /** Format: int32 */
   limit: number;
}
