import('roboto-fontface/css/roboto/roboto-fontface.css');
import('roboto-fontface/fonts/roboto/Roboto-Thin.woff2') //100
import('roboto-fontface/fonts/roboto/Roboto-Light.woff2') //300
import('roboto-fontface/fonts/roboto/Roboto-Regular.woff2') //400
import('roboto-fontface/fonts/roboto/Roboto-Medium.woff2') //500
import('roboto-fontface/fonts/roboto/Roboto-Bold.woff2') //700
import('roboto-fontface/fonts/roboto/Roboto-Black.woff2') //900
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      
        themes: {
            light: {
                primary: '#e20074',
                secondary: '#6c757d',
                accent: '#3ea2fb',
                error: '#dc3545',
                petrol: '#17a499', 
                background: '#fff',
            }
        },
        options: {
            customProperties: true
        },
    },
})
