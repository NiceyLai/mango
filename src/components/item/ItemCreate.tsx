import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Tabs, Tab } from '../../shared/Tabs';
import { InputPad } from './InputPad';
import s from './ItemCreate.module.scss';
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const refKind = ref('支出')
    const refExpensesTags = ref([
      { id: 1, name: '三餐', sign: 'Y', category: 'expenses' },
      { id: 2, name: '打车', sign: 'Y', category: 'expenses' },
      { id: 3, name: '聚餐', sign: 'Y', category: 'expenses' }
    ])
    const refIncomTags = ref([
      { id: 4, name: '工资', sign: 'Y', category: 'income' },
      { id: 5, name: '奖金', sign: 'Y', category: 'income' },
      { id: 6, name: '彩票', sign: 'Y', category: 'income' }
    ])
    return () => (
      <MainLayout>{{
        title: () => '记一笔',
        icon: () => <Icon name="left" class={s.navIcon} />,
        default: () => <>
          <Tabs v-model:selected={refKind.value}>
            <Tab name="支出">
              {refExpensesTags.value.map(tag => {
                return <span>{tag.name}</span>
              })}
            </Tab>
            <Tab name="收入">
              {refIncomTags.value.map(tag => {
                return <span>{tag.name}</span>
              })}
            </Tab>
          </Tabs>
          <div class={s.inputPad_wrapper}>
            <InputPad />
          </div>
        </>
      }
      }</MainLayout >
    )
  }
})