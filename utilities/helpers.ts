import { ElMessage, ElMessageBox, ElNotification } from "element-plus";
import { Router } from "vue-router";

export const inDevelopmentMode = () => process.env.NODE_ENV === "development";

// ---------------- API Related Helper functions ----------------

export const getTotalCountHeader = (headers: Headers | null): number | null => {
   if (!headers) return null;

   const headerValue = headers.get("x-total-count");
   if (!headerValue) return null;

   return parseInt(headerValue);
};

// ---------------- End of API Related Helper functions ----------------


// ---------------- Numbers Related Helper functions ----------------

export const numberIsBetween = (
   val: number,
   lowerBound: number,
   upperBound: number,
   inclusiveOfBounds = false
): boolean => {
   if (inclusiveOfBounds) return val >= lowerBound && val <= upperBound;
   else return val > lowerBound && val < upperBound;
};

export const isNumericInteger = (value: string): boolean => {
   if (typeof value !== "string") return false;

   return !isNaN(value as any) && !isNaN(parseInt(value));
};

/**
 * Convert an integer to a cardinal number.
 *
 * Example:
 * * 1 -> 1st
 * * 2 -> 2nd etc...
 */
export const convertToOrdinalNumber = (num: number): string => {
   const ones = num % 10;
   const tens = Math.floor(num / 10) % 10;

   const suffixes = ["th", "st", "nd", "rd"];

   const suffix = suffixes[(tens === 1 || ones > 3) ? 0 : ones];

   return `${num}${suffix}`;
}

// ---------------- End of Numbers Related Helper functions ----------------


// ---------------- UI Related Helper functions ----------------

const showMessage = (
   type: "error" | "success" | "warning" | "info",
   message: string,
   duration = 4000
) => {
   ElMessage({
      type,
      showClose: true,
      duration,
      message,
   });
};

export const showErrorMessage = (message: string, duration = 5000) => {
   showMessage("error", message, duration);
};

export const showSuccessMessage = (message: string, duration = 4000) => {
   showMessage("success", message, duration);
};

export const showWarningMessage = (message: string, duration = 4000) => {
   showMessage("warning", message, duration);
};

export const showInfoMessage = (message: string, duration = 4000) => {
   showMessage("info", message, duration);
};

const showNotification = (
   type: "error" | "success" | "warning" | "info",
   message: string,
   duration = 4000,
   title?: string,
) => {
   ElNotification({
      type,
      message,
      title,
      showClose: true,
      duration,
   });
};

export const showErrorNotification = (message: string, title?: string, duration = 5000) => {
   showNotification("error", message, duration, title);
};

export const showSuccessNotification = (message: string, title?: string, duration = 4000) => {
   showNotification("success", message, duration, title);
};

export const showWarningNotification = (message: string, title?: string, duration = 4000) => {
   showNotification("warning", message, duration, title);
};

export const showInfoNotification = (message: string, title?: string, duration = 4000) => {
   showNotification("info", message, duration, title);
};

export const showMessageBox = (options: {
   message: string,
   title?: string,
   showClose?: boolean,
   successCallback?: () => any,
   failureCallback?: () => any,
}) => {
   ElMessageBox.confirm(options.message, options.title, {
      showClose: options.showClose ?? false,
   })
      .then(options.successCallback ? options.successCallback : () => { })
      .catch(options.failureCallback ? options.failureCallback : () => { })
}

// ---------------- End of UI Related Helper functions ----------------


// ---------------- String Related Helper functions ----------------

export const toTitleCase = (text: string): string => {
   var tempRes = text
      .trim() // Remove white space
      .replace(/^,+/, '') // Remove first commas
      .replace(/,+$/, '') // Remove last commas
      .split(' ') // Split to individual items
      .map((txt) => {
         return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
      })
      .join(' ');

   return tempRes;
}

export const pluralize = (numberOfItems: number, singularText: string, pluralText: string) => {
   if (numberOfItems === 1) return numberOfItems + ' ' + singularText;
   return numberOfItems + ' ' + pluralText;
}

// ---------------- End of String Related Helper functions ----------------


