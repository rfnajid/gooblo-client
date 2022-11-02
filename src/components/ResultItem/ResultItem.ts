import { defineComponent, ref } from "vue"
import { slice } from "../../utils/string";

const MAX_TITLE_LENGTH = 60;
const MAX_DESC_LENGTH = 200;
const MAX_PATH_LENGTH = 10;

export default defineComponent({
    props : {
        title: String,
        description: String,
        date: String,
        url: String,
    },
    setup (props) {

        const url = new URL(props.url || '');
        const host = url.protocol+'//'+url.host+url.port;
        const path = url.pathname.split('/')
            .filter(item => item)
            .map(item => {
                item = item.trim();
                return item.length > MAX_PATH_LENGTH ? '...' : item;
            });
        path.pop();

        const breadcrumbs: string[] = [host, ...path];
        const title = slice(props.title, MAX_TITLE_LENGTH);
        const description = slice(props.description, MAX_DESC_LENGTH);
        return {
            breadcrumbs,
            title,
            description,
            url: props.url,
            date: props.date
        }
    }
})

