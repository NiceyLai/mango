import { faker } from '@faker-js/faker'
import { AxiosRequestConfig } from 'axios';

type Mock = (config: AxiosRequestConfig) => [number, any]

faker.setLocale('zh_CN');

export const mockSession: Mock = (config) => {
  return [200, {
    jwt: faker.random.word()
  }]
}

export const mockTagIndex: Mock = (config) => {
  if (config.params.kind === 'expenses') {
    return [200, {
      resources: [
        { id: 1, name: '餐费', sign: '￥', kind: 'expenses' },
        { id: 2, name: '打车', sign: '￥', kind: 'expenses' },
        { id: 3, name: '聚餐', sign: '￥', kind: 'expenses' },
        { id: 4, name: '打车', sign: '￥', kind: 'expenses' },
        { id: 5, name: '聚餐', sign: '￥', kind: 'expenses' },
        { id: 6, name: '打车', sign: '￥', kind: 'expenses' },
        { id: 7, name: '聚餐', sign: '￥', kind: 'expenses' },
      ]
    }]
  } else {
    return [200, {
      resources: [
        { id: 4, name: '工资', sign: '￥', kind: 'income' },
        { id: 5, name: '彩票', sign: '￥', kind: 'income' },
        { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 11, name: '彩票', sign: '￥', kind: 'income' },
        { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 17, name: '彩票', sign: '￥', kind: 'income' },
        { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 4, name: '工资', sign: '￥', kind: 'income' },
        { id: 5, name: '彩票', sign: '￥', kind: 'income' },
        { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 11, name: '彩票', sign: '￥', kind: 'income' },
        { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 17, name: '彩票', sign: '￥', kind: 'income' },
        { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 4, name: '工资', sign: '￥', kind: 'income' },
        { id: 5, name: '彩票', sign: '￥', kind: 'income' },
        { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 11, name: '彩票', sign: '￥', kind: 'income' },
        { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 17, name: '彩票', sign: '￥', kind: 'income' },
        { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 4, name: '工资', sign: '￥', kind: 'income' },
        { id: 5, name: '彩票', sign: '￥', kind: 'income' },
        { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 11, name: '彩票', sign: '￥', kind: 'income' },
        { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 17, name: '彩票', sign: '￥', kind: 'income' },
        { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 4, name: '工资', sign: '￥', kind: 'income' },
        { id: 5, name: '彩票', sign: '￥', kind: 'income' },
        { id: 6, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 11, name: '彩票', sign: '￥', kind: 'income' },
        { id: 18, name: '滴滴', sign: '￥', kind: 'income' },
        { id: 17, name: '彩票', sign: '￥', kind: 'income' },
        { id: 19, name: '滴滴', sign: '￥', kind: 'income' },
      ]
    }]
  }
}
