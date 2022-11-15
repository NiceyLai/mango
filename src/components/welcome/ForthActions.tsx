import s from './welcome.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import { SkipFeatures } from '../../shared/SkipFeatures';
const onClick = () => {
  localStorage.setItem('skipFeatures', 'yes')
}
export const ForthActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <SkipFeatures class={s.fake} />
    <span onClick={onClick}>
      <RouterLink to="/start" >完成</RouterLink>
    </span>
    <SkipFeatures class={s.fake} />
  </div>
}

ForthActions.displayName = 'ForthActions'