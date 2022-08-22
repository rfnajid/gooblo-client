import { defineComponent, ref } from "vue"

export default defineComponent({
    props : {
        title: String,
        description: String,
        date: String,
        url: String
    },
    setup (props) {
        return {
            props
        }
    }
})