import { defineComponent, ref } from "vue"
import router from "../../routes";

export default defineComponent({
    data(){
        return {
            search: ''
        }
    },
    setup () {
        console.log('Home page setup');

        const query = ref('');

        const onSubmit = () => {
            console.log('submit ', query.value);
            if(query.value){ 
                // submit here
                router.push({name: 'SearchPage', query: {'q': query.value}})
            }
        }

        return {
            query: query,
            onSubmit: onSubmit
        }
    },

})