// ---------------- MediaQuery Related Helper functions ----------------

// Same function is replicated in scss file: _helpers.scss
// Any changes here should be reflected there.
export const pixelToRem = (pixel: number, context = 16) => {
   return pixel / context;
};

// ---------------- End of MediaQuery Related Helper functions ----------------

// ----------------  Null Check Related Helper functions ----------------

export const isNullOrUndefined = (val: any) => {
   if (val === null || val === undefined) return true;
   return false;
}

export const isNullOrEmpty = (value: any[] | null) => {
   return !value || value.length === 0;
};

// ----------------  End of Null Check Related Helper functions ----------------

// ----------------  Date & Time Related Helper functions ----------------

export const isToday = (dateString: string | null): boolean => {
   if (!dateString) return false;

   const now = new Date();
   const date = new Date(dateString);
   const diffInMilliSeconds = Math.abs(now.getTime() - date.getTime())
   const diffInHours = Math.floor(diffInMilliSeconds / (1000 * 60 * 60));

   return diffInHours < 24;
}

export const getDaysAgoFromDate = (dateString: string) => {
   const now = new Date();
   const date = new Date(dateString);

   const diffInMilliSeconds = Math.abs(now.getTime() - date.getTime())
   const diffInSeconds = Math.floor(diffInMilliSeconds / (1000));
   const diffInMinutes = Math.floor(diffInSeconds / (60));
   const diffInHours = Math.floor(diffInMinutes / (60));
   const diffInDays = Math.floor(diffInHours / (24));
   const diffInMonths = Math.abs(now.getMonth() - date.getMonth());

   if (diffInSeconds < 60)
      return pluralize(diffInSeconds, "second", "seconds")

   else if (diffInMinutes < 60)
      return pluralize(diffInMinutes, "minute", "minutes")

   else if (diffInHours < 24)
      return pluralize(diffInHours, "hour", "hours");

   else if (diffInDays < 30)
      return pluralize(diffInDays, "day", "days");

   else
      return pluralize(diffInMonths, "month", "months");
};

export const getFormattedDateTime = (d: CustomDateAttributes) => {
   const date = d.date ?? new Date(d.dateString!)

   const locale = 'default';

   const dateOptions = {
      dateStyle: d.isWeekDayShort ? 'short' : 'long',
   } as Intl.DateTimeFormatOptions;

   const timeOptions = {
      timeStyle: 'short',
      hourCycle: 'h12',
   } as Intl.DateTimeFormatOptions;

   const replace = (str: string): string => {
      return str.replaceAll('/', d.seperator ?? '-');
   };

   let formattedDate = replace(date.toLocaleString(locale, dateOptions));
   let formattedTime = date.toLocaleTimeString(locale, timeOptions);
   let formattedDateTimeSeperator = (d.dateTimeSeperator ? ` ${d.dateTimeSeperator} ` : ' ')

   if (d.dateOnly)
      return formattedDate;

   if (d.timeOnly)
      return formattedTime;

   return d.isDateFirst ? (formattedDate + formattedDateTimeSeperator + formattedTime) : (formattedTime + formattedDateTimeSeperator + formattedDate);
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// ----------------  End of Date & Time Related Helper functions ----------------


// --------------- Routing Related Helper Functions -----------------------------

export const goBackOrReplaceTo = (router: Router, route: string) => {
   const previousRoute = router.options.history.state.back;
   // console.log(previousRoute);

   if (previousRoute) {
      // console.log("go -1");
      router.go(-1);
   } else {
      // console.log("replace");
      router.replace(route);
   }
};

export const validateRouteId = (routeId: any) => /^\d+$/.test(routeId as string);

// --------------- End of Routing Related Helper Functions -----------------------------


/// This interface gives different parameters to get a formatted date or time string.
interface CustomDateAttributes {
   date?: Date,
   dateString?: string,
   isMonthNameShort?: boolean,
   isWeekDayShort?: boolean,
   seperator?: string,
   dateTimeSeperator?: string,
   isDateFirst?: boolean,
   dateOnly?: boolean,
   timeOnly?: boolean,
}
