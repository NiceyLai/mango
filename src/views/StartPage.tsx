import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import { Navbar } from '../shared/Navbar';
import { Overlay } from '../shared/Overlay';
import s from './StartPage.module.scss';
export const StartPage = defineComponent({
  setup: (props, context) => {
    const refoverlayVisible =ref(false)
    const onClickMenu = () => {
    refoverlayVisible.value = !refoverlayVisible.value
  }
    return () => (
      <div>
        <Navbar>
          {{
            default: ()=>'山竹记账',
            icon:()=> <Icon name="menu" class={s.navIcon} onClick={onClickMenu}/>
          }}
        </Navbar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
        <FloatButton iconName='add' />
        {refoverlayVisible.value &&
          <Overlay onClose={() => refoverlayVisible.value =false} />} 
      </div>
    )
  }
  })