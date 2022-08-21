import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
    setup () {
        const route = useRoute();

        const query = route.query.q;

        console.log('querynya, ', query);

        const searchResult = ref([]);

        return {
            searchResult: searchResult,
            query: query
        }
    },
    mounted() {
        console.log('mounted query', this.query);

        
    },
})