import s from './welcome.module.scss';
import { defineComponent, ref, watchEffect } from 'vue';
import { useSwipe } from '../../hooks/useSwipe';
import { useRouter } from 'vue-router';
export const First = defineComponent({
  setup() {
    const div = ref<HTMLElement>()
    const router = useRouter()
    const { direction, swiping } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })
    return () => (
      <div class={s.card} ref={div}>
        <svg>
          <use xlinkHref='#pig'></use>
        </svg>
        <h2>会挣钱<br />还要会省钱</h2>
      </div>
    )
  }

})
