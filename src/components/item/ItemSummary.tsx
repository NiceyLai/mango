import { defineComponent, PropType } from 'vue';
import s from './ItemSummary.module.scss';
export const ItemSummary = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: true
        },
        endDate: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup: (props, context) => {
        return () => (
            <div class={s.wrapper}></div>
        )
    }
})