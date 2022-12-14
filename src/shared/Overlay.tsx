import { Dialog } from 'vant';
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useMeStore } from '../stores/useMeStore';
import { Icon } from './Icon';
import s from './Overlay.module.scss';
export const Overlay = defineComponent({
	props: {
		onClose: {
			type: Function as PropType<() => void>
		}
	},
	setup: (props) => {
		const meStore = useMeStore()
		const currentTab = ref<number>(0)
		const linkArray = [
			{ to: '/items', name: 'sweetcones', text: '首页列表' },
			{ to: '/items/create', name: 'bill', text: '记一笔账' },
			{ to: '/statistics', name: 'charts', text: '统计图表' },
			{ to: '/export', name: 'export', text: '导出数据' },
			{ to: '/notify', name: 'notify', text: '记账提醒' },
		]
		const closeOverlay = () => {
			props.onClose?.()
		}
		const route = useRoute()
		const me = ref<User>()
		onMounted(async () => {
			const response = await meStore.mePromise
			me.value = response?.data.resource
			const path = route.path
			switch (path) {
				case '/items':
					currentTab.value = 0
					break
				case '/items/create':
					currentTab.value = 1
					break
				case '/statistics':
					currentTab.value = 2
					break
				case '/export':
					currentTab.value = 3
					break
				case '/notify':
					currentTab.value = 4
					break
			}
		})
		const onSignOut = async () => {
			await Dialog.confirm({
				title: '确认',
				message: '你真的要退出登录吗？',
			})
			localStorage.removeItem('jwt')
			window.location.reload()
		}
		return () => <>
			<div class={s.mask} onClick={closeOverlay}>
			</div>
			<div class={s.overlay}>
				<section class={s.currentUser}>
					{me.value ?
						<div>
							<h2 class="s.email">
								{me.value.email}
							</h2>
							<p onClick={onSignOut}>点击这里退出登录</p>
						</div> : (
							<RouterLink to={`/sign_in?return_to=${route.fullPath}`}>
								<h2>未登录用户</h2>
								<p>点击这里登录</p>
							</RouterLink>
						)}
				</section>
				<nav>
					<ul class={s.action_list} >
						{linkArray.map((item, index) => (
							<li>
								<RouterLink to={item.to} class={index === currentTab.value ? s.selected : s.action}
								>
									<Icon name={item.name} class={s.icon} />
									<span>{item.text}</span>
								</RouterLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	}
})

export const OverlayIcon = defineComponent({
	setup: () => {
		const refoverlayVisible = ref(false)
		const onClickMenu = () => {
			refoverlayVisible.value = !refoverlayVisible.value
		}
		return () => <>
			<Icon name="menu" class={s.icon} onClick={onClickMenu} />
			{refoverlayVisible.value &&
				<Overlay onClose={() => refoverlayVisible.value = false} />
			}
		</>
	}
})