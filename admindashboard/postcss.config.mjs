import tailwindcss from 'tailwindcss'; // Use tailwindcss, not @tailwindcss/postcss
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,   // Correctly import and use tailwindcss
    autoprefixer,  // Autoprefixer remains the same
  ],
};
