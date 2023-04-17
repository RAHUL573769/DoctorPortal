/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui:{
  themes:{
    doctortheme:{
 
      "primary": "#0FCFEC",
          
      "secondary": "#EF9FBC",
               
      "accent": "#EEAF3A",
               
      "neutral": "#291334",
               
      "base-100": "#FAF7F5",
               
      "info": "#3ABFF8",
               
      "success": "#36D399",
               
      "warning": "#FBBD23",
               
      "error": "#F87272",
    }
  }
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}