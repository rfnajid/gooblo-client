import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
    setup () {
        const route = useRoute();

        const query = route.query.q;

        console.log('querynya, ', query);

        const searchResult = ref([]);

        const onSubmit = () => {
            // reset
            searchResult.value = [];
            // show loading
            
            // hit api

            
        }

        return {
            searchResult: searchResult,
            query: query,
            onSubmit: onSubmit
        }
    },
    mounted() {
        console.log('mounted query', this.query);


    },
})