import { defineComponent, PropType } from 'vue';
import { RouterLink } from 'vue-router';
import { Button } from '../../shared/Button';
import { Center } from '../../shared/Center';
import { Money } from '../../shared/Money';
import s from './Bars.module.scss';

export const Bars = defineComponent({
  props: {
    data: {
      type: Array as PropType<{ tag: Tag, amount: number, percent: number }[]>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        {(props.data && props.data.length > 0) ?
          props.data.map(({ tag, amount, percent }) => {
            return (
              <div class={s.topItem}>
                <div class={s.sign}>
                  {tag.sign}
                </div>
                <div class={s.bar_wrapper}>
                  <div class={s.bar_text}>
                    <span> {tag.name} - {percent}% </span>
                    <span> ￥<Money value={amount} /> </span>
                  </div>
                  <div class={s.bar}>
                    <div class={s.bar_inner} style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              </div>
            )
          }) : <>
            <Center class={s.bill_wrapper} direction="|">
              <p>暂时没有数据哦，试着记一笔 ~</p>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始记账</Button>
                </RouterLink>
              </div>
            </Center>
          </>
        }
      </div >
    )
  }
})