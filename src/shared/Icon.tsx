import { defineComponent, PropType } from 'vue';
import s from './Icon.module.scss';

export const Icon = defineComponent({
    props: {
        name: {
            type:String as PropType<'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig' | 'mango'>
        }
    },
  setup: (props, context) => {
    return () => (
      <div>
            <svg class ={s.icon}>
                <use xlinkHref={'#'+ props.name}></use>
            </svg>
      </div>
    )
  }
})
