import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"
import Loading from "../../components/Loading/index.vue"
import NotFound from "../../components/NotFound/index.vue";
import ResultItem from "../../components/ResultItem/index.vue";
import SearchHeader from "../../components/SearchHeader/index.vue";

export default defineComponent({
    components: {
        Loading,
        SearchHeader,
        ResultItem,
        NotFound
    },
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