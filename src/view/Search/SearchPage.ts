import { defineComponent, Ref, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import Loading from "../../components/Loading/index.vue"
import NotFound from "../../components/NotFound/index.vue";
import ResultItem from "../../components/ResultItem/index.vue";
import SearchHeader from "../../components/SearchHeader/index.vue";
import { SearchResult } from "../../model/search-result.model";
import { search } from "../../services/search/search.service";

const router = useRouter();

export default defineComponent({
    components: {
        Loading,
        SearchHeader,
        ResultItem,
        NotFound
    },
    setup () {
        const route = useRoute();

        let query = ref(route.query.q);
        let isLoading = ref(true);

        console.log('querynya, ', query);

        const searchResult: Ref<SearchResult[]> = ref([]);

        const onSubmit = async (newQuery: string) => {

            console.log('newquery on submit', newQuery);

            query.value = newQuery;

            console.log('on submit, query', query.value);

            // reset
            searchResult.value = [];
            
            // show loading
            isLoading.value = true;
            
            // hit api
            searchResult.value = await search(query.value);

            isLoading.value = false;
        }

        return {
            searchResult: searchResult,
            query: query,
            onSubmit: onSubmit,
            isLoading: isLoading
        }
    },
    mounted() {
        console.log('mounted query', this.query);

        if(!this.query){
            router.replace('HomePage');
        }else{
            this.onSubmit(this.query.toString());
        }
    },
})