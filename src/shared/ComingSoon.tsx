import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { MainLayout } from '../layouts/MainLayout'
import { BackIcon } from './BackIcon'
import { Center } from './Center'
import s from './ComingSoon.module.scss'
import { Icon } from './Icon'
export const ComingSoon = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: () => {
    const router = useRouter()
    return () => (
      <MainLayout class={s.navbar}>
        {{
          title: () => '甜筒记账',
          icon: () => <BackIcon />,
          default: () => (
            <div >
              <Center class={s.bill_wrapper}>
                <Icon name="clock" class={s.bill} />
              </Center>
              <p class={s.bill_span}>功能尚未开发，敬请期待哦~</p>
            </div>
          )
        }}
      </MainLayout>
    )
  }
})

export default ComingSoon