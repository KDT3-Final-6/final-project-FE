import districtTab from '@src/constants/districtTab'

const getSelected = (checkTab: string[]) => {
  return districtTab
    .filter((tab) => checkTab.includes(String(tab.categoryId)))
    .map((tab) => tab.district)
}

export default getSelected
