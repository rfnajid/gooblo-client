import { defineComponent, ref } from "vue"

export default defineComponent({
    props: {
        query: String,
        onSubmit: Function
    },
    setup (props) {
        const query = ref(props.query);
        
        const onSubmit = async () => {
            if(props.onSubmit) await props.onSubmit(query.value);
        }

        return {
            query: query,
            onSubmit: onSubmit
        }
    },
    mounted() {
        console.log('mounted query', this.query);
    },
})