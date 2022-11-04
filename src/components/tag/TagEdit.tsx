import { Icon } from "../../shared/Icon";
import { defineComponent } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import s from './Tag.module.scss';
import { TagForm } from './TagForm';
import { Button } from "../../shared/Button";
export const TagEdit = defineComponent({
    setup: (props, context) => {
        return () => (
            <MainLayout>
                {{
                    title: () => "新建标签",
                    icon: () => <Icon name="left" onClick={() => { }} />,
                    default: () => <>
                        <TagForm />
                        <div class={s.actions}>
                            <Button level='danger' class={s.removeTags} onClick={() => { }}>删除标签</Button>
                            <Button level='danger' class={s.removeTagsAndItems} onClick={() => { }}>删除标签和记账</Button>
                        </div>
                    </>
                }}
            </MainLayout>
        );
    },
})