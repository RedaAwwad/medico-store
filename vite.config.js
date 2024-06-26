import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { siteData, pagesData } from './site.config';
import viteImagemin from 'vite-plugin-imagemin';
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  server: {
    open: true,
  },
  root: siteData.root,
  build: {
    outDir: '../dist',
    target: 'es2015',
    emptyOutDir: true,
    rollupOptions: {
      // external: ['jquery'],
      input: {
        main: resolve(__dirname, siteData.root, 'index.html'),
        filter: resolve(__dirname, siteData.root, 'filter.html'),
        filterColor: resolve(__dirname, siteData.root, 'filter-color.html'),
        filterBrand: resolve(__dirname, siteData.root, 'filter-brand.html'),
        filterDiscount: resolve(__dirname, siteData.root, 'filter-discount.html'),
        search: resolve(__dirname, siteData.root, 'search.html'),
        productDetails: resolve(__dirname, siteData.root, 'product-details.html'),
        cart: resolve(__dirname, siteData.root, 'cart.html'),
        favorite: resolve(__dirname, siteData.root, 'favorite.html'),
        orders: resolve(__dirname, siteData.root, 'orders.html'),
        orderDetails: resolve(__dirname, siteData.root, 'order-details.html'),
        notFound: resolve(__dirname, siteData.root, '404.html'),
        profile: resolve(__dirname, siteData.root, 'profile.html'),
        privacy: resolve(__dirname, siteData.root, 'privacy-policy.html'),
        shipping: resolve(__dirname, siteData.root, 'shipping-policy.html'),
        services: resolve(__dirname, siteData.root, 'services.html'),
        tatriz: resolve(__dirname, siteData.root, 'tatriz.html'),
        locations: resolve(__dirname, siteData.root, 'locations.html'),
        blog: resolve(__dirname, siteData.root, 'blog.html'),
        blogDetails: resolve(__dirname, siteData.root, 'blog-details.html'),
        login: resolve(__dirname, siteData.root, 'login.html'),
        register: resolve(__dirname, siteData.root, 'register.html'),
        otp: resolve(__dirname, siteData.root, 'otp.html'),
        forgotPassword: resolve(__dirname, siteData.root, 'forgot-password.html'),
        resetPassword: resolve(__dirname, siteData.root, 'reset-password.html'),
        about: resolve(__dirname, siteData.root, 'about.html'),
        contact: resolve(__dirname, siteData.root, 'contact.html'),
        
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    handlebars({
      partialDirectory: resolve(__dirname, siteData.root, '_partials'),
      context(pagePath) {
        return pagesData[pagePath];
      },
    }),
    // createSvgIconsPlugin({
    //   // Specify the icon folder to be cached
    //   iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    //   // Specify symbolId format
    //   symbolId: 'icon-[dir]-[name]',
    //   /**
    //    * custom insert position
    //    * @default: body-last
    //    */
    //   /**
    //    * custom dom id
    //    * @default: __svg__icons__dom__
    //    */
    //   customDomId: '__svg__icons__dom__',
    // }),
  ],
});
