/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',  // 버튼과 이벤트 배경 색상
        secondary: '#f0f8ff',  // 오늘 날짜 배경 색상
        text: '#333',  // 기본 텍스트 색상
        eventBackground: '#0056b3',  // 이벤트 배경 색상
      },
      spacing: {
        'custom-padding': '1rem',
        'custom-margin': '1.5rem',
      },
      fontSize: {
        'custom-sm': '0.875rem',
        'custom-lg': '1.5rem',
      },
      borderRadius: {
        'custom-lg': '0.5rem',  // 버튼 및 이벤트의 둥근 모서리 크기
      },
    },
  },
  plugins: [],
};