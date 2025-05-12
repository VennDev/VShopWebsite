/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
    extend: {
        colors: {
            // Tùy chỉnh màu cho chế độ sáng và tối
            primary: {
                light: "#3b82f6", // Màu xanh cho light mode
                dark: "#60a5fa", // Màu xanh nhạt hơn cho dark mode
            },
            background: {
                light: "#f3f4f6", // Nền sáng
                dark: "#1f2937", // Nền tối
            },
        },
    },
};
export const plugins = [